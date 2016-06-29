var React = require('react');
var uskin = require('uskin');
var Dropdown = uskin.Dropdown;
var Table = uskin.Table;

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

function listener(e) {
  console.debug('click triggered!', e);
}

var data = [{
  property: 'title',
  explain: 'Config the items\' name of the dropdown menu',
  type: 'String',
  defaultValue: '-',
  id: '1'
}, {
  property: 'disabled',
  explain: 'Config whether the link is able to click',
  type: 'Boolean',
  defaultValue: 'false',
  id: '2'
}, {
  property: 'danger',
  explain: 'Config the link as danger \"true\" to get a red warning background-color',
  type: 'Boolean',
  defaultValue: 'false',
  id: '3'
}, {
  property: 'items',
  explain: 'Config the menu items under certain title of classification',
  type: 'Array',
  defaultValue: '-',
  id: '4'
}, {
  property: 'onClick',
  explain: 'Handler of click event',
  type: 'Function',
  defaultValue: '-',
  id: '5'
}];

var items1 = [{
  items: [{
    title: 'Reboot',
    key: '0',
    onClick: listener
  }, {
    title: 'Take Image Snapshot',
    key: '1',
    onClick: listener
  }]
}, {
  items: [{
    title: 'Associate Public IP',
    key: '2',
    onClick: listener
  }, {
    title: 'Dissociate Public IP',
    key: '3',
    onClick: listener
  }, {
    title: 'Join Networks',
    key: '4',
    onClick: listener
  }]
}, {
  items: [{
    title: 'Change Security Group',
    key: '5',
    onClick: listener
  }, {
    title: 'Change Passoword',
    key: '6',
    onClick: listener
  }, {
    title: 'Change Keypair',
    key: '7',
    onClick: listener
  }]
}, {
  items: [{
    title: 'Add Volume',
    key: '8',
    onClick: listener
  }, {
    title: 'Remove Volume',
    key: '9',
    disabled: true,
    onClick: listener
  }]
}, {
  items: [{
    title: 'Termitate',
    key: '10',
    danger: true,
    onClick: listener
  }]
}];

var items2 = [{
  title: 'Basic Ops',
  key: 'basic',
  items: [{
    title: 'Reboot',
    key: '0',
    onClick: listener
  }, {
    title: 'Take Image Snapshot',
    key: '1',
    onClick: listener
  }]
}, {
  title: 'Network Ops',
  key: 'network',
  items: [{
    title: 'Associate Public IP',
    key: '2',
    onClick: listener
  }, {
    title: 'Dissociate Public IP',
    key: '3',
    onClick: listener
  }, {
    title: 'Join Networks',
    key: '4',
    onClick: listener
  }]
}, {
  items: [{
    title: 'Change Security Group',
    key: '5',
    onClick: listener
  }, {
    title: 'Change Passoword',
    key: '6',
    onClick: listener
  }, {
    title: 'Change Keypair',
    key: '7',
    onClick: listener
  }]
}, {
  title: 'Volume Ops',
  key: 'volume',
  items: [{
    title: 'Add Volume',
    key: '8',
    onClick: listener
  }, {
    title: 'Remove Volume',
    key: '9',
    disabled: true,
    onClick: listener
  }]
}, {
  title: 'Dangerous Ops',
  key: 'dangerous',
  items: [{
    title: 'Termitate',
    key: '10',
    danger: true,
    onClick: listener
  }]
}];

