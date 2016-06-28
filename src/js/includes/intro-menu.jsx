var React = require('react');
var uskin = require('uskin');
var Menu = uskin.Menu;
var Table = uskin.Table;

function listener(e) {
  console.debug('click triggered!', e);
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
  property: 'title',
  explain: '设置主菜单的标题',
  type: 'string',
  defaultValue: '-',
  id: '1'
}, {
  property: 'key',
  explain: 'item的唯一标识',
  type: 'string',
  defaultValue: '-',
  id: '2'
}];

var data1 = [{
  property: 'subtitle',
  explain: '设置子菜单的标题',
  type: 'string',
  defaultValue: '-',
  id: '1'
}, {
  property: 'key',
  explain: 'subItem的唯一标识',
  type: 'string',
  defaultValue: '-',
  id: '2'
}, {
  property: 'iconClass',
  explain: 'subItem的图标',
  type: 'string',
  defaultValue: '-',
  id: '3'
}, {
  property: 'selected',
  explain: 'subItem是否被选中，可选值为true，false',
  type: 'boolean',
  defaultValue: 'false',
  id: '4'
}, {
  property: 'onClick',
  explain: 'click事件的handler',
  type: 'function',
  defaultValue: 'function() {}',
  id: '5'
}];

var items = [{
  title: 'Fruits',
  key: 'fruits',
  submenu: [{
    subtitle: 'Apple',
    key: '1',
    onClick: listener,
    iconClass: 'glyphicon icon-overview',
    selected: true
  }, {
    subtitle: 'Strawberry',
    key: '2',
    onClick: listener,
    iconClass: 'glyphicon icon-overview'
  }, {
    subtitle: 'Lemon',
    key: '3',
    onClick: listener,
    iconClass: 'glyphicon icon-overview'
  }]
}, {
  title: 'Dessert',
  key: 'dessert',
  submenu: [{
    subtitle: 'Tiramisu',
    key: '1',
    onClick: listener,
    iconClass: 'glyphicon icon-overview'
  }, {
    subtitle: 'Macaron',
    key: '2',
    onClick: listener,
    iconClass: 'glyphicon icon-overview'
  }]
}];

class IntroMenu extends React.Component{
  render(){
    return (
      <div>
        <article>
          <h1>Menu</h1>
          <p>Two level structured menu.</p>
        </article>
        <div>
          <h2>Code Demos</h2>
          <div className="left">
            <div className="contain">
              <div className="component">
                <Menu items={items}/>
              </div>
              <div>
                <p className="title">菜单</p>
                <p className="content">为页面和功能提供导航的菜单列表</p>
                <p className="code-show" id="code1" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode1" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Menu = uskin.Menu;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Menu items=&#123;items}/><br/>
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
                <p>Menu.items</p>
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
                <p>Menu.items.submenu</p>
                <Table
                  width="90%"
                  column={column}
                  data={data1}
                  dataKey={'id'}
                  checkbox={false}
                  striped={false}
                  hover={false}/>
              </div>
            </div>
          </div>
          <div className="param">
            <h2>Parameters</h2>
            <div className="left">
              <div className="contain">
                <div>
                  <p className="title">items属性的传参</p>
                  <p className="content">定义菜单显示的内容，设置分组，及定义点击事件</p>
                </div>
                <div className="code">
                  <pre>
                    <code className="javascript">
                      var items = [&#123;<br/>
                        &nbsp;title: 'Fruits',<br/>
                        &nbsp;key: 'fruits',<br/>
                        &nbsp;submenu: [&#123;<br/>
                          &nbsp;&nbsp;subtitle: 'Apple',<br/>
                          &nbsp;&nbsp;key: '1',<br/>
                          &nbsp;&nbsp;onClick: listener,<br/>
                          &nbsp;&nbsp;iconClass: 'glyphicon icon-overview',<br/>
                          &nbsp;&nbsp;selected: true<br/>
                        &nbsp;}, &#123;<br/>
                          &nbsp;&nbsp;subtitle: 'Strawberry',<br/>
                          &nbsp;&nbsp;key: '2',<br/>
                          &nbsp;&nbsp;onClick: listener,<br/>
                          &nbsp;&nbsp;iconClass: 'glyphicon icon-overview'<br/>
                        &nbsp;}, &#123;<br/>
                          &nbsp;&nbsp;subtitle: 'Lemon',<br/>
                          &nbsp;&nbsp;key: '3',<br/>
                          &nbsp;&nbsp;onClick: listener,<br/>
                          &nbsp;&nbsp;iconClass: 'glyphicon icon-overview'<br/>
                        &nbsp;}]<br/>
                      }, &#123;<br/>
                        &nbsp;title: 'Dessert',<br/>
                        &nbsp;key: 'dessert',<br/>
                        &nbsp;submenu: [&#123;<br/>
                          &nbsp;&nbsp;subtitle: 'Tiramisu',<br/>
                          &nbsp;&nbsp;key: '1',<br/>
                          &nbsp;&nbsp;onClick: listener,<br/>
                          &nbsp;&nbsp;iconClass: 'glyphicon icon-overview'<br/>
                        &nbsp;}, &#123;<br/>
                          &nbsp;&nbsp;subtitle: 'Macaron',<br/>
                          &nbsp;&nbsp;key: '2',<br/>
                          &nbsp;&nbsp;onClick: listener,<br/>
                          &nbsp;&nbsp;iconClass: 'glyphicon icon-overview'<br/>
                        &nbsp;}]<br/>
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

module.exports = IntroMenu;
