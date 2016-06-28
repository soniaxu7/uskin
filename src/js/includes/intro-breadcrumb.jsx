var React = require('react');
var uskin = require('uskin');
var Breadcrumb = uskin.Breadcrumb;
var Table = uskin.Table;

function displayClose(e) {
  var tarID = e.target.id;
  var display = document.getElementById('s'+tarID).style.display;
  (display === 'none') && (document.getElementById('s'+tarID).style.display = 'block');
  (display === 'block') && (document.getElementById('s'+tarID).style.display = 'none');
}

var breadcrumb = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'Store',
    href: '#store'
  }],
  items2 = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'Store',
    href: '#store'
  }, {
    name: 'Phones',
    href: '#phone'
  }];

var column = [{
  title: '属性',
  width: '150px',
  key: 'property',
  dataIndex: 'property'
}, {
  title: '说明',
  key: 'explain',
  dataIndex: 'explain',
  render: function(col, item, index) {
    return <div style={{wordWrap: 'break-word'}}>{item.explain}</div>;
  }
}, {
  title: '类型',
  width: '150px',
  key: "type",
  dataIndex: 'type',
}, {
  title: '默认值',
  width: '150px',
  key: "defaultValue",
  dataIndex: 'defaultValue',
}];

var data = [{
  property: 'name',
  explain: '当前层级对象的名称',
  type: 'string',
  defaultValue: '-',
  id: '1'
}, {
  property: 'href',
  explain: '当前层级对象的href地址',
  type: 'string',
  defaultValue: '-',
  id: '2'
}, {
  property: 'items',
  explain: '设置层级结构的对象数组',
  type: 'object array',
  defaultValue: '-',
  id: '3'
}];

class IntroBreadcrumb extends React.Component {
  render(){
    return (
      <div>
        <article>
          <h1>Breadcrumb</h1>
          <p>Displaying a hierarchy of the current page in relation to the website&#39;s structrue.</p>
        </article>
        <div>
          <h2>Code Demos</h2>
          <div className="left">
            <div className="contain">
              <div className="component">
                <Breadcrumb items={breadcrumb} key="1" />
                <Breadcrumb items={items2} key="2" />
              </div>
              <div>
                <p className="title">面包屑导航</p>
                <p className="content">通过读取传入数组的对象的先后顺序展示层级关系</p>
                <p className="code-show" id="code1" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode1" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Breadcrumb = uskin.Breadcrumb;<br/><br/>
                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Breadcrumb items=&#123;breadcrumb} key="1" /><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <div className="api">
          <h2>Attributes</h2>
          <div>
            <Table
              width="90%"
              column={column}
              data={data}
              dataKey={'id'}
              checkbox={false}
              striped={false}
              hover={false}/>
          </div>
        </div>
        <div className="param">
          <h2>Parameters</h2>
          <div className="left">
            <div className="contain">
              <div>
                <p className="title">items属性传参</p>
                <p className="content">设置面包屑层级显示的内容，并定义点击跳转的链接，按照先后顺序最开始是根目录</p>
              </div>
              <div className="code">
                <pre>
                  <code className="javascript">
                    var breadcrumb = [&#123;<br/>
                      &nbsp;name: 'Home',<br/>
                      &nbsp;href: '#home'<br/>
                    }, &#123;<br/>
                      &nbsp;name: 'Store',<br/>
                      &nbsp;href: '#store'<br/>
                    }],<br/>
                    items2 = [&#123;<br/>
                      &nbsp;name: 'Home',<br/>
                      &nbsp;href: '#home'<br/>
                    }, &#123;<br/>
                      &nbsp;name: 'Store',<br/>
                      &nbsp;href: '#store'<br/>
                    }, &#123;<br/>
                      &nbsp;name: 'Phones',<br/>
                      &nbsp;href: '#phone'<br/>
                    }];
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = IntroBreadcrumb;
