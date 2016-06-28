var React = require('react');
var uskin = require('uskin');
var Switch = uskin.Switch;
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
  property: 'labelOn',
  explain: '设置开关开启时显示的文字',
  type: 'string',
  defaultValue: '-',
  id: '1'
}, {
  property: 'labelOff',
  explain: '设置开关关闭时显示的文字',
  type: 'string',
  defaultValue: '-',
  id: '2'
}, {
  property: 'disabled',
  explain: '设置开关不可用',
  type: 'boolean',
  defaultValue: 'false',
  id: '3'
}, {
  property: 'width',
  explain: '设置开关的尺寸',
  type: 'string',
  defaultValue: '-',
  id: '4'
}, {
  property: 'checked',
  explain: '设置开关是否开启',
  type: 'boolean',
  defaultValue: 'false',
  id: '5'
}, {
  property: 'onChange',
  explain: 'change事件的handler',
  type: 'function',
  defaultValue: 'function() {}',
  id: '6'
}];

class IntroSwitch extends React.Component{
  render(){
    return (
      <div>
        <article>
          <h1>Switch</h1>
          <p>Turn a switch to change the state and trigger an event.</p>
        </article>
        <div>
          <h2>Code Demos</h2>
          <div className="left">
            <div className="contain">
              <div className="component">
                <Switch onChange={listener} labelOn="ON" labelOff="OFF" checked={true} />
                <Switch onChange={listener} labelOn="ON" labelOff="OFF" checked={false} />
              </div>
              <div>
                <p className="title">默认开关</p>
                <p className="content">通过设置labelOn，labelOff，checked生成默认样式的开关</p>
                <p className="code-show" id="code1" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode1" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Switch = uskin.Switch;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Switch onChange=&#123;listener} labelOn="ON" labelOff="OFF" checked=&#123;true} /><br/>
                      &nbsp;&nbsp;&lt;Switch onChange=&#123;listener} labelOn="ON" labelOff="OFF" checked=&#123;false} /><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
            <div className="contain">
              <div className="component">
                <Switch onChange={listener} labelOn="ON" labelOff="OFF" checked={true} disabled={false} />
                <Switch onChange={listener} labelOn="ON" labelOff="OFF" disabled={true} />
              </div>
              <div>
                <p className="title">开关是否可用</p>
                <p className="content">通过disabled设置开关是否可用</p>
                <p className="code-show" id="code2" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode2" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Switch = uskin.Switch;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Switch onChange=&#123;listener} labelOn="ON" labelOff="OFF" checked=&#123;true} disabled=&#123;false} /><br/>
                      &nbsp;&nbsp;&lt;Switch onChange=&#123;listener} labelOn="ON" labelOff="OFF" disabled=&#123;true} /><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="contain">
              <div className="component">
                <Switch onChange={listener} disabled={false} width={45} />
                <Switch onChange={listener} disabled={false} width={70} />
              </div>
              <div>
                <p className="title">开关尺寸</p>
                <p className="content">通过width设置开关的尺寸</p>
                <p className="code-show" id="code3" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode3" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                     var Switch = uskin.Switch;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Switch onChange=&#123;listener} disabled=&#123;false} width=&#123;45} /><br/>
                      &nbsp;&nbsp;&lt;Switch onChange=&#123;listener} disabled=&#123;false} width=&#123;70} /><br/>
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

module.exports = IntroSwitch;
