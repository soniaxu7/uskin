var Table = uskin.Table,
  Button = uskin.Button;

var column = [{
  title: 'ID',
  width: '150px',
  dataIndex: 'id',
  sortBy: 'number',
  filter: [{
    name: 'id大于等于4',
    key: '1',
    filterBy: function(item) {
      if (item.id >= 4) {
        return true;
      }
    }
  }, {
    name: 'id小于4',
    key: '2',
    filterBy: function(item) {
      if (item.id < 4) {
        return true;
      }
    }
  }]
}, {
  title: 'Category',
  width: '120px',
  dataIndex: 'category',
  sortBy: 'string'
}, {
  title: 'Flavor',
  width: '70px',
  dataIndex: 'flavor',
  sortBy: 'string'
}, {
  title: 'Level',
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
  dataIndex: 'cpu',
  sortBy: 'number',
  width: '50px'
}, {
  title: 'Price',
  dataIndex: 'price',
  sortBy: 'number'
}, {
  title: 'Double Price',
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
  printData: function(col, item, e) {
    console.log('event:', e, 'GET COLUMN:', col, ' DATA:', item);
  },
  render: function(col, item, index) {
    if (item.id > 4) {
      return <div>Printing Disabled</div>;
    } else {
      return <div style={{fontWeight: 500, cursor: 'pointer'}}
        onClick={this.printData.bind(this, col, item)}>{'Print ID ' + item.id}</div>;
    }
  }
}];

var data = [{
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

var data2 = [{
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

var boxStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
};

var bottomStyle = {
  margin: '0 auto',
  paddingTop: 40,
  width: 80,
  height: 36,
  minHeight: 36,
  maxHeight: 36
};

var btnStyle = {
  margin: '0 auto',
  padding: '20px 0',
  width: 80,
  height: 36,
  minHeight: 36,
  maxHeight: 36
};

var updateBtnStyle = Object.assign({}, btnStyle);
updateBtnStyle.visibility = 'hidden';

function checkboxOnChange(e, status, checkedItem, checkedData) {
  console.debug('click triggered!', status, checkedItem, checkedData);
}

function checkboxInitialize(item) {
  return item.level.localeCompare('Second Level') ? false : true;
}

function updateData() {
  data.map(item => {
    item.id += 10;
    item.category += ' updated';
  });

  ReactDOM.render(
    <div style={boxStyle}>
      <div style={updateBtnStyle}>
        <Button value="更新数据" onClick={updateData}/>
      </div>
      <Table
        column={column}
        data={data2}
        dataKey={'id'}
        checkbox={true}
        checkboxOnChange={checkboxOnChange}
        striped={true}
        hover={true}/>
      <div style={bottomStyle}>
        <span>This is bottom</span>
      </div>
    </div>,
    document.getElementById('example')
  );
}

ReactDOM.render(
  <div style={boxStyle}>
    <div style={btnStyle}>
      <Button value="更新数据" onClick={updateData}/>
    </div>
    <Table
      column={column}
      data={data}
      dataKey={'id'}
      checkbox={true}
      checkboxInitialize={checkboxInitialize}
      checkboxOnChange={checkboxOnChange}
      striped={true}
      hover={true}/>
    <div style={bottomStyle}>
      <span>This is bottom</span>
    </div>
  </div>,
  document.getElementById('example')
);
