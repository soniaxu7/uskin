var React = require('react');
var uskin = require('uskin');
var Button = uskin.Button;
var Table = uskin.Table;
var ButtonGroup = uskin.ButtonGroup;

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
  property: 'type',
  explain: 'Set type of each button. Or set the ButtonGroup as vertical or lateral.',
  type: 'String',
  defaultValue: '-',
  id: '1'
}, {
  property: 'value',
  explain: 'The text showed on the button.',
  type: 'String',
  defaultValue: '-',
  id: '2'
}, {
  property: 'width',
  explain: 'Set the width of the Button or the width of the ButtonGroup.',
  type: 'String',
  defaultValue: '104px',
  id: '3'
}];

class IntroButtonGroup extends React.Component {
  render(){
    return (
      <div className="btn-grp-page">
        <article>
          <h1>ButtonGroup</h1>
          <p>Using buttons as a group, horizontally or vertically aligned.</p>
        </article>
        <div className="demos">
          <h4>Code Demos</h4>
          <div className="left">
            <div className="contain">
              <div className="component">
                <ButtonGroup>
                  <Button tag="div" value="Prev" />
                  <Button tag="div" value="Mid 1" type="delete" />
                  <Button tag="div" value="Mid 2" disabled={true} />
                  <Button tag="div" value="Next" type="create" />
                </ButtonGroup>
              </div>
              <div>
                <p className="title">Default ButtonGroup</p>
                <p className="content">Add component Button in wrap of the tag of ButtonGroup, the value of each button is available to be configed.</p>
                <p className="code-show" id="code1" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode1" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var ButtonGroup = uskin.ButtonGroup;<br/>
                    var Button = uskin.Button;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;ButtonGroup><br/>
                      &nbsp;&nbsp;&lt;Button tag="div" value="Prev" /><br/>
                      &nbsp;&nbsp;&lt;Button tag="div" value="Mid 1" type="delete" /><br/>
                      &nbsp;&nbsp;&lt;Button tag="div" value="Mid 2" disabled=&#123;true} /><br/>
                      &nbsp;&nbsp;&lt;Button tag="div" value="Next" type="create" /><br/>
                      &nbsp;&nbsp;&lt;/ButtonGroup><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
            <div className="contain">
              <div className="component">
                <ButtonGroup type="vertical">
                  <Button tag="div" value="Prev" type="status" selected={true}/>
                  <Button tag="div" value="Mid 1" type="status"/>
                  <Button tag="div" value="Mid 2" disabled={true}/>
                  <Button tag="div" value="Next" type="create"/>
                </ButtonGroup>
              </div>
              <div>
                <p className="title">Vertical ButtonGroup</p>
                <p className="content">Set the type of ButtonGroup as "vertical"</p>
                <p className="code-show" id="code2" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode2" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var ButtonGroup = uskin.ButtonGroup;<br/>
                    var Button = uskin.Button;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;ButtonGroup type="vertical"><br/>
                      &nbsp;&nbsp;&lt;Button tag="div" value="Prev" type="status"  selected=&#123;true}/><br/>
                      &nbsp;&nbsp;&lt;Button tag="div" value="Mid 1" type="status" /><br/>
                      &nbsp;&nbsp;&lt;Button tag="div" value="Mid 2" disabled=&#123;true} /><br/>
                      &nbsp;&nbsp;&lt;Button tag="div" value="Next" type="create" /><br/>
                      &nbsp;&nbsp;&lt;/ButtonGroup><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="contain">
              <div className="component">
                <ButtonGroup width={400}>
                  <Button tag="div" value="Justified Prev"/>
                  <Button tag="div" value="Justified Mid 1" type="delete"/>
                </ButtonGroup>
              </div>
              <div>
                <p className="title">ButtonGroup with Width Set</p>
                <p className="content">Set the width attribute of ButtonGroup defining the overall width of the aligned buttons.</p>
                <p className="code-show" id="code3" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode3" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var ButtonGroup = uskin.ButtonGroup;<br/>
                    var Button = uskin.Button;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;ButtonGroup width={400}><br/>
                      &nbsp;&nbsp;&lt;Button tag="div" value="Justified Prev" /><br/>
                      &nbsp;&nbsp;&lt;Button tag="div" value="Justified Mid 1" type="delete" /><br/>
                      &nbsp;&nbsp;&lt;/ButtonGroup><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
            <div className="contain">
              <div className="component">
                <ButtonGroup type="vertical" width={220}>
                  <Button tag="div" value="Vertical Justified Prev" type="status" selected={true}/>
                  <Button tag="div" value="Vertical Justified Mid 1" type="status"/>
                  <Button tag="div" value="Vertical Justified Mid 2" disabled={true}/>
                  <Button tag="div" value="Vertical Justified Next" type="create"/>
                </ButtonGroup>
              </div>
              <div>
                <p className="title">Vertical ButtonGroup with Width Set</p>
                <p className="content">Set attribute type and width of the ButtonGroup</p>
                <p className="code-show" id="code4" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode4" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var ButtonGroup = uskin.ButtonGroup;<br/>
                    var Button = uskin.Button;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;ButtonGroup type="vertical" width={200}><br/>
                      &nbsp;&nbsp;&lt;Button tag="div" value="Prev" type="status"  selected=&#123;true}/><br/>
                      &nbsp;&nbsp;&lt;Button tag="div" value="Mid 1" type="status" /><br/>
                      &nbsp;&nbsp;&lt;Button tag="div" value="Mid 2" disabled=&#123;true} /><br/>
                      &nbsp;&nbsp;&lt;Button tag="div" value="Next" type="create" /><br/>
                      &nbsp;&nbsp;&lt;/ButtonGroup><br/>
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

module.exports = IntroButtonGroup;
