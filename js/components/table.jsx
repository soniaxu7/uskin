import React from 'react';
import styles from '../mixins/styles';
import createClassName from '../mixins/createClassName';

class Table extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sortCol: undefined,
      sortDirection: undefined,
      filter: undefined,
      checkedKey: []
    };

    this._sortDefaultType = ['number', 'boolean', 'date', 'string'];
    this._rowHeight = 41;
    this._setResize = this._setResize.bind(this);
    this._displayData = [];
    this.sortRow = this.sortRow.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.checkboxOnChange = this.checkboxOnChange.bind(this);
    this.tableHeadOnClick = this.tableHeadOnClick.bind(this);
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
    window.onresize = this._setResize;
    this._setResize();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      sortCol: undefined,
      sortDirection: undefined,
      filter: undefined,
      checkedKey: []
    });
  }

  _setResize() {
    var tbodyDOM = this.refs.tbody,
      tbodyTopDistance = tbodyDOM.offsetTop,
      tbodyFixedHeight = this.props.data.length * this._rowHeight,
      screenHeight = window.innerHeight;

    var tbodyHeight = screenHeight - tbodyTopDistance;
    var colLength = this.props.column.length + (this.props.checkbox ? 1 : 0);

    if (tbodyHeight < tbodyFixedHeight) {
      tbodyDOM.style.height = tbodyHeight + 'px';

      if (colLength === this.refs.thead.childNodes.length) {
        tbodyDOM.style.overflowY = 'scroll';

        if (tbodyDOM.offsetWidth - tbodyDOM.clientWidth) {
          var scrollColumn = document.createElement('div');
          scrollColumn.style.flex = 'none';
          scrollColumn.style.width = tbodyDOM.offsetWidth - tbodyDOM.clientWidth + 'px';
          scrollColumn.style.padding = 0;

          this.refs.thead.appendChild(scrollColumn);
        }
      }
    } else {
      if (colLength < this.refs.thead.childNodes.length) {
        var theadDOM = this.refs.thead;
        theadDOM.removeChild(theadDOM.lastChild);
        tbodyDOM.style.overflowY = null;
      }
    }
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

  onFilter(e) {
    var index = Number(e.target.value),
      colIndex = Number(e.currentTarget.getAttribute('data-index')),
      col = this.props.column[colIndex];

    this.setState({
      filter: index === -1 ? undefined : col.filter[index].filter
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
      this.refs.checkall.checked = false;
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
    this.props.checkboxOnChange(e, e.target.checked, data[index], checkedData);

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

  renderFilterGroup(col, colIndex) {
    return (
      <select data-index={colIndex} onChange={this.onFilter}>
        <option key="-1" value="-1">All</option>
        {col.filter.map((item, index) =>
          <option key={index} value={index}>{item.name}</option>
        )}
      </select>
    );
  }

  renderSortGroup(col, index) {
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
  }

  renderColumnGroup(column, checkbox) {
    var colgroup = [];

    if (checkbox) {
      colgroup.push(
        <div key="checkbox" className="checkbox">
          <input ref="checkall" value="-1" onChange={this.checkboxOnChange} type="checkbox"/>
        </div>
      );
    }

    column.map((col, index) => {
      colgroup.push(
        <div key={index} style={col.width ? this._fixedWidth(col.width) : null}>
          <span>{col.title}</span>
          {col.filter ? <span>{this.renderFilterGroup(col, index)}</span> : null}
          {col.sortBy ? <span>{this.renderSortGroup(col, index)}</span> : null}
        </div>
      );
    });

    return colgroup;
  }

  renderDataGroup(column, data, checkbox) {
    var datagroup = [],
      props = this.props,
      state = this.state,
      dataKey = props.dataKey;

    data.map((item, dataIndex) => {
      if (state.filter === undefined || state.filter(item)) {
        datagroup.push({
          data: item,
          render: <div key={item[dataKey]} className={state.checkedKey[item[dataKey]] ? 'row selected' : 'row'}>
              {props.checkbox ?
                <div className="checkbox">
                  <input ref={'check' + dataIndex} value={dataIndex} onChange={this.checkboxOnChange} type="checkbox"
                         checked={state.checkedKey[item[dataKey]]}/>
                </div> : null}
              {column.map((col, colIndex) =>
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
  }

  render() {
    var props = this.props,
      data = props.data,
      column = props.column;

    var className = createClassName({
      default: 'table',
      prefix: 'table-',
      props: {
        hover: props.hover,
        striped: props.striped
      }
    });
    var style = styles.getWidth(props.width);

    return (
      <div style={style} className={className}>
        <div ref="thead" className="table-header" onClick={this.tableHeadOnClick}>
          {this.renderColumnGroup(column, props.checkbox).map(col => col)}
        </div>
        <div ref="tbody" className="table-body">
          {this.renderDataGroup(column, data, props.checkbox).map(item => item.render)}
        </div>
      </div>
    );
  }
}

export default Table;
