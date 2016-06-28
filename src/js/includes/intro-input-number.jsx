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
  property: 'min',
  explain: '最小值',
  type: 'string',
  defaultValue: '-Infinity',
  id: '1'
}, {
  property: 'max',
  explain: '最大值',
  type: 'string',
  defaultValue: 'Infinity',
  id: '2'
}, {
  property: 'value',
  explain: '设置数字输入框的初始值',
  type: 'string',
  defaultValue: '0',
  id: '3'
}, {
  property: 'width',
  explain: '设置数字输入框的尺寸',
  type: 'string',
  defaultValue: '-',
  id: '4'
}, {
  property: 'step',
  explain: '设置数字输入框的增幅',
  type: 'string',
  defaultValue: '1',
  id: '5'
}, {
  property: 'disabled',
  explain: '设置数字输入框是否可以',
  type: 'boolean',
  defaultValue: 'false',
  id: '6'
}, {
  property: 'onChange',
  explain: 'change事件的handler',
  type: 'function',
  defaultValue: 'function() {}',
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
          <h2>Code Demos</h2>
          <div className="left">
            <div className="contain">
              <div className="component">
                <InputNumber onChange={listener} />
              </div>
              <div>
                <p className="title">默认的数字输入框</p>
                <p className="content">设置onchange，当数字改变时触发事件</p>
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
                <p className="title">指定尺寸的数字输入框</p>
                <p className="content">通过设置width属性可以改变数字输入框的尺寸</p>
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
                <p className="title">可设置步长的数字输入框</p>
                <p className="content">通过step属性设置数字输入框的增幅</p>
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
                <p className="title">禁用的数字输入框</p>
                <p className="content">disabled属性值为true时，数字输入框不可用</p>
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

module.exports = IntroInputNumber;
