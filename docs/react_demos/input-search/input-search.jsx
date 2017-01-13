const { InputSearch, Table } = uskin;

let column = [{
  title: 'ID',
  key: 'id',
  width: 120,
  dataIndex: 'id',
  sortBy: 'number',
  filter: [{
    name: 'id大于等于4',
    key: '1',
    filterBy: function(item) {
      if (item.id >= 4) {
        return true;
      }
      return false;
    }
  }, {
    name: 'id小于4',
    key: '2',
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
  width: 120,
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
    key: '1',
    filterBy: 'First Level'
  }, {
    name: 'level 2',
    key: '2',
    filterBy: 'Second Level'
  }, {
    name: 'level 3',
    key: '3',
    filterBy: 'Third Level'
  }, {
    name: 'level 4',
    key: '4',
    filterBy: 'Fourth Level'
  }],
  sortBy: function(item1, item2) {
    var weight = ['First Level', 'Second Level', 'Third Level', 'Fourth Level'];
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
      return (<div style={{fontWeight: 500, cursor: 'pointer'}}
        onClick={this.printData.bind(this, col, item)}>{'Print ID ' + item.id}</div>);
    }
  }
}];

let data = [{
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

const SearchForm = React.createClass({
  searchLevel: function (text, status) {
    this.refs.table.filter(column[3], function(item) {
      var filter = text.toLowerCase(),
        level = item.level.toLowerCase();
      return level.indexOf(filter) > -1;
    });
  },

  searchFlavor: function (text, status) {
    if (status) {
      this.refs.table.filter(column[2], function(item) {
        var filter = text.toLowerCase(),
          flavor = item.flavor.toLowerCase();
        return flavor.indexOf(filter) > -1;
      });
    }
  },

  render: function() {
    return (
      <div>
        <div className="block">
          <InputSearch placeholder="Search in Level" onChange={this.searchLevel} width={200} />
          <div style={{display: 'inline-block', height: '32px', lineHeight: '32px', marginLeft: '10px'}}>
            Search in Level Column Automatically
          </div>
        </div>
        <div className="block">
          <InputSearch onChange={this.searchFlavor} width={200} type="light" />
          <div style={{display: 'inline-block', height: '32px', lineHeight: '32px', marginLeft: '10px'}}>
            Search in Flavor Column With Submit-Icon
          </div>
        </div>
        <div>
          <Table ref="table"
            column={column}
            data={data}
            dataKey={'id'} />
        </div>
      </div>
    );
  }
});

ReactDOM.render(<SearchForm />, document.getElementById('example'));
