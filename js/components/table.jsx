import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../mixins/styles';
import createClassName from '../mixins/createClassName';

class Table extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sortCol: undefined,
      sortDirection: undefined,
      filterCol: {},
      filterBy: undefined,
      checkedKey: {}
    };

    this._sortDefaultType = ['number', 'boolean', 'date', 'string'];
    this._rowHeight = 41;
    this._displayData = [];

    var methods = ['_setResize', 'clearState', 'sortRow', 'clickFilterIcon', 'onFilter', 'checkboxOnChange', 'tableHeadOnClick'];
    methods.forEach((func) => {
      this[func] = this[func].bind(this);
    });
  }

  componentWillMount() {
    if (this.props.checkbox) {
      var checkboxInitialize = this.props.checkboxInitialize;

      if (checkboxInitialize) {
        var data = this.props.data,
          dataKey = this.props.dataKey,
          checkedKey = {};

        data.map(item => {
          if (checkboxInitialize(item)) {
            checkedKey[item[dataKey]] = true;
          }
        });

        this.setState({
          checkedKey: checkedKey
        });
      }
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this._setResize);
    this._setResize();
  }

  componentDidUpdate() {
    this._setResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._setResize);
  }

  clearState() {
    this.setState({
      sortCol: undefined,
      sortDirection: undefined,
      filterCol: {},
      filterBy: undefined,
      checkedKey: {}
    });

    this.refs.checkall.checked = false;
  }

  _setResize() {
    var theadDOM = this.refs.thead,
      tbodyDOM = this.refs.tbody;

    var colLength = this.props.column.length + (this.props.checkbox ? 1 : 0);

    if (tbodyDOM.scrollHeight > tbodyDOM.clientHeight) {
      if (colLength === theadDOM.childNodes.length) {
        var scrollColumn = document.createElement('div');
        var width = tbodyDOM.offsetWidth - tbodyDOM.clientWidth + 'px';

        scrollColumn.style.flex = 1;
        scrollColumn.style.width = width;
        scrollColumn.style.maxWidth = width;
        scrollColumn.style.minWidth = width;
        scrollColumn.style.padding = 0;

        theadDOM.appendChild(scrollColumn);
      }
    } else if (colLength < this.refs.thead.childNodes.length) {
      theadDOM.removeChild(theadDOM.lastChild);
    }
  }

  getRows() {
    var k = this.state.checkedKey,
      _dataKey = this.props.dataKey;

    return this._displayData.filter(function(m) {
      return k[m.data[_dataKey]];
    });
  }

  sortRow(col, direction) {
    var isReset = this.state.sortCol === col && this.state.sortDirection === direction;

    this.setState({
      sortCol: isReset ? undefined : col,
      sortDirection: isReset ? undefined : direction
    });
  }

  sortData(item1, item2, sortBy) {
    var ret;

    if (this._sortDefaultType.indexOf(sortBy) > -1) {
      var sortIndex = this.state.sortCol.dataIndex;
      ret = this.sortByDefaultType(item1[sortIndex], item2[sortIndex], sortBy);
    } else {
      ret = sortBy(item1, item2);
    }

    return ret === 0 ? this.sortByKey(item1, item2, this.props.dataKey) * this.state.sortDirection : ret;
  }

  sortByDefaultType(a, b, sortType) {
    if (typeof a === 'undefined') {
      return 1;
    } else if (typeof b === 'undefined') {
      return -1;
    }
    switch (sortType) {
    case 'number':
      return a - b;
    case 'boolean':
      return (a === b) ? 0 : a;
    case 'date':
      return new Date(a) - new Date(b);
    default:
      return a.localeCompare(b);
    }
  }

  sortByKey(a, b, key) {
    return a[key] > b[key] ? 1 : -1;
  }

  destroyFilter() {
    var container = document.getElementById('uskin-filter-container');
    if (container) {
      var root = container.parentNode;

      ReactDOM.unmountComponentAtNode(container);
      root.removeChild(container);
    }
  }

  createFilter(column, index, e) {
    var root = e.target.parentNode;

    var filterBy = this.state.filterBy,
      filterCol = this.state.filterCol;

    var filter = (
      <div className="filter" data-index={index} onClick={this.onFilter}>
        <div className={!filterBy ? 'selected' : null} key="-1" data-value="-1">
          {<span data-value="-1">{column.filterAll ? column.filterAll : 'All'}</span>}
          {!filterBy ? <i className="glyphicon icon-active-yes" data-value="-1"/> : null}
        </div>
        {column.filter.map((item, i) => {
          var isSelected = filterCol[column.key] && (filterBy === item.filterBy);
          return (
            <div className={isSelected ? 'selected' : null} key={i} data-value={i}>
              <span data-value={i}>{item.name}</span>
              {isSelected ? <i className="glyphicon icon-active-yes" data-value={i}/> : null}
            </div>
          );
        })}
      </div>
    );

    var container = document.createElement('div');
    container.id = 'uskin-filter-container';
    root.appendChild(container);

    ReactDOM.render(filter, container);
  }

  clickFilterIcon(column, index, e) {
    var prevContainer = document.getElementById('uskin-filter-container');
    if (prevContainer) {
      this.destroyFilter();
    }

    this.createFilter(column, index, e);

    var that = this;
    document.addEventListener('click', function shouldDestroyFilter(event) {
      if (!(e.target.isEqualNode(event.target) && event.target.className === 'filter-icon')) {
        that.destroyFilter();
      }

      document.removeEventListener('click', shouldDestroyFilter, false);
    }, false);
  }

  onFilter(e) {
    var index = Number(e.target.getAttribute('data-value')),
      colIndex = Number(e.currentTarget.getAttribute('data-index')),
      col = this.props.column[colIndex];

    var filterCol = {};
    if (index !== -1) {
      filterCol[col.key] = true;
    }
    this.setState({
      filterCol: filterCol,
      filterBy: index === -1 ? undefined : col.filter[index].filterBy
    });
  }

  checkboxOnChange(e) {
    var index = e.target.value,
      data = this.props.data,
      dataKey = this.props.dataKey,
      checkedKey = this.state.checkedKey;

    if (index === '-1') {
      if (e.target.checked) {
        data.map(item => {
          checkedKey[item[dataKey]] = true;
        });
      } else {
        checkedKey = {};
      }
    } else {
      if (e.target.checked) {
        checkedKey[data[index][dataKey]] = true;
      } else {
        checkedKey[data[index][dataKey]] = false;
      }
    }

    var checkedData = [];
    this._displayData.map(item => {
      checkedKey[item.data[dataKey]] && checkedData.push(item.data);
    });
    this.refs.checkall.checked = (checkedData.length === this._displayData.length) ? true : false;

    this.props.checkboxOnChange && this.props.checkboxOnChange(e, e.target.checked, data[index], checkedData);
    this.setState({
      checkedKey: checkedKey
    });
  }

  tableHeadOnClick(e) {
    if (e.target.getAttribute('value')) {
      var column = this.props.column;

      var colIndex = Number(e.target.getAttribute('value')),
        dir = e.target.getAttribute('data-direction');

      switch (dir) {
      case 'up':
        this.sortRow(column[colIndex], 1);
        break;
      case 'down':
        this.sortRow(column[colIndex], -1);
        break;
      default:
        return;
      }
    }
  }

  _fixedWidth(width) {
    return {
      width: width,
      minWidth: width,
      maxWidth: width
    };
  }

  render() {
    var props = this.props,
      data = props.data,
      column = props.column;

    var className = createClassName({
      default: 'table',
      prefix: 'table-',
      props: {
        mini: props.mini,
        hover: props.hover,
        striped: props.striped
      }
    });
    var style = styles.getWidth(props.width);

    var renderDataGroup = (rcolumn, rdata, checkbox) => {
      var datagroup = [],
        state = this.state,
        dataKey = props.dataKey;

      rdata.map((item, dataIndex) => {
        var isFiltered = true,
          filterCol = state.filterCol;

        if (typeof state.filterBy === 'function') {
          isFiltered = state.filterBy(item, column);
        } else if (typeof state.filterBy === 'string') {
          isFiltered = rcolumn.some((col) => {
            if (filterCol[col.key]) {
              return item[col.dataIndex] === state.filterBy ? true : false;
            }
          });
        }

        if (isFiltered) {
          datagroup.push({
            data: item,
            render: <div key={item[dataKey]} className={state.checkedKey[item[dataKey]] ? 'row selected' : 'row'}>
                {props.checkbox ?
                  <div className="checkbox">
                    <input ref={'check' + dataIndex} value={dataIndex} onChange={this.checkboxOnChange} type="checkbox"
                           checked={state.checkedKey[item[dataKey]]}/>
                  </div> : null}
                {rcolumn.map((col, colIndex) =>
                  <div key={colIndex} style={col.width ? this._fixedWidth(col.width) : null}>
                    {col.render ? col.render(col, item, dataIndex) : item[col.dataIndex]}
                  </div>
                )}
              </div>
          });
        }
      });

      if (state.sortCol) {
        datagroup.sort((item1, item2) =>
          this.sortData(item1.data, item2.data, state.sortCol.sortBy) * state.sortDirection
        );
      }

      this._displayData = datagroup;
      return datagroup;
    };

    var dataGroup = renderDataGroup(column, data, props.checkbox);
    var checkAllStatus = true;

    if (!dataGroup.length) {
      checkAllStatus = false;
    }

    var checkedKey = this.state.checkedKey,
      dataKey = this.props.dataKey;
    dataGroup.forEach((item) => {
      if (!checkedKey[item.data[dataKey]]) {
        checkAllStatus = false;
        return;
      }
    });

    var renderSortGroup = (col, index) => {
      var state = this.state;

      return (
        <div className="sortable">
          <span className={(col === state.sortCol) && (state.sortDirection === 1) ? 'sort-up selected' : 'sort-up'}>
            <span className="arrow-up" value={index} data-direction="up"></span>
          </span>
          <span className={(col === state.sortCol) && (state.sortDirection === -1) ? 'sort-down selected' : 'sort-down'}>
            <span className="arrow-down" value={index} data-direction="down"></span>
          </span>
        </div>
      );
    };

    var renderColumnGroup = (columngroup, checkbox) => {
      var colgroup = [];

      if (checkbox) {
        colgroup.push(
          <div key="checkbox" className="checkbox">
            <input ref="checkall" value="-1" onChange={this.checkboxOnChange} type="checkbox" checked={checkAllStatus}/>
          </div>
        );
      }

      column.map((col, index) => {
        colgroup.push(
          <div key={index} style={col.width ? this._fixedWidth(col.width) : null}>
            <span>{col.title}</span>
            {col.sortBy ? renderSortGroup(col, index) : null}
            {col.filter ?
              <div className="filter-box">
                <div className="filter-icon" onClick={this.clickFilterIcon.bind(this, col, index)} />
              </div>
              : null
            }
          </div>
        );
      });

      return colgroup;
    };

    return (
      <div style={style} className={className}>
        <div ref="thead" className="table-header" onClick={this.tableHeadOnClick}>
          {renderColumnGroup(column, props.checkbox).map(col => col)}
        </div>
        {this.props.loading ?
          <div className="loading-data">
            <i className="glyphicon icon-loading" />
          </div>
          : null}
        <div ref="tbody" style={{display: this.props.loading ? 'none' : 'block'}} className="table-body">
          {dataGroup.map(item => item.render)}
        </div>
      </div>
    );
  }
}

export default Table;
