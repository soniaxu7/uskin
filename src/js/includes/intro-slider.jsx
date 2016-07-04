var React = require('react');
var uskin = require('uskin');
var Slider = uskin.Slider;
var Table = uskin.Table;

var value = 0,
  value2 = -20;

function listener(e, status) {
  document.getElementById('value1').innerHTML = status;
}

function listener2(e, status) {
  document.getElementById('value2').innerHTML = status;
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
  explain: 'Set min value of Slider',
  type: 'String',
  defaultValue: '-',
  id: '1'
}, {
  property: 'max',
  explain: 'Set max value of Slider',
  type: 'String',
  defaultValue: '-',
  id: '2'
}, {
  property: 'step',
  explain: 'Set step attribute to control slider value change by step',
  type: 'String',
  defaultValue: '1',
  id: '3'
}, {
  property: 'width',
  explain: 'Width of Slider',
  type: 'String',
  defaultValue: '-',
  id: '4'
}, {
  property: 'value',
  explain: 'Initial value of Slider',
  type: 'String',
  defaultValue: '0',
  id: '5'
}, {
  property: 'onChange',
  explain: 'Handler of change event',
  type: 'Function',
  defaultValue: '-',
  id: '6'
}];

class IntroSlider extends React.Component {
  render(){
    return (
      <div>
        <article>
          <h1>Slider</h1>
          <p>Selecting value by dragging a slider.</p>
        </article>
        <div>
          <h4>Code Demos</h4>
          <div className="left">
            <div className="contain">
              <div className="component">
                <div style={{float: 'left'}}><Slider min="0" max="100" value={value} onChange={listener}/></div>
                <div style={{float: 'left', marginLeft: '10px'}} className="value" id="value1">{value}</div>
              </div>
              <div>
                <p className="title">Default Slider</p>
                <p className="content">Set min and max of the Slider</p>
                <p className="code-show" id="code1" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode1" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Slider = uskin.Slider;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Slider min="0" max="100" value=&#123;value} onChange=&#123;listener}/><br/>
                      &nbsp;&nbsp;&lt;div className="value" id="value1"><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="contain">
              <div className="component">
                <div style={{float: 'left'}}><Slider min="-100" max="100" value={value2} step="40" width={300} onChange={listener2}/></div>
                <div style={{float: 'left', marginLeft: '10px'}} className="value" id="value2">{value2}</div>
              </div>
              <div>
                <p className="title">Width of Slider</p>
                <p className="content">Set width to control the space Slider ocuppied</p>
                <p className="code-show" id="code2" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode2" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                     var Slider = uskin.Slider;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Slider min="-100" max="100" value=&#123;value2} step="40" width=&#123;300} onChange=&#123;listener2}/><br/>
                      &nbsp;&nbsp;&lt;div className="value" id="value2"><br/>
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

module.exports = IntroSlider;
