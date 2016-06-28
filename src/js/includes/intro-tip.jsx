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
  property: 'title',
  explain: '设置提示框的标题',
  type: 'string',
  defaultValue: '-',
  id: 1
}, {
  property: 'content',
  explain: '设置提示框的提示信息',
  type: 'string',
  defaultValue: '-',
  id: 2
}, {
  property: 'showIcon',
  explain: '设置提示框的自有图标的显示或隐藏',
  type: 'boolean',
  defaultValue: 'false',
  id: 3
}, {
  property: 'type',
  explain: '设置提示框的提示信息类型，可选值为info，success，warning，danger',
  type: 'string',
  defaultValue: '-',
  id: 4
}, {
  property: 'width',
  explain: '设置提示框的尺寸',
  type: 'string',
  defaultValue: '-',
  id: 5
}, {
  property: 'isAutoHide',
  explain: '设置提示框是否默认自动隐藏，可选值true，false',
  type: 'boolean',
  defaultValue: 'false',
  id: 6
}, {
  property: 'icon',
  explain: '设置提示框的图标',
  type: 'string',
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
          <h2>Code Demos</h2>
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
                <p className="title">默认文字提示框</p>
                <p className="content">通过设置type生成info，success，warning，danger四种提示框</p>
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
                <p className="title">可关闭的文字提示框</p>
                <p className="content">通过设置enabledClose产生可关闭的提示框</p>
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
                <p className="title">图标提示框</p>
                <p className="content">通过icon设置提示框的图标</p>
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
                <p className="title">带标题的文字提示框</p>
                <p className="content">通过title设置带标题的提示框</p>
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
                <Tip content={text.info} icon="loading-tip" enableClose={true} type="info" />
                <Tip content={text.success} icon="loading-tip" enableClose={true} type="success" />
                <Tip content={text.warning} icon="loading-tip" enableClose={true} type="warning" />
                <Tip content={text.danger} icon="loading-tip" enableClose={true} type="danger" />
              </div>
              <div>
                <p className="title">显示自有图标提示框</p>
                <p className="content">设置showIcon显示提示框自有的图标</p>
                <p className="code-show" id="code5" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode5" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Tip = uskin.Tip;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Tip content=&#123;text.info} icon="loading-tip" enableClose=&#123;true} type="info" /><br/>
                      &nbsp;&nbsp;&lt;Tip content=&#123;text.info} icon="loading-tip" enableClose=&#123;true} type="success" /><br/>
                      &nbsp;&nbsp;&lt;Tip content=&#123;text.info} icon="loading-tip" enableClose=&#123;true} type="warning" /><br/>
                      &nbsp;&nbsp;&lt;Tip content=&#123;text.info} icon="loading-tip" enableClose=&#123;true} type="danger" /><br/>
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

module.exports = IntroTip;
