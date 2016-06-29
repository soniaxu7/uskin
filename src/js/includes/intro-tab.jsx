var React = require('react');
var uskin = require('uskin');
var Tab = uskin.Tab;
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
  property: 'items',
  explain: 'Set Tab text content',
  type: 'Array',
  defaultValue: '-',
  id: '1'
}, {
  property: 'type',
  explain: 'Set size of Tab, avaliable value is \"sm\" or default',
  type: 'String',
  defaultValue: '-',
  id: '2'
}];

var data1 = [{
  property: 'name',
  explain: 'Set the name of Tab',
  type: 'String',
  defaultValue: '-',
  id: 1
}, {
  property: 'key',
  explain: 'Unique key of the item',
  type: 'String',
  defaultValue: '-',
  id: 2
}, {
  property: 'default',
  explain: 'Set current Tab when initialized',
  type: 'Boolean',
  defaultValue: 'false',
  id: 3
}, {
  property: 'disabled',
  explain: 'Set whether the Tab is able to click',
  type: 'Boolean',
  defaultValue: 'false',
  id: 4
}, {
  property: 'href',
  explain: 'Set the link of Tab',
  type: 'String',
  defaultValue: '-',
  id: 5
}, {
  property: 'onClick',
  explain: 'Handler of click event',
  type: 'Function',
  defaultValue: '-',
  id: 6
}];

var items1 = [{ name: 'Word', key: '0', onClick: listener },
  { name: 'Excel', key: '1', onClick: listener },
  { name: 'PowerPonit', key: '2', onClick: listener }],
  items2 = [{ name: 'Uskin', key: '0', href: 'https://github.com/icecreamliker/uskin', onClick: listener },
  { name: 'Table', key: '1', onClick: listener, default: true },
  { name: 'Slider', key: '2', onClick: listener }],
  items3 = [{ name: 'Piano', key: '0', onClick: listener },
  { name: 'Violin', key: '1', onClick: listener },
  { name: 'Guitar', key: '2', onClick: listener, default: true }];

class IntroTab extends React.Component {
  render(){
    return (
      <div>
        <article>
          <h1>Tab</h1>
          <p>Click tab to switch the page content.</p>
        </article>
        <div>
          <h2>Code Demos</h2>
          <div className="left">
            <div className="contain">
              <div className="component">
                <Tab items={items1}/>
              </div>
              <div>
                <p className="title">Default Tab</p>
                <p className="content">Set itmes as the configuration of each tab</p>
                <p className="code-show" id="code1" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode1" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Tab = uskin.Tab;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Tab items=&#123;items1}/><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
            <div className="contain">
              <div className="component">
                <Tab items={items3} type="sm"/>
              </div>
              <div>
                <p className="title">Type of Tab</p>
                <p className="content">Set attribute type as "sm" to get a mini sized tab</p>
                <p className="code-show" id="code2" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode2"style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Tab = uskin.Tab;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Tab items=&#123;items1} type="sm"/><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="contain">
              <div className="component">
                <Tab items={items2}/>
              </div>
              <div>
                <p className="title">Tab with link, selected Tab and disabled Tab</p>
                <p className="content">Set href attribute to enable click a Tab as a link. Set slected "true" to settle the current Tab when initialized. Set disabled "true" to make it unable to click the Tab</p>
                <p className="code-show" id="code3" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode3"style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Tab = uskin.Tab;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Tab items=&#123;items2}/><br/>
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
                <p>Tab</p>
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
                <p>Tab.Item</p>
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
                  <p className="content">Set Tab content and onClick handler</p>
                </div>
                <div className="code">
                  <pre>
                    <code className="javascript">
                      var items1 = [&#123; name: 'Word', value: '0', onClick: listener },<br/>
                        &nbsp;&#123; name: 'Excel', value: '1', onClick: listener, default: true },<br/>
                        &nbsp;&#123; name: 'PowerPonit', value: '2', onClick: listener }],<br/>
                        &nbsp;items2 = [&#123; name: 'Uskin', key: '0', href: 'https://github.com/icecreamliker/uskin', onClick: listener },<br/>
                        &nbsp;&nbsp;&#123; name: 'Table', key: '1', onClick: listener, default: true },<br/>
                        &nbsp;&nbsp;&#123; name: 'Slider', key: '2', onClick: listener }],<br/>
                        &nbsp;items3 = [&#123; name: 'Piano', key: '0', onClick: listener },<br/>
                        &nbsp;&nbsp;&#123; name: 'Violin', key: '1', onClick: listener },<br/>
                        &nbsp;&nbsp;&#123; name: 'Guitar', key: '2', onClick: listener, default: true }];<br/>
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

module.exports = IntroTab;
