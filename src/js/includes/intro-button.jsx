var React = require('react');
var uskin = require('uskin');
var Button = uskin.Button;
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
  property: 'type',
  explain: 'Set type of button, available values including create, delete, cancel and status.',
  type: 'String',
  defaultValue: '-',
  id: '1'
}, {
  property: 'disabled',
  explain: 'Set the button is able to click or not.',
  type: 'Boolean',
  defaultValue: 'false',
  id: '2'
}, {
  property: 'initial',
  explain: 'Put value "true" to set the button to initial styled.',
  type: 'Boolean',
  defaultValue: 'false',
  id: '3'
}, {
  property: 'iconClass',
  explain: 'Set the button icon, available value including icon-create, icon-remove and icon-edit.',
  type: 'String',
  defaultValue: '-',
  id: '4'
}, {
  property: 'size',
  explain: 'Set the button size, available value including xl, lg, sm and xs.',
  type: 'String',
  defaultValue: '-',
  id: '5'
}, {
  property: 'selected',
  explain: 'Set the button to status selected or not.',
  type: 'Boolean',
  defaultValue: 'false',
  id: '6'
}, {
  property: 'onClick',
  explain: 'handler of click event',
  type: 'Function',
  defaultValue: '-',
  id: '7'
}];

class IntroButton extends React.Component {
  render(){
    return (
      <div className="btn-page">
        <article>
          <h1>Button</h1>
          <p>A set of consistent styled buttons. Variours colors and matching icons according to different button functions.</p>
        </article>
        <div>
          <h4>Code Demos</h4>
          <div className="left">
            <div className="contain">
              <div className="component">
                <Button value="Initial" initial={true} onClick={listener}/>
                <Button value="Initial" type="create" initial={true} onClick={listener}/>
                <Button value="Initial" type="delete" initial={true} onClick={listener}/>
                <Button value="Initial" type="cancel" initial={true} onClick={listener}/>
                <Button value="Initial" type="status" initial={true} onClick={listener}/>
              </div>
              <div>
                <p className="title">Default Button</p>
                <p className="content">Set initial attribute to control button show in initial styled or not.</p>
                <p className="code-show" id="code1" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode1" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Button = uskin.Button;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Button value="Initial" initial=&#123;true} onClick=&#123;listener} /><br/>
                      &nbsp;&nbsp;&lt;Button value="Initial" type="create" initial=&#123;true} onClick=&#123;listener} /><br/>
                      &nbsp;&nbsp;&lt;Button value="Initial" type="delete" initial=&#123;true} onClick=&#123;listener} /><br/>
                      &nbsp;&nbsp;&lt;Button value="Initial" type="cancel" initial=&#123;true} onClick=&#123;listener} /><br/>
                      &nbsp;&nbsp;&lt;Button value="Initial" type="cancel" initial=&#123;true} disabled=&#123;true} onClick=&#123;listener} /><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
            <div className="contain">
              <div className="component">
                <Button value="Normal" onClick={listener}/>
                <Button value="Create" type="create" onClick={listener}/>
                <Button value="Delete" type="delete" onClick={listener}/>
                <Button value="Cancel" type="cancel" onClick={listener}/>
                <Button value="Disabled" type="normal" disabled={true} onClick={listener}/>
              </div>
              <div>
                <p className="title">Button Type</p>
                <p className="content">Avaliable value for Button type: normal, create, delete and cancel. To addition, set attribute disabled to "true" will show a button in disabled style.</p>
                <p className="code-show" id="code2" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode2" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Button = uskin.Button;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Button value="Normal" onClick=&#123;listener}/><br/>
                      &nbsp;&nbsp;&lt;Button value="Create" type="create" onClick=&#123;listener}/><br/>
                      &nbsp;&nbsp;&lt;Button value="Delete" type="delete" onClick=&#123;listener}/><br/>
                      &nbsp;&nbsp;&lt;Button value="Cancel" type="cancel" onClick=&#123;listener}/><br/>
                      &nbsp;&nbsp;&lt;Button value="Disabled" type="normal" disabled=&#123;true} onClick=&#123;listener}/><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
            <div className="contain">
              <div className="component">
                <Button value="Size xl" size="xl" onClick={listener}/>
                <Button value="Size lg" type="create" size="lg" onClick={listener}/>
                <Button value="Size sm" type="delete" size="sm" onClick={listener}/>
                <Button value="Size xs" type="cancel" size="xs" onClick={listener}/>
              </div>
              <div>
                <p className="title">Set the size of the Button</p>
                <p className="content">Different value of field size to adjust Button to larger or smaller.</p>
                <p className="code-show" id="code3" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode3" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Button = uskin.Button;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Button value="Size xl" size="xl" onClick=&#123;listener}/><br/>
                      &nbsp;&nbsp;&lt;Button value="Size lg" type="create" size="lg" onClick=&#123;listener}/><br/>
                      &nbsp;&nbsp;&lt;Button value="Size sm" type="delete" size="sm" onClick=&#123;listener}/><br/>
                      &nbsp;&nbsp;&lt;Button value="Size xs" type="cancel" size="xs" onClick=&#123;listener}/><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="contain">
              <div className="component">
                <Button value="Normal" onClick={listener} iconClass="glyphicon icon-region"/>
                <Button value="Create" type="create" onClick={listener} iconClass="glyphicon icon-create"/>
                <Button value="Delete" type="delete" onClick={listener} iconClass="glyphicon icon-more"/>
                <Button value="Cancel" type="cancel" onClick={listener} iconClass="glyphicon icon-edit"/>
                <Button value="Disabled" type="cancel" disabled={true} onClick={listener} iconClass="glyphicon icon-disable"/>
              </div>
              <div>
                <p className="title">Button with icon</p>
                <p className="content">Set different button icon by changing the attribute of iconClass. Available values: glyphicon icon-region, glyphicon icon-create, etc.</p>
                <p className="code-show" id="code4" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode4" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Button = uskin.Button;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Button value="Initial" onClick=&#123;listener} iconClass="glyphicon icon-region"/><br/>
                      &nbsp;&nbsp;&lt;Button value="Initial" type="create" onClick=&#123;listener} iconClass="glyphicon icon-create"/><br/>
                      &nbsp;&nbsp;&lt;Button value="Initial" type="delete" onClick=&#123;listener} iconClass="glyphicon icon-more"/><br/>
                      &nbsp;&nbsp;&lt;Button value="Initial" type="cancel" onClick=&#123;listener} iconClass="glyphicon icon-edit"/><br/>
                      &nbsp;&nbsp;&lt;Button value="Initial" type="cancel" disabled=&#123;true} onClick=&#123;listener} iconClass="glyphicon icon-disable"/><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
            <div className="contain">
              <div className="component">
                <Button value="Not Selected" type="status" onClick={listener}/>
                <Button value="Selected" type="status" selected={true} onClick={listener}/>
              </div>
              <div>
                <p className="title">Selected Button</p>
                <p className="content">Set Button to selected "true" to get a seleted style.</p>
                <p className="code-show" id="code5" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode5" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Button = uskin.Button;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Button value="Not Selected" type="status" onClick=&#123;listener}/><br/>
                      &nbsp;&nbsp;&lt;Button value="Selected" type="status" selected=&#123;true} onClick=&#123;listener}/><br/>
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

module.exports = IntroButton;
      
