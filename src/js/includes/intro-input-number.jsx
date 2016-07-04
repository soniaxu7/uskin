var React = require('react');
var uskin = require('uskin');
var InputNumber = uskin.InputNumber;
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
  property: 'min',
  explain: 'min value of input',
  type: 'String',
  defaultValue: '-Infinity',
  id: '1'
}, {
  property: 'max',
  explain: 'max value of input',
  type: 'String',
  defaultValue: 'Infinity',
  id: '2'
}, {
  property: 'value',
  explain: 'Set the initial number show in the input box',
  type: 'String',
  defaultValue: '0',
  id: '3'
}, {
  property: 'width',
  explain: 'Set the width of the input box',
  type: 'String',
  defaultValue: '-',
  id: '4'
}, {
  property: 'step',
  explain: 'Set the escalate or decline step by clicking the arrow',
  type: 'String',
  defaultValue: '1',
  id: '5'
}, {
  property: 'disabled',
  explain: 'Set whether the input is able to write in or not',
  type: 'Boolean',
  defaultValue: 'false',
  id: '6'
}, {
  property: 'onChange',
  explain: 'Handler of onChange event',
  type: 'Function',
  defaultValue: '-',
  id: '7'
}];

class IntroInputNumber extends React.Component {
  render(){
    return (
      <div>
        <article>
          <h1>InputNumber</h1>
          <p>Input box for numbers.</p>
        </article>
        <div>
          <h4>Code Demos</h4>
          <div className="left">
            <div className="contain">
              <div className="component">
                <InputNumber onChange={listener} />
              </div>
              <div>
                <p className="title">Default InputNumber</p>
                <p className="content">Set the handler of onChange event and coordinate with other components</p>
                <p className="code-show" id="code1" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode1" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var InputNumber = uskin.InputNumber;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;InputNumber onChange=&#123;listener} /><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
            <div className="contain">
              <div className="component">
                <InputNumber onChange={listener} min={0} max={10} value={3} width={62} />
              </div>
              <div>
                <p className="title">Set the widht of the input box</p>
                <p className="content">Set the width to adjust InputNumber box to larger or smaller</p>
                <p className="code-show" id="code2" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode2" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var InputNumber = uskin.InputNumber;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;InputNumber onChange=&#123;listener} min=&#123;0} max=&#123;10} value=&#123;3} width=&#123;62} /><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="contain">
              <div className="component">
                <InputNumber onChange={listener} min={-1} max={1} value={0.98} step={0.01} />
              </div>
              <div>
                <p className="title">Set the step of the InputNumber</p>
                <p className="content">Click the arrow to test the number changes by the step</p>
                <p className="code-show" id="code3" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode3" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var InputNumber = uskin.InputNumber;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;InputNumber onChange=&#123;listener} min=&#123;-1} max=&#123;1} value=&#123;0.98} step=&#123;0.01} /><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
            <div className="contain">
              <div className="component">
                <InputNumber onChange={listener} value={20} width={62} disabled={true} />
              </div>
              <div>
                <p className="title">Disable the InputNumber</p>
                <p className="content">InputNumber is not able to write when set disabled "true"</p>
                <p className="code-show" id="code4" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode4" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var InputNumber = uskin.InputNumber;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;InputNumber onChange=&#123;listener} value=&#123;20} width=&#123;62} disabled=&#123;true} /><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="api">
            <h4>Attributes</h4>
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
        </div>
      </div>
    );
  }
} 

module.exports = IntroInputNumber;
