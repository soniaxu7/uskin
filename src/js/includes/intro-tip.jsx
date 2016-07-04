var React = require('react');
var uskin = require('uskin');
var Tip = uskin.Tip;
var Table = uskin.Table;

var text = {
  'title': 'Note:',
  'content': 'I am content',
  'info': 'I am a info tip',
  'success': 'I am a success tip',
  'warning': 'I am a warning tip',
  'danger': 'I am a danger tip',
  'para': 'A classification of architectural styles for network-based application software by the architectural properties they would induce when applied to the architecture for a distributed hypermedia system'
};

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
  property: 'title',
  explain: 'Set title of Tip',
  type: 'String',
  defaultValue: '-',
  id: 1
}, {
  property: 'content',
  explain: 'Set text content of Tip',
  type: 'String',
  defaultValue: '-',
  id: 2
}, {
  property: 'showIcon',
  explain: 'Set true to show the Tip icon of certain type',
  type: 'Boolean',
  defaultValue: 'false',
  id: 3
}, {
  property: 'type',
  explain: 'Set Tip type, available value including info, success, warning and danger',
  type: 'String',
  defaultValue: '-',
  id: 4
}, {
  property: 'width',
  explain: 'Set Width of Tip',
  type: 'String',
  defaultValue: '-',
  id: 5
}, {
  property: 'isAutoHide',
  explain: 'Set true to enable Tip automatic disapear',
  type: 'Boolean',
  defaultValue: 'false',
  id: 6
}, {
  property: 'icon',
  explain: 'Set type of icon of Tip',
  type: 'String',
  defaultValue: '-',
  id: 7
}];


class IntroTip extends React.Component {
  render(){
    return (
      <div>
        <article>
          <h1>Tip</h1>
          <p>Text tips for reminding current state or catching users attention.</p>
        </article>
        <div>
          <h4>Code Demos</h4>
          <div className="left">
            <div className="contain">
              <div className="component">
                <Tip content={text.info} isAutoHide={true} />
                <Tip content={text.info} type="info" />
                <Tip content={text.success} type="success" />
                <Tip content={text.warning} type="warning" />
                <Tip content={text.danger} type="danger" />
              </div>
              <div>
                <p className="title">Type of Tip</p>
                <p className="content">Types including info, success, warning and danger</p>
                <p className="code-show" id="code1" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode1" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Tip = uskin.Tip;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Tip content=&#123;text.info} isAutoHide=&#123;true} /><br/>
                      &nbsp;&nbsp;&lt;Tip content=&#123;text.info} type="info" /><br/>
                      &nbsp;&nbsp;&lt;Tip content=&#123;text.info} type="success" /><br/>
                      &nbsp;&nbsp;&lt;Tip content=&#123;text.info} type="warning" /><br/>
                      &nbsp;&nbsp;&lt;Tip content=&#123;text.info} type="danger" /><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
            <div className="contain">
              <div className="component">
                <Tip content={text.info} type="info" enableClose={true}/>
                <Tip content={text.success} type="success" enableClose={true}/>
                <Tip content={text.warning} type="warning" enableClose={true}/>
                <Tip content={text.danger} type="danger" enableClose={true}/>
              </div>
              <div>
                <p className="title">enableClose of Tip</p>
                <p className="content">Set enabledClose true to show the close icon</p>
                <p className="code-show" id="code2" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode2" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Tip = uskin.Tip;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Tip content=&#123;text.info} type="info" enableClose=&#123;true}/><br/>
                      &nbsp;&nbsp;&lt;Tip content=&#123;text.info} type="success" enableClose=&#123;true}/><br/>
                      &nbsp;&nbsp;&lt;Tip content=&#123;text.info} type="warning" enableClose=&#123;true}/><br/>
                      &nbsp;&nbsp;&lt;Tip content=&#123;text.info} type="danger" enableClose=&#123;true}/><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
            <div className="contain">
              <div className="component">
                <Tip content={text.content} icon="loading-tip" enableClose={true} />
                <Tip icon="loading-tip" content={text.success}  enableClose={true} type="info"/>
              </div>
              <div>
                <p className="title">Icon of Tip</p>
                <p className="content">Set attribute icon, value including loading-tip, success. Default is warning icon.</p>
                <p className="code-show" id="code3" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode3" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Tip = uskin.Tip;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Tip content=&#123;text.content} icon="loading-tip" enableClose=&#123;true} /> isAutoHide=&#123;true} /><br/>
                      &nbsp;&nbsp;&lt;Tip title=&#123;text.title} icon="loading-tip" content=&#123;text.info} /><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="contain">
              <div className="component">
                <Tip title={text.title} content={text.info} type="info" />
                <Tip title={text.title} content={text.success} type="success" />
                <Tip title={text.title} content={text.warning} type="warning" />
                <Tip title={text.title} content={text.danger} type="danger" />
              </div>
              <div>
                <p className="title">Tip with title</p>
                <p className="content">Set title value of Tip</p>
                <p className="code-show" id="code4" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode4" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Tip = uskin.Tip;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Tip title=&#123;text.title} content=&#123;text.info} type="info" /><br/>
                      &nbsp;&nbsp;&lt;Tip title=&#123;text.title} content=&#123;text.info} type="success" /><br/>
                      &nbsp;&nbsp;&lt;Tip title=&#123;text.title} content=&#123;text.info} type="warning" /><br/>
                      &nbsp;&nbsp;&lt;Tip title=&#123;text.title} content=&#123;text.info} type="danger" /><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
            <div className="contain">
              <div className="component">
                <Tip content={text.info} showIcon={true} enableClose={true} type="info" />
                <Tip content={text.success} showIcon={true} enableClose={true} type="success" />
                <Tip content={text.warning} showIcon={true} enableClose={true} type="warning" />
                <Tip content={text.danger} showIcon={true} enableClose={true} type="danger" />
              </div>
              <div>
                <p className="title">showIcon of Tip</p>
                <p className="content">Set showIcon to true to enable the view of default icon according to Tip type </p>
                <p className="code-show" id="code5" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode5" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Tip = uskin.Tip;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Tip content=&#123;text.info} showIcon=&#123;true} enableClose=&#123;true} type="info" /><br/>
                      &nbsp;&nbsp;&lt;Tip content=&#123;text.success} showIcon=&#123;true} enableClose=&#123;true} type="success" /><br/>
                      &nbsp;&nbsp;&lt;Tip content=&#123;text.warning} showIcon=&#123;true} enableClose=&#123;true} type="warning" /><br/>
                      &nbsp;&nbsp;&lt;Tip content=&#123;text.danger} showIcon=&#123;true} enableClose=&#123;true} type="danger" /><br/>
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

module.exports = IntroTip;
