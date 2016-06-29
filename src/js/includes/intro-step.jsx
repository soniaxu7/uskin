var React = require('react');
var uskin = require('uskin');
var Step = uskin.Step;
var Table = uskin.Table;

function listener(e, status) {
  console.debug('click triggered!', e, status);
}

var items1 = [{ name: 'step 1', key: '0', default: true },
  { name: 'step 2', key: '1' },
  { name: 'step 3', key: '2' }],
  items2 = [{ name: 'Open Door', key: 'open' },
  { name: 'Going Out', key: 'going', default: true },
  { name: 'Close Door', key: 'close'}];

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
  explain: 'Set the parameters of each step',
  type: 'Array',
  defaultValue: '-',
  id: '1'
}, {
  property: 'width',
  explain: 'Set the overall width of the component',
  type: 'Number',
  defaultValue: '-',
  id: '2'
}, {
  property: 'onClick',
  explain: 'handler of the onClick event',
  type: 'Function',
  defaultValue: '-',
  id: '3'
}];

var data1 = [{
  property: 'name',
  explain: 'Set the name of the step',
  type: 'String',
  defaultValue: '-',
  id: '1'
}, {
  property: 'key',
  explain: 'Set the unique key of this step',
  type: 'String',
  defaultValue: '-',
  id: '2'
}, {
  property: 'default',
  explain: 'Set the default selected step when initialize',
  type: 'Boolean',
  defaultValue: 'false',
  id: '3'
}];

class IntroStep extends React.Component {
  render(){
    return (
      <div>
        <article>
          <h1>Step</h1>
          <p>Displaying links of current, previous and next steps.</p>
        </article>
        <div>
          <h2>Code Demos</h2>
          <div className="left">
            <div className="contain">
              <div className="component">
                <Step items={items1} onClick={listener} width={200}/>
                <Step items={items2} onClick={listener} width={350}/>
              </div>
              <div>
                <p className="title">Config Component Step</p>
                <p className="content">Set parameter "items" to config the step names. And config value of "width" to adjust the width.</p>
                <p className="code-show" id="code1" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode1" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Step = uskin.Step;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Step items=&#123;items1} onClick=&#123;listener} width=&#123;200}/><br/>
                      &nbsp;&nbsp;&lt;Step items=&#123;items2} onClick=&#123;listener} width=&#123;350}/><br/>
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
                <p>Step</p>
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
                <p>Step.item</p>
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
                  <p className="content">Set the parameters of each step</p>
                </div>
                <div className="code">
                  <pre>
                    <code className="javascript">
                      var items1 = [&#123; name: 'step 1', key: '0', default: true },<br/>
                        &nbsp;&#123; name: 'step 2', key: '1' },<br/>
                        &nbsp;&#123; name: 'step 3', key: '2' }];<br/><br/>
                      var items2 = [&#123; name: 'Open Door', key: 'open' },<br/>
                        &nbsp;&#123; name: 'Going Out', key: 'going', default: true },<br/>
                        &nbsp;&#123; name: 'Close Door', key: 'close' }];
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

module.exports = IntroStep;
