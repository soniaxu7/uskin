var React = require('react');
var uskin = require('uskin');
var Table = uskin.Table;
var Tooltip = uskin.Tooltip;

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

function listener(e) {
  console.debug('click triggered!', e);
}

var data = [{
  property: 'content',
  explain: '输入字符串作为提示显示的文案内容',
  type: 'string',
  defaultValue: '-',
  id: '0'
}, {
  property: 'width',
  explain: '设置提示的宽度',
  type: 'string',
  defaultValue: '-',
  id: '1'
}, {
  property: 'hide',
  explain: '设置布尔值，决定提示是否显示',
  type: 'boolean',
  defaultValue: 'false',
  id: '2'
}, {
  property: 'type',
  explain: '设置提示的背景风格，可选值为info，success，warning，danger',
  type: 'string',
  defaultValue: 'info',
  id: '3'
}, {
  property: 'shape',
  explain: '设置提示指向的位置，以配合提示出现的位置，可选值为top, bottom, right, left等',
  type: 'string',
  defaultValue: '-',
  id: '4'
}];

var content = 'I am a tooltip!',
  posi = 'I am at ',
  width= 100;

class IntroTooltip extends React.Component {
  render() {
    return (
      <div>
        <article>
          <h1>Tooltip</h1>
          <p>Tips pointing at certain items.</p>
        </article>
        <h2>Code Demos</h2>
        <div className="left">
          <div className="contain">
            <div className="component" style={{height: '200px'}}>
              <Tooltip content={content}/>
              <Tooltip content={content} width={200}/>
              <Tooltip content={content} hide={true}/>
              <Tooltip content={content} type="error"/>
            </div>
            <div>
              <p className="title">带有不同属性的提示</p>
              <p className="content">上述四个例子(设置第三个例子为隐藏，第四个例子为警示提示)，设置width、hide、type属性来改变提示的样式</p>
              <p className="code-show" id="code1" onClick={displayClose}>+</p>
            </div>
            <div className="code" id="scode1" style={{display: 'none'}}>
              <pre>
                <code className="javascript">
                  var Tooltip = uskin.Tooltip;<br/><br/>
                  ReactDOM.render(&lt;div><br/>
                    &nbsp;&lt;Tooltip content=&#123;content}/><br/>
                    &nbsp;&lt;Tooltip content=&#123;content} width=&#123;200}/><br/>
                    &nbsp;&lt;Tooltip content=&#123;content} hide=&#123;true}/><br/>
                    &nbsp;&lt;Tooltip content=&#123;content} type="error"/><br/>
                  &lt;/div>, mountNode);
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="contain">
            <div className="component" style={{height: '200px'}}>
              <div className="tips-row top-tips">
                <Tooltip content={posi + 'top-left'} width={width} shape="top-left"/>
                <Tooltip content={posi + 'top'} width={width} shape="top"/>
                <Tooltip content={posi + 'top-right'} width={width} shape="top-right"/>
              </div>
              <div className="tips-row bottom-tips">
                <Tooltip content={posi + 'bottom-left'} width={width} shape="bottom-left"/>
                <Tooltip content={posi + 'bottom'} width={width} shape="bottom"/>
                <Tooltip content={posi + 'bottom-right'} width={width} shape="bottom-right"/>
              </div>
            </div>
            <div>
              <p className="title">设置shape属性</p>
              <p className="content">设置shape属性可以控制提示的指向位置，用以配合提示出现在上下的位置，可选值包括：top-left, top, top-right, bottom-left, bottom, bottom-right</p>
              <p className="code-show" id="code2" onClick={displayClose}>+</p>
            </div>
            <div className="code" id="scode2" style={{display: 'none'}}>
              <pre>
                <code className="javascript">
                  var Tooltip = uskin.Tooltip;<br/><br/>
                  ReactDOM.render(&lt;div className="tips-row top-tips"><br/>
                    &nbsp;&lt;Tooltip content=&#123;posi + 'top-left'} width=&#123;width} shape="top-left"/><br/>
                    &nbsp;&lt;Tooltip content=&#123;posi + 'top'} width=&#123;width} shape="top"/><br/>
                    &nbsp;&lt;Tooltip content=&#123;posi + 'top-right'} width=&#123;width} shape="top-right"/><br/>
                  &lt;/div><br/>
                  &lt;div className="tips-row bottom-tips"><br/>
                    &nbsp;&lt;Tooltip content=&#123;posi + 'bottom-left'} width=&#123;width} shape="bottom-left"/><br/>
                    &nbsp;&lt;Tooltip content=&#123;posi + 'bottom'} width=&#123;width} shape="bottom"/><br/>
                    &nbsp;&lt;Tooltip content=&#123;posi + 'bottom-right'} width=&#123;width} shape="bottom-right"/><br/>
                  &lt;/div>, mountNode);
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="left">
          <div className="contain">
            <div className="component" style={{height: '200px'}}>
              <div className="tips-col left-tips">
                <Tooltip content={posi + 'left-top'} width={width} shape="left-top"/>
                <Tooltip content={posi + 'left'} width={width} shape="left"/>
                <Tooltip content={posi + 'left-bottom'} width={width} shape="left-bottom"/>
              </div>
              <div className="tips-col right-tips">
                <Tooltip content={posi + 'right-top'} width={width} shape="right-top"/>
                <Tooltip content={posi + 'right'} width={width} shape="right"/>
                <Tooltip content={posi + 'right-bottom'} width={width} shape="right-bottom"/>
              </div>
            </div>
            <div>
              <p className="title">设置shape属性</p>
              <p className="content">设置shape属性使指针出现在侧面，以配合提示出现在左右侧位置，可选值包括：left-top, left, left-bottom, right-top, right, right-bottom</p>
              <p className="code-show" id="code3" onClick={displayClose}>+</p>
            </div>
            <div className="code" id="scode3" style={{display: 'none'}}>
              <pre>
                <code className="javascript">
                  var Tooltip = uskin.Tooltip;<br/><br/>
                  ReactDOM.render(&lt;div className="tips-col left-tips"><br/>
                    &nbsp;&lt;Tooltip content=&#123;posi + 'left-top'} width=&#123;width} shape="left-top"/><br/>
                    &nbsp;&lt;Tooltip content=&#123;posi + 'left'} width=&#123;width} shape="left"/><br/>
                    &nbsp;&lt;Tooltip content=&#123;posi + 'left-bottom'} width=&#123;width} shape="left-bottom"/><br/>
                  &lt;/div><br/>
                  &lt;div className="tips-col right-tips"><br/>
                    &nbsp;&lt;Tooltip content=&#123;posi + 'right-top'} width=&#123;width} shape="right-top"/><br/>
                    &nbsp;&lt;Tooltip content=&#123;posi + 'right'} width=&#123;width} shape="right"/><br/>
                    &nbsp;&lt;Tooltip content=&#123;posi + 'right-bottom'} width=&#123;width} shape="right-bottom"/><br/>
                  &lt;/div>, mountNode);
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="api">
          <h2>Attributes</h2>
          <div>
            <p></p>
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

module.exports = IntroTooltip;
