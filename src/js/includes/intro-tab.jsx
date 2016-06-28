var React = require('react');
var uskin = require('uskin');
var Tab = uskin.Tab;
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
  property: 'items',
  explain: '设置选项卡属性',
  type: 'array',
  defaultValue: '-',
  id: '1'
}, {
  property: 'size',
  explain: '设置选项卡的尺寸',
  type: 'string',
  defaultValue: '-',
  id: '2'
}];

var data1 = [{
  property: 'name',
  explain: '设置选项卡名称',
  type: 'string',
  defaultValue: '-',
  id: 1
}, {
  property: 'default',
  explain: '设置选项卡是否选中',
  type: 'boolean',
  defaultValue: 'false',
  id: 2
}, {
  property: 'disabled',
  explain: '设置选项卡不可用',
  type: 'boolean',
  defaultValue: 'false',
  id: 3
}, {
  property: 'href',
  explain: '设置选项卡链接',
  type: 'string',
  defaultValue: '-',
  id: 4
}, {
  property: 'onClick',
  explain: 'click事件的handler',
  type: 'function',
  defaultValue: 'function() {}',
  id: 5
}];

var items1 = [{ name: 'Overview', value: '0', onClick: listener },
  { name: 'Account Recharge', value: '1', onClick: listener, default: true },
  { name: 'Recharge Record', value: '2', onClick: listener }],
  items2 = [{ name: 'Overview', value: '0', href: '#', onClick: listener, default: true },
  { name: 'Account Recharge', value: '0', href: '#', onClick: listener },
  { name: 'Disabled Tab', value: '0', href: '#', onClick: listener, disabled: true }],
  items3 = [{ name: 'Overview', value: '0', href: '#overview', onClick: listener, default: true },
  { name: 'Account Recharge', value: '1', href: '#accout', onClick: listener },
  { name: 'Disabled Tab', value: '2', href: '#', onClick: listener, disabled: true }];

class IntroTab extends React.Component {
  render(){
    return (
      <div>
        <article>
          <h1>Tab</h1>
          <p>Click tab to switch the page content.</p>
        </article>
        <div>
          <h2>Code Demos</h2>
          <div className="left">
            <div className="contain">
              <div className="component">
                <Tab items={items1}/>
              </div>
              <div>
                <p className="title">默认选项卡</p>
                <p className="content">通过设置items生成默认样式的选项卡</p>
                <p className="code-show" id="code1" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode1" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Tab = uskin.Tab;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Tab items=&#123;items1}/><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
            <div className="contain">
              <div className="component">
                <Tab items={items3} size="small"/>
              </div>
              <div>
                <p className="title">选项卡尺寸</p>
                <p className="content">通过设置size生成指定样式的选项卡</p>
                <p className="code-show" id="code2" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode2"style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Tab = uskin.Tab;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Tab items=&#123;items3} size="small"/><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="contain">
              <div className="component">
                <Tab items={items2}/>
              </div>
              <div>
                <p className="title">不可用选项卡</p>
                <p className="content">通过设置items的disabled属性生成不可用的选项卡</p>
                <p className="code-show" id="code3" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode3"style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Tab = uskin.Tab;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Tab items=&#123;items2}/><br/>
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
                <p>Tab</p>
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
                <p>Tab.Item</p>
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
                  <p className="title">items属性的传参</p>
                  <p className="content">设置标签页标题及绑定事件</p>
                </div>
                <div className="code">
                  <pre>
                    <code className="javascript">
                      var items1 = [&#123; name: 'Overview', value: '0', onClick: listener },<br/>
                        &nbsp;&#123; name: 'Account Recharge', value: '1', onClick: listener, default: true },<br/>
                        &nbsp;&#123; name: 'Recharge Record', value: '2', onClick: listener }];<br/>
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

module.exports = IntroTab;