class IntroDropdown extends React.Component {
  render(){
    return (
      <div>
        <article>
          <h1>Dropdown</h1>
          <p>A vertical aligned menu usually used as a dropdown menu.</p>
        </article>
        <div>
          <h2>Code Demos</h2>
          <div className="left">
            <div className="contain">
              <div className="component" style={{height: '400px'}}>
                <Dropdown items={items1} />
              </div>
              <div>
                <p className="title">Dropdown menu</p>
                <p className="content">Config object in array items with title, key, disabled and onClick.</p>
                <p className="code-show" id="code1" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode1" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Dropdown = uskin.Dropdown;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Dropdown items=&#123;items1} /><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="contain">
              <div className="component" style={{height: '500px'}}>
                <Dropdown items={items2} />
              </div>
              <div>
                <p className="title">Dropdown menu with named classifications</p>
                <p className="content">Set title and key in each object in array items</p>
                <p className="code-show" id="code2" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode2" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Dropdown = uskin.Dropdown;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Dropdown items=&#123;items2} /><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
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
                  <p className="title">Parameters "items"</p>
                  <p className="content">Config dropdown menu text contents, links and onClick handler</p>
                </div>
                <div className="code">
                  <pre>
                    <code className="javascript">
                      var items1 = [&#123;<br/>
                        &nbsp;items: [&#123;<br/>
                          &nbsp;&nbsp;title: 'Reboot',<br/>
                          &nbsp;&nbsp;key: '0',<br/>
                          &nbsp;&nbsp;onClick: listener<br/>
                        &nbsp;}, &#123;<br/>
                          &nbsp;&nbsp;title: 'Take Image Snapshot',<br/>
                          &nbsp;&nbsp;key: '1',<br/>
                          &nbsp;&nbsp;onClick: listener<br/>
                        &nbsp;}]<br/>
                      }, &#123;<br/>
                        &nbsp;items: [&#123;<br/>
                          &nbsp;&nbsp;title: 'Associate Public IP',<br/>
                          &nbsp;&nbsp;key: '2',<br/>
                          &nbsp;&nbsp;onClick: listener<br/>
                        &nbsp;}, &#123;<br/>
                          &nbsp;&nbsp;title: 'Dissociate Public IP',<br/>
                          &nbsp;&nbsp;key: '3',<br/>
                          &nbsp;&nbsp;onClick: listener<br/>
                        &nbsp;}, &#123;<br/>
                          &nbsp;&nbsp;title: 'Join Networks',<br/>
                          &nbsp;&nbsp;key: '4',<br/>
                          &nbsp;&nbsp;onClick: listener<br/>
                        &nbsp;}]<br/>
                      }, &#123;<br/>
                        &nbsp;items: [&#123;<br/>
                          &nbsp;&nbsp;title: 'Change Security Group',<br/>
                          &nbsp;&nbsp;key: '5',<br/>
                          &nbsp;&nbsp;onClick: listener<br/>
                        &nbsp;}, &#123;<br/>
                          &nbsp;&nbsp;title: 'Change Passoword',<br/>
                          &nbsp;&nbsp;key: '6',<br/>
                          &nbsp;&nbsp;onClick: listener<br/>
                        &nbsp;}, &#123;<br/>
                          &nbsp;&nbsp;title: 'Change Keypair',<br/>
                          &nbsp;&nbsp;key: '7',<br/>
                          &nbsp;&nbsp;onClick: listener<br/>
                        &nbsp;}]<br/>
                      }, &#123;<br/>
                        &nbsp;items: [&#123;<br/>
                          &nbsp;&nbsp;title: 'Add Volume',<br/>
                          &nbsp;&nbsp;key: '8',<br/>
                          &nbsp;&nbsp;onClick: listener<br/>
                        &nbsp;}, &#123;<br/>
                          &nbsp;&nbsp;title: 'Remove Volume',<br/>
                          &nbsp;&nbsp;key: '9',<br/>
                          &nbsp;&nbsp;disabled: true,<br/>
                          &nbsp;&nbsp;onClick: listener<br/>
                        &nbsp;}]<br/>
                      }, &#123;<br/>
                        &nbsp;items: [&#123;<br/>
                          &nbsp;&nbsp;title: 'Termitate',<br/>
                          &nbsp;&nbsp;key: '10',<br/>
                          &nbsp;&nbsp;danger: true,<br/>
                          &nbsp;&nbsp;onClick: listener<br/>
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

module.exports = IntroDropdown;
