const {Button, InputSearch, Table} = uskin;

let column = [{
  title: 'ID',
  key: 'id',
  width: '150px',
  dataIndex: 'id',
  sortBy: 'number',
  filterAll: '全部',
  filter: [{
    name: 'id大于等于4',
    key: 'gt4',
    filterBy: function(item) {
      if (item.id >= 4) {
        return true;
      }
      return false;
    }
  }, {
    name: 'id小于4',
    key: 'lt4',
    filterBy: function(item) {
      if (item.id < 4) {
        return true;
      }
      return false;
    }
  }]
}, {
  title: 'Category',
  key: 'category',
  width: '120px',
  dataIndex: 'category',
  sortBy: 'string'
}, {
  title: 'Flavor',
  key: 'flavor',
  width: '70px',
  dataIndex: 'flavor',
  sortBy: 'string'
}, {
  title: 'Level',
  key: 'level',
  dataIndex: 'level',
  filter: [{
    name: 'level 1',
    filterBy: 'First Level',
    key: 'level 1'
  }, {
    name: 'level 2',
    filterBy: 'Second Level',
    key: 'level 2'
  }, {
    name: 'level 3',
    filterBy: 'Third Level',
    key: 'level 3'
  }, {
    name: 'level 4',
    filterBy: 'Fourth Level',
    key: 'level 4'
  }],
  sortBy: function(item1, item2) {
    let weight = ['First Level', 'Second Level', 'Third Level', 'Fourth Level'];
    if (weight.indexOf(item1.level) > weight.indexOf(item2.level)) {
      return 1;
    } else if (weight.indexOf(item1.level) < weight.indexOf(item2.level)) {
      return -1;
    } else {
      return 0;
    }
  }
}, {
  title: 'CPU',
  key: 'cpu',
  dataIndex: 'cpu',
  sortBy: 'number',
  width: '50px'
}, {
  title: 'Price',
  key: 'price',
  dataIndex: 'price',
  sortBy: 'number'
}, {
  title: 'Double Price',
  key: 'double_price',
  sortBy: function(item1, item2) {
    if (item1.price * 2 > item2.price * 2) {
      return 1;
    } else if (item1.price * 2 < item2.price * 2) {
      return -1;
    } else {
      return 0;
    }
  },
  render: function(col, item, index) {
    return <div style={{color: '#f78913'}}>{item.price * 2}</div>;
  }
}, {
  title: 'Data Print',
  key: 'data_print',
  printData: function(col, item, e) {
    console.log('event:', e, 'GET COLUMN:', col, ' DATA:', item);
  },
  render: function(col, item, index) {
    if (item.id > 4) {
      return <div>Printing Disabled</div>;
    } else {
      return (
        <div style={{fontWeight: 500, cursor: 'pointer'}}
          onClick={this.printData.bind(this, col, item)}>{'Print ID ' + item.id}
        </div>
      );
    }
  }
}];

let data1 = [{
  id: 1,
  category: 'Micro-1',
  flavor: 'Micro',
  level: 'First Level',
  cpu: '1',
  price: '0.056'
}, {
  id: 2,
  category: 'Standard-3',
  flavor: 'Standard',
  level: 'Second Level',
  cpu: '3',
  price: '0.444'
}, {
  id: 3,
  category: 'Micro-2',
  flavor: 'Micro',
  level: 'Third Level',
  cpu: '5',
  price: '0.056'
}, {
  id: 4,
  category: 'Standard-2',
  flavor: 'Standard',
  level: 'Fourth Level',
  cpu: '4',
  price: '0.444'
}, {
  id: 5,
  category: 'Micro-3',
  flavor: 'Micro',
  level: 'Second Level',
  cpu: '1',
  price: '0.056'
}, {
  id: 6,
  category: 'Standard-1',
  flavor: 'Standard',
  level: 'Third Level',
  cpu: '7',
  price: '0.444'
}];

let data2 = [{
  id: 1,
  category: 'Micro-1',
  flavor: 'Micro',
  level: 'First Level',
  cpu: '1',
  price: '0.056'
}, {
  id: 2,
  category: 'Standard-3',
  flavor: 'Standard',
  level: 'Second Level',
  cpu: '3',
  price: '0.444'
}, {
  id: 3,
  category: 'Micro-2',
  flavor: 'Micro',
  level: 'Third Level',
  cpu: '5',
  price: '0.056'
}, {
  id: 4,
  category: 'Standard-2',
  flavor: 'Standard',
  level: 'Fourth Level',
  cpu: '4',
  price: '0.444'
}, {
  id: 5,
  category: 'Micro-3',
  flavor: 'Micro',
  level: 'Second Level',
  cpu: '1',
  price: '0.056'
}, {
  id: 6,
  category: 'Standard-1',
  flavor: 'Standard',
  level: 'Third Level',
  cpu: '7',
  price: '0.444'
}, {
  id: 7,
  category: 'Standard-1',
  flavor: 'Standard',
  level: 'Third Level',
  cpu: '7',
  price: '0.444'
}];

class TableForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      update: true,
      load: false
    };

    ['inputSearchOnChange', 'updateData', 'toggleLoading', 'clearState'].forEach((func) => {
      this[func] = this[func].bind(this);
    });
  }

  checkboxInitialize(item) {
    return item.level.indexOf('Second Level') > -1;
  }

  checkboxOnChange(status, item, arr) {
    console.debug('checkbox on change', status, item, arr);
  }

  checkboxOnChangeAll(status, arr) {
    console.debug('checkbox on change all', status, arr);
  }

  inputSearchOnChange(text, status) {
    let filterCol = {
      category: true,
      level: true,
      price: true
    };

    if (text !== '') {
      this.refs.table.filter(filterCol, function(item, columns) {
        let keys = columns.map((col) => col.dataIndex);
        let ret = keys.some((key) => {
          if (item[key]) {
            let data = item[key].toLowerCase();
            return data.indexOf(text.toLowerCase()) > -1;
          }
          return false;
        });
        return ret;
      });
    } else {
      this.refs.table.filter(filterCol);
    }
  }

  updateData() {
    this.setState({
      update: !this.state.update
    });
  }

  toggleLoading() {
    this.setState({
      loading: !this.state.loading
    });
  }

  clearState() {
    this.refs.table.clearState();
  }

  render() {
    let data = this.state.update ? data1 : data2;

    return (
      <div className="main-box">
        <div className="button-box">
          <Button value="更新数据" onClick={this.updateData} />
          <Button value="清空状态" onClick={this.clearState} />
          <Button value="Loading Toggle" iconClass="refresh" initial={true} onClick={this.toggleLoading} />
          <InputSearch onChange={this.inputSearchOnChange} />
          <span>search in Category, Level and Price</span>
        </div>
        <Table ref="table"
          column={column}
          data={data}
          dataKey="id"
          loading={this.state.loading}
          checkbox={true}
          checkboxInitialize={this.checkboxInitialize}
          checkboxOnChange={this.checkboxOnChange}
          checkboxOnChangeAll={this.checkboxOnChangeAll}
          striped={true}
          hover={true} />
        <div className="desc">
          <p>The following is mini table</p>
        </div>
        <Table mini={true}
          column={column}
          data={data}
          dataKey={'id'} />
        <div className="bottom">
          <span>This is bottom</span>
        </div>
      </div>
    );
  }

}

ReactDOM.render(<TableForm />, document.getElementById('example'));
