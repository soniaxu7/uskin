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
  property: 'type',
  explain: '设置按钮的类型，可选值create，delete，cancel，status或者不设值',
  type: 'string',
  defaultValue: '-',
  id: '1'
}, {
  property: 'disabled',
  explain: '设置按钮是否可用，可选值true，false',
  type: 'boolean',
  defaultValue: 'false',
  id: '2'
}, {
  property: 'initial',
  explain: '设置按钮是否是原始按钮，可选值true，false',
  type: 'boolean',
  defaultValue: 'false',
  id: '3'
}, {
  property: 'iconClass',
  explain: '设置按钮的图标，可选值有icon-create，icon-remove，icon-edit等',
  type: 'string',
  defaultValue: '-',
  id: '4'
}, {
  property: 'size',
  explain: '设置按钮的尺寸，可选值xl，lg，sm，xs',
  type: 'string',
  defaultValue: '-',
  id: '5'
}, {
  property: 'selected',
  explain: '设置按钮是否被选中，可选值true，false',
  type: 'boolean',
  defaultValue: 'false',
  id: '6'
}, {
  property: 'onClick',
  explain: 'click事件的handler',
  type: 'function',
  defaultValue: 'function() {}',
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
          <h2>Code Demos</h2>
          <div className="left">
            <div className="contain">
              <div className="component">
                <Button value="Initial" initial={true} onClick={listener}/>
                <Button value="Initial" type="create" initial={true} onClick={listener}/>
                <Button value="Initial" type="delete" initial={true} onClick={listener}/>
                <Button value="Initial" type="cancel" initial={true} onClick={listener}/>
                <Button value="Initial" type="cancel" initial={true} disabled={true} onClick={listener}/>
              </div>
              <div>
                <p className="title">默认按钮</p>
                <p className="content">通过initial值为true，false设置按钮是否是默认按钮</p>
                <p className="code-show" id="code1" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode1" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Button = uskin.Button;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Button value="Initial" initial={true} onClick={listener} /><br/>
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
                <Button value="Disabled" type="cancel" disabled={true} onClick={listener}/>
              </div>
              <div>
                <p className="title">按钮类型</p>
                <p className="content">按钮分为五种：不同按钮，创建按钮，删除按钮，取消按钮，不可用按钮；通过设置按钮的value，type等属性来使用不同的按钮</p>
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
                      &nbsp;&nbsp;&lt;Button value="Disabled" type="cancel" disabled={true} onClick=&#123;listener}/><br/>
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
                <p className="title">设置大小的按钮</p>
                <p className="content">通过将属性size设置为xl，lg，sm，xs使图标大小发生变化</p>
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
                <Button value="Initial" inxitial={true} onClick={listener} iconClass="glyphicon icon-region"/>
                <Button value="Initial" type="create" initial={true} onClick={listener} iconClass="glyphicon icon-create"/>
                <Button value="Initial" type="delete" initial={true} onClick={listener} iconClass="glyphicon icon-more"/>
                <Button value="Initial" type="cancel" initial={true} onClick={listener} iconClass="glyphicon icon-edit"/>
                <Button value="Initial" type="cancel" initial={true} disabled={true} onClick={listener} iconClass="glyphicon icon-disable"/>
              </div>
              <div>
                <p className="title">带图标的按钮</p>
                <p className="content">通过设置iconClass为glyphicon icon-region，glyphicon icon-create可以将按钮图标设置为定位，加号等</p>
                <p className="code-show" id="code4" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode4" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Button = uskin.Button;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Button value="Initial" inxitial=&#123;true} onClick=&#123;listener} iconClass="glyphicon icon-region"/><br/>
                      &nbsp;&nbsp;&lt;Button value="Initial" type="create" initial=&#123;true} onClick=&#123;listener} iconClass="glyphicon icon-create"/><br/>
                      &nbsp;&nbsp;&lt;Button value="Initial" type="delete" initial=&#123;true} onClick=&#123;listener} iconClass="glyphicon icon-more"/><br/>
                      &nbsp;&nbsp;&lt;Button value="Initial" type="cancel" initial=&#123;true} onClick=&#123;listener} iconClass="glyphicon icon-edit"/><br/>
                      &nbsp;&nbsp;&lt;Button value="Initial" type="cancel" initial=&#123;true} disabled=&#123;true} onClick=&#123;listener} iconClass="glyphicon icon-disable"/><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
            <div className="contain">
              <div className="component">
                <Button value="Status" type="status" onClick={listener}/>
                <Button value="Status Selected" type="status" selected={true} onClick={listener}/>
              </div>
              <div>
                <p className="title">被选中的按钮</p>
                <p className="content">属性selected布尔值的改变决定按钮是否被选中</p>
                <p className="code-show" id="code5" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode5" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Button = uskin.Button;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Button value="Status" type="status" onClick=&#123;listener}/><br/>
                      &nbsp;&nbsp;&lt;Button value="Status Selected" type="status" selected=&#123;true} onClick=&#123;listener}/><br/>
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
        </div>
      </div>
    );
  }
}

module.exports = IntroButton;
      
