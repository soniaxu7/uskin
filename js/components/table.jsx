import React from 'react';
import styles from '../mixins/styles';
import createClassName from '../mixins/createClassName';

class Table extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sortCol: undefined,
      sortDirection: -1,
      filter: undefined
    };
    this._displayData = [];
    this._sortDefaultType = ['number', 'boolean', 'date', 'string'];
    this.checkboxOnClick = this.checkboxOnClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      sortCol: undefined,
      sortDirection: -1,
      filter: undefined
    });
  }

  sortRow(col, direction) {
    this.setState({
      sortCol: col,
      sortDirection: direction
    });
  }

  sortData(item1, item2, sortBy) {
    var res;
    if (this._sortDefaultType.indexOf(sortBy) > -1) {
      var sortIndex = this.state.sortCol.dataIndex;
      res = this.sortByDefaultType(item1[sortIndex], item2[sortIndex], sortBy);
    } else {
      res = sortBy(item1, item2);
    }

    if (res === 0) {
      return this._sortByKey(item1, item2, this.props.dataKey) * this.state.sortDirection;
    } else {
      return res;
    }
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

  _sortByKey(a, b, key) {
    return a[key] > b[key] ? 1 : -1;
  }

  onFilter(col, e) {
    var index = e.target.value;

    this.setState({
      filter: col.filter[index].filter
    });
  }

  checkboxOnClick(e) {
    var index = e.target.value;

    if (index === '-1') {
      for (let i = 0; i < this._displayData.length; i++) {
        this.refs['check' + i].checked = this.refs.checkall.checked;
      }
      this.props.checkboxOnClick(e, this.refs.checkall.checked, null, this.refs.checkall.checked ? this._displayData : []);
    } else {
      this.refs.checkall.checked = false;

      var checkedData = [];
      if (this.refs['check' + index]) {
        for (let i = 0; i < this._displayData.length; i++) {
          if (this.refs['check' + i].checked) {
            checkedData.push(this._displayData[i]);
          }
        }
      }

      this.props.checkboxOnClick(e, this.refs['check' + index].checked, this._displayData[index], checkedData);
    }
  }

  render() {
    var props = this.props,
      state = this.state,
      data = props.data,
      column = props.column,
      dataKey = props.dataKey;

    var className = createClassName({
      default: 'table',
      prefix: 'table-',
      props: {
        hover: props.hover,
        striped: props.striped
      }
    });
    var style = styles.getWidth(props.width);

    if (state.sortCol) {
      data.sort((item1, item2) =>
        this.sortData(item1, item2, state.sortCol.sortBy) * state.sortDirection
      );
    }

    if (state.filter) {
      var newData = [];
      data.map(item => {
        if (state.filter(item)) {
          newData.push(item);
        }
      });

      data = newData;
    }

    this._displayData = data;

    return (
      <table style={style} className={className}>
        <thead>
          <tr>
            {props.checkbox ? <th><input ref="checkall" value="-1" onClick={this.checkboxOnClick} type="checkbox"/></th> : null}
            {column.map((col) =>
              <th key={col.key} className={col.sortBy ? 'sortable' : null}>
                {col.filter ?
                  <span>{col.title}
                    <select onChange={this.onFilter.bind(this, col)}>
                      {col.filter.map((item, index) =>
                        <option key={index} value={index}>{item.name}</option>
                      )}
                    </select>
                  </span> : col.title
                }
                {col.sortBy ?
                  <span>
                    <span style={{cursor: 'pointer'}} onClick={this.sortRow.bind(this, col, 1)}>▲</span>
                    <span style={{cursor: 'pointer'}} onClick={this.sortRow.bind(this, col, -1)}>▼</span>
                  </span> :
                  null
                }
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) =>
            <tr className={item.sortBy ? 'sortable' : null} key={item[dataKey]}>
              {props.checkbox ? <td><input ref={'check' + index} value={index} onClick={this.checkboxOnClick} type="checkbox"/></td> : null}
              {column.map(col =>
                <td key={col.key}>{col.render ? col.render(col, item, index) : item[col.dataIndex]}</td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

export default Table;
