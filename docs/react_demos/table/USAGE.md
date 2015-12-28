## Example
<a href="./table.html" target="_blank">Table Example</a>

## Usage
```
var Table = uskin.Table;

var column = [{
  title: 'ID',
  key: 'id',
  dataIndex: 'id',
  sortBy: 'number',
  filter: [{
    name: 'id大于等于4',
    key: '1',
    filter: function(item) {
      if (item.id >= 4)
        return true;
    }
  }, {
    name: 'id小于4',
    key: '2',
    filter: function(item) {
      if (item.id < 4)
        return true;
    }
  }]
}, {
  title: 'Category',
  key: 'category',
  dataIndex: 'category',
  sortBy: 'string'
}, {
  title: 'Flavor',
  key: 'flavor',
  dataIndex: 'flavor',
  sortBy: 'string'
}, {
  title: 'Level',
  key: 'level',
  dataIndex: 'level',
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
  sortBy: 'number'
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
  key: 'print',
  printData: function(col, item, e) {
    console.log('event:', e, 'GET COLUMN:', col, ' DATA:', item);
  },
  render: function(col, item, index) {
    if (item.id > 4) {
      return <div>Printing Disabled</div>
    } else {
      return <div style={{fontWeight: 500, cursor: 'pointer'}} 
        onClick={this.printData.bind(this, col, item)}>{'Print ID ' + item.id}</div>
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

function checkboxOnClick(e, status, checkedData, data) {
  console.debug('click triggered!', status, checkedData, data);
}

function checkboxInitialize(item) {
  return item.level.localeCompare('Second Level') ? false : true;
}

ReactDOM.render(
  <Table 
    column={column}
    data={data}
    dataKey={'id'} 
    checkbox={true}
    checkboxInitialize={checkboxInitialize}
    checkboxOnClick={checkboxOnClick}
    width={900}
    striped={true}
    hover={true}
  />, document);
```

## API
<table>
  <thead>
    <tr>
      <th style="width: 100px;">name</th>
      <th style="width: 50px;">type</th>
      <th style="width: 50px;">default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>items</td>
      <td>Array</td>
      <td></td>
      <td><a href="#items">见下方items详解</a></td>
    </tr>
    <tr>
      <td>size</td>
      <td>String</td>
      <td></td>
      <td>设置size="small"为small样式，否则为默认样式</td>
    </tr>
  </tbody>
</table>

**items**
<table id="items">
  <thead>
    <tr>
      <th style="width: 100px;">name</th>
      <th style="width: 50px;">type</th>
      <th style="width: 50px;">default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>column</td>
      <td>Array</td>
      <td></td>
      <td><a href="#column">见下方column详解</a></td>
    </tr>
    <tr>
      <td>data</td>
      <td>Array</td>
      <td></td>
      <td>需要展示在table的数据信息</td>
    </tr>
    <tr>
      <td>dataKey(必填)</td>
      <td>String</td>
      <td></td>
      <td>data的唯一key值的列，例如每个data元素中的id值</td>
    </tr>
    <tr>
      <td>checkbox</td>
      <td>Boolean</td>
      <td></td>
      <td>是否附带checkbox</td>
    </tr>
    <tr>
      <td>checkboxInitialize</td>
      <td>Funtion</td>
      <td></td>
      <td>table初始化时指定选中的row</td>
    </tr>
    <tr>
      <td>checkboxOnchange</td>
      <td>Function</td>
      <td></td>
      <td>table中的checkbox被点击时返回信息Function(e, status, checkedData, data)，依次为被点击的DOM节点，被点击的状态，被点击的data元素信息，所有以选中的数据集合</td>
    </tr>
    <tr>
      <td>width</td>
      <td>Number</td>
      <td></td>
      <td>table的宽度</td>
    </tr>
    <tr>
      <td>striped</td>
      <td>Boolean</td>
      <td>false</td>
      <td>是否带striped样式</td>
    </tr>
    <tr>
      <td>hover</td>
      <td>Boolean</td>
      <td>false</td>
      <td>是否带hover样式</td>
    </tr>
  </tbody>
</table>

**column**
<table id="column">
  <thead>
    <tr>
      <th style="width: 100px;">name</th>
      <th style="width: 50px;">type</th>
      <th style="width: 50px;">default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>title</td>
      <td>String</td>
      <td></td>
      <td>column的title</td>
    </tr>
    <tr>
      <td>key</td>
      <td>String</td>
      <td></td>
      <td>每个column的唯一key值</td>
    </tr>
    <tr>
      <td>dataIndex</td>
      <td>String</td>
      <td></td>
      <td>列数据在数据项中对应的key</td>
    </tr>
    <tr>
      <td>render</td>
      <td>Function</td>
      <td></td>
      <td>若想自定义列数据的样式或列数据的数据显示，设置render: function(col, item, index)，并返回DOM对象或String</td>
    </tr>
    <tr>
      <td>sortBy</td>
      <td>String</td>
      <td></td>
      <td>不设置则没有sort功能，若需要分类，sortBy可选值为number,boolean,date和string。若想自定义排序功能，sortBy: function(item1, item2)，返回值为1，0或-1</td>
    </tr>
    <tr>
      <td>Filter</td>
      <td>Array</td>
      <td></td>
      <td><a href="#filter">见下方filter详解</a></td>
    </tr>
  </tbody>
</table>

**column: { filter: }**
<table id="filter">
  <thead>
    <tr>
      <th style="width: 100px;">name</th>
      <th style="width: 50px;">type</th>
      <th style="width: 50px;">default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>name</td>
      <td>String</td>
      <td></td>
      <td>filter的title</td>
    </tr>
    <tr>
      <td>key</td>
      <td>String</td>
      <td></td>
      <td>每个filter的唯一key值</td>
    </tr>
    <tr>
      <td>filter</td>
      <td>Function</td>
      <td></td>
      <td>filter: function(item)返回true或false，表示是否符合筛选条件</td>
    </tr>
  </tbody>
</table>
