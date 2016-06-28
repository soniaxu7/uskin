var React = require('react');
var uskin = require('uskin');
var Table = uskin.Table;

function listener(e, status) {
  console.debug('click triggered!', e, status);
}

function displayClose(e) {
  var tarID = e.target.id;
  var display = document.getElementById('s'+tarID).style.display;
  (display === 'none') && (document.getElementById('s'+tarID).style.display = 'block');
  (display === 'block') && (document.getElementById('s'+tarID).style.display = 'none');
}

var column = [{
  title: '属性',
  width: '150px',
  key: "property",
  dataIndex: 'property'
}, {
  title: '说明',
  key: "explain",
  dataIndex: 'explain',
  render: function(col, item, index) {
    return <div style={{wordWrap: 'break-word'}}>{item.explain}</div>;
  }
}, {
  title: '类型',
  width: '100px',
  key: "type",
  dataIndex: 'type',
}, {
  title: '默认值',
  width: '150px',
  key: "defaultValue",
  dataIndex: 'defaultValue',
}];

var data = [{
  property: 'column',
  explain: '设置表格标题栏标题',
  type: 'array',
  defaultValue: '-',
  id: 1
}, {
  property: 'data',
  explain: '设置表格数据',
  type: 'array',
  defaultValue: '-',
  id: 2
}, {
  property: 'dataKey',
  explain: '设置表格数据的唯一标识',
  type: 'string',
  defaultValue: '-',
  id: 3
}, {
  property: 'checkbox',
  explain: '设置表格是否选中',
  type: 'boolean',
  defaultValue: 'false',
  id: 4
}, {
  property: 'striped',
  explain: '设置是否开启隔行颜色改变',
  type: 'boolean',
  defaultValue: 'false',
  id: 5
}, {
  property: 'hover',
  explain: '设置鼠标经过时样式是否发生改变',
  type: 'boolean',
  defaultValue: 'false',
  id: 6
}, {
  property: 'checkboxInitialize',
  explain: '初始化选中的表格',
  type: 'function',
  defaultValue: 'function() {}',
  id: 7
}, {
  property: 'checkboxOnChange',
  explain: '选中事件change的handler',
  type: 'function',
  defaultValue: 'function() {}',
  id: 8
}];

var data2 = [{
  property: 'title',
  explain: '设置表格标题栏的名称',
  type: 'string',
  defaultValue: '-',
  id: 1
}, {
  property: 'dataIndex',
  explain: '设置数据索引',
  type: 'string',
  defaultValue: '-',
  id: 2
}, {
  property: 'width',
  explain: '设置开关的尺寸',
  type: 'string',
  defaultValue: '-',
  id: 3
}, {
  property: 'sortBy',
  explain: '定义排序方法',
  type: 'function',
  defaultValue: 'function() {}',
  id: 4
}, {
  property: 'filter',
  explain: '定义筛选事件',
  type: 'function',
  defaultValue: 'function() {}',
  id: 5
}];

