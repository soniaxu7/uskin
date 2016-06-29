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
  title: 'Attributes',
  width: '150px',
  key: "property",
  dataIndex: 'property'
}, {
  title: 'Explanation',
  key: "explain",
  dataIndex: 'explain',
  render: function(col, item, index) {
    return <div style={{wordWrap: 'break-word'}}>{item.explain}</div>;
  }
}, {
  title: 'Type',
  width: '100px',
  key: "type",
  dataIndex: 'type',
}, {
  title: 'Default',
  width: '150px',
  key: "defaultValue",
  dataIndex: 'defaultValue',
}];

var data = [{
  property: 'title',
  explain: 'Set Menu title',
  type: 'String',
  defaultValue: '-',
  id: '1'
}, {
  property: 'key',
  explain: 'Set the unique key of item',
  type: 'String',
  defaultValue: '-',
  id: '2'
}];

var data1 = [{
  property: 'subtitle',
  explain: 'Set sub menu title',
  type: 'String',
  defaultValue: '-',
  id: '1'
}, {
  property: 'key',
  explain: 'Set the unique key of subItem',
  type: 'String',
  defaultValue: '-',
  id: '2'
}, {
  property: 'iconClass',
  explain: 'set the icon of subItem',
  type: 'String',
  defaultValue: '-',
  id: '3'
}, {
  property: 'selected',
  explain: 'Set the selected status if subItem',
  type: 'Boolean',
  defaultValue: 'false',
  id: '4'
}, {
  property: 'onClick',
  explain: 'Handler of the click event',
  type: 'Function',
  defaultValue: '-',
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
                <p className="title">Menu</p>
                <p className="content">Menu as navigator for page content classification and various functions.</p>
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
                  <p className="title">Parameter "items"</p>
                  <p className="content">Set the item content, config the classification of items and bind the click event handler</p>
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