var columnTable = [{
  title: 'ID',
  width: '150px',
  key: "id",
  dataIndex: 'id',
  sortBy: 'number',
  filter: [{
    name: 'id大于等于2',
    key: '1',
    filterBy: function(item) {
      if (item.id >= 2) {
        return true;
      }
    }
  }, {
    name: 'id小于2',
    key: '2',
    filterBy: function(item) {
      if (item.id < 2) {
        return true;
      }
    }
  }]
}, {
  title: 'Category',
  width: '120px',
  key: "category",
  dataIndex: 'category',
  sortBy: 'string'
}, {
  title: 'Level',
  key: "level",
  dataIndex: 'level',
  filter: [{
    name: 'level 1',
    key: '1',
    filterBy: function(item) {
      return item.level.localeCompare('First Level') === 0 ? true : false;
    }
  }, {
    name: 'level 2',
    key: '2',
    filterBy: function(item) {
      return item.level.localeCompare('Second Level') === 0 ? true : false;
    }
  }, {
    name: 'level 3',
    key: '3',
    filterBy: function(item) {
      return item.level.localeCompare('Third Level') === 0 ? true : false;
    }
  }, {
    name: 'level 4',
    key: '4',
    filterBy: function(item) {
      return item.level.localeCompare('Fourth Level') === 0 ? true : false;
    }
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
  title: 'Price',
  key: "price",
  dataIndex: 'price',
  sortBy: 'number'
}, {
  title: 'Double Price',
  key: "d_price",
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
}];

var data1 = [{
  id: 1,
  category: 'Micro-1',
  level: 'First Level',
  price: '0.056'
}, {
  id: 2,
  category: 'Standard-3',
  level: 'Second Level',
  price: '0.444'
}, {
  id: 3,
  category: 'Micro-2',
  level: 'Third Level',
  price: '0.056'
}, {
  id: 4,
  category: 'Standard-2',
  level: 'Fourth Level',
  price: '0.444'
}];

function checkboxOnChange(e, status, checkedItem, checkedData) {
  console.debug('click triggered!', status, checkedItem, checkedData);
}

function checkboxInitialize(item) {
  return item.level.localeCompare('Second Level') ? false : true;
}

class IntroTable extends React.Component {
  render(){
    return (
      <div className="table-page">
        <article>
          <h1>Table</h1>
          <p>A table with consistent styles of hover, click and check. The function of sequencing and filter are supported.</p>
        </article>
        <div>
          <h2>Code Demos</h2>
          <div className="total">
            <div className="contain">
              <div className="component">
                <Table
                  column={columnTable}
                  data={data1}
                  dataKey={'id'}
                  checkbox={true}
                  checkboxOnChange={checkboxOnChange}
                  striped={true}
                  hover={true}/>
              </div>
              <div>
                <p className="title">表格</p>
                <p className="content">通过设置属性生成表格</p>
                <p className="code-show" id="code1" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode1" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Table = uskin.Table;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Table column=&#123;column} data=&#123;data1} dataKey=&#123;'id'} checkbox=&#123;true} checkboxOnChange=&#123;checkboxOnChange} striped=&#123;true} hover=&#123;true}/><br/>
                       &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="api">
            <h2>Attributes</h2>
            <div>
              <div>
                <p>Table</p>
                <Table
                  width="90%"
                  column={column}
                  data={data}
                  dataKey={'id'}
                  checkbox={false}
                  striped={false}
                  hover={false}/>
              </div>
              <div>
                <p>Table.column</p>
                <Table
                  width="90%"
                  column={column}
                  data={data2}
                  dataKey={'id'}
                  checkbox={false}
                  striped={false}
                  hover={false}/>
              </div>
            </div>
          </div>
          <div className="param">
            <h2></h2>
            <div className="left">
              <div className="contain">
                <div>
                  <p className="title">column属性的传参</p>
                  <p className="content">设置表格的表头部分内容，可添加筛查排序等参数</p>
                </div>
                <div className="code">
                  <pre>
                    <code className="javascript">
                      var column = [&#123;<br/>
                        &nbsp;title: 'ID',<br/>
                        &nbsp;width: '150px',<br/>
                        &nbsp;key: 'id',<br/>
                        &nbsp;dataIndex: 'id',<br/>
                        &nbsp;sortBy: 'number',<br/>
                        &nbsp;filter: [&#123;<br/>
                          &nbsp;&nbsp;name: 'id大于等于2',<br/>
                          &nbsp;&nbsp;key: '1',<br/>
                          &nbsp;&nbsp;filterBy: function(item) &#123;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (item.id >= 4) &#123;return true;}<br/>
                        &nbsp;}, &#123;<br/>
                          &nbsp;&nbsp;name: 'id小于2',<br/>
                          &nbsp;&nbsp;key: '2',<br/>
                          &nbsp;&nbsp;filterBy: function(item) &#123;<br/>
                            &nbsp;&nbsp;&nbsp;if (item.id &lt; 4) &#123;return true;}<br/>
                          &nbsp;&nbsp;}<br/>
                        &nbsp;}]<br/>
                      }, &#123;<br/>
                        &nbsp;title: 'Category',<br/>
                        &nbsp;width: '120px',<br/>
                        &nbsp;key: 'category',<br/>
                        &nbsp;dataIndex: 'category',<br/>
                        &nbsp;sortBy: 'string'<br/>
                      }, &#123;<br/>
                        &nbsp;title: 'Level',<br/>
                        &nbsp;key: 'level',<br/>
                        &nbsp;dataIndex: 'level',<br/>
                        &nbsp;filter: [&#123;<br/>
                          &nbsp;&nbsp;name: 'level 1',<br/>
                          &nbsp;&nbsp;key: '1',<br/>
                          &nbsp;&nbsp;filterBy: function(item) &#123;<br/>
                            &nbsp;&nbsp;&nbsp;return item.level.localeCompare('First Level') === 0 ? true : false;<br/>
                          &nbsp;&nbsp;}<br/>
                        &nbsp;}, &#123;<br/>
                          &nbsp;&nbsp;name: 'level 2',<br/>
                          &nbsp;&nbsp;key: '2',<br/>
                          &nbsp;&nbsp;filterBy: function&#40;item) &#123;<br/>
                            &nbsp;&nbsp;&nbsp;return item.level.localeCompare&#40;'Second Level') === 0 ? true : false;<br/>
                          &nbsp;&nbsp;}<br/>
                        &nbsp;}, &#123;<br/>
                          &nbsp;&nbsp;name: 'level 3',<br/>
                          &nbsp;&nbsp;key: '3',<br/>
                          &nbsp;&nbsp;filterBy: function&#40;item) &#123;<br/>
                            &nbsp;&nbsp;&nbsp;return item.level.localeCompare&#40;'Third Level') === 0 ? true : false;<br/>
                          &nbsp;&nbsp;}<br/>
                        &nbsp;}, &#123;<br/>
                          &nbsp;&nbsp;name: 'level 4',<br/>
                          &nbsp;&nbsp;key: '4',<br/>
                          &nbsp;&nbsp;filterBy: function&#40;item) &#123;<br/>
                            &nbsp;&nbsp;&nbsp;return item.level.localeCompare&#40;'Fourth Level') === 0 ? true : false;<br/>
                          &nbsp;&nbsp;}<br/>
                        &nbsp;}],<br/>
                        &nbsp;sortBy: function&#40;item1, item2) &#123;<br/>
                          &nbsp;&nbsp;var weight = ['First Level', 'Second Level', 'Third Level', 'Fourth Level'];<br/>
                          &nbsp;&nbsp;if (weight.indexOf(item1.level) > weight.indexOf(item2.level)) &#123;<br/>
                            &nbsp;&nbsp;&nbsp;return 1;<br/>
                          &nbsp;&nbsp;} else if (weight.indexOf(item1.level) &lt; weight.indexOf(item2.level)) &#123;<br/>
                            &nbsp;&nbsp;&nbsp;return -1;<br/>
                          &nbsp;&nbsp;} else &#123;<br/>
                            &nbsp;&nbsp;&nbsp;return 0;<br/>
                          &nbsp;&nbsp;}<br/>
                        &nbsp;}<br/>
                      }, &#123;<br/>
                        &nbsp;title: 'Price',<br/>
                        &nbsp;key: 'price',<br/>
                        &nbsp;dataIndex: 'price',<br/>
                        &nbsp;sortBy: 'number'<br/>
                      }, &#123;<br/>
                        &nbsp;title: 'Double Price',<br/>
                        &nbsp;key: 'double_price',<br/>
                        &nbsp;sortBy: function(item1, item2) &#123;<br/>
                          &nbsp;&nbsp;if (item1.price * 2 > item2.price * 2) &#123;<br/>
                            &nbsp;&nbsp;&nbsp;return 1;<br/>
                          &nbsp;&nbsp;} else if (item1.price * 2 &lt; item2.price * 2) &#123;<br/>
                            &nbsp;&nbsp;&nbsp;return -1;<br/>
                          &nbsp;&nbsp;} else &#123;<br/>
                            &nbsp;&nbsp;&nbsp;return 0;<br/>
                          &nbsp;&nbsp;}<br/>
                        &nbsp;},<br/>
                          &nbsp;&nbsp;render: function(col, item, index) &#123;<br/>
                          &nbsp;&nbsp;return &lt;div style=&#123;&#123;color: '#f78913'}}>&#123;item.price * 2}&lt;/div>;<br/>
                        &nbsp;}<br/>
                      }];
                    </code>
                  </pre>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="contain">
                <div>
                  <p className="title">data属性的传参</p>
                  <p className="content">设置表格的数据</p>
                </div>
                <div className="code">
                  <pre>
                    <code className="javascript">
                      var data = [&#123;<br/>
                        &nbsp;id: 1,<br/>
                        &nbsp;category: 'Micro-1',<br/>
                        &nbsp;level: 'First Level',<br/>
                        &nbsp;price: '0.056'<br/>
                      }, &#123;<br/>
                        &nbsp;id: 2,<br/>
                        &nbsp;category: 'Standard-3',<br/>
                        &nbsp;level: 'Second Level',<br/>
                        &nbsp;price: '0.444'<br/>
                      }, &#123;<br/>
                        &nbsp;id: 3,<br/>
                        &nbsp;category: 'Micro-2',<br/>
                        &nbsp;level: 'Third Level',<br/>
                        &nbsp;price: '0.056'<br/>
                      }, &#123;<br/>
                        &nbsp;id: 4,<br/>
                        &nbsp;category: 'Standard-2',<br/>
                        &nbsp;level: 'Fourth Level',<br/>
                        &nbsp;price: '0.444'<br/>
                      }];
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

module.exports = IntroTable;
