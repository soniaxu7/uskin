var React = require('react');
var uskin = require('uskin');
var Pagination = uskin.Pagination;
var Table = uskin.Table;

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
  property: 'total',
  explain: '设置数据的总条数',
  type: 'string',
  defaultValue: '-',
  id: '1'
}, {
  property: 'current',
  explain: '设置当前页码',
  type: 'string',
  defaultValue: '1',
  id: '2'
}, {
  property: 'onClick',
  explain: 'click事件的handler',
  type: 'function',
  defaultValue: 'function() {}',
  id: '3'
}, {
  property: 'labelOnly',
  explain: '传入boolean值，设置是否仅显示翻页按键而不显示页码',
  type: 'boolean',
  defaultValue: 'false',
  id: '4'
}, {
  property: 'label',
  explain: '传入object，设置需要显示的翻页按键的键值',
  type: 'object',
  defaultValue: '-',
  id: '5'
}, {
  property: 'onClickLabel',
  explain: '指定点击翻页按键后触发的事件',
  type: 'function',
  defaultValue: 'function() {}',
  id: '6'
}];

var label1 = {
  prev: true,
  next: true,
  first: true,
  last: true
};

var label2 = {
  first: true,
  prev: true,
  next: true,
  nextDisabled: true
};

class IntroPagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value1: 1,
      value2: 5,
      labelValue: 'first',
      changeLabel: true
    };

    ['listener1', 'listener2', 'labelListener'].forEach(func => {
      this[func] = this[func].bind(this);
    });
  }

  listener1(page, e) {
    console.debug('click triggered!', page, e);
    this.setState({
      value1: page
    });
  }

  listener2(page, e) {
    console.debug('click triggered!', page, e);
    this.setState({
      value2: page
    });
  }

  labelListener(label, e) {
    console.debug('click triggered!', label, e);
    this.setState({
      labelValue: label
    });
  }

  render(){
    return (
      <div>
        <article>
          <h1>Pagination</h1>
          <p>Displaying links of current, previous and next pages.</p>
        </article>
        <div>
          <h2>Code Demos</h2>
          <div className="left">
            <div className="contain">
              <div className="component">
                <Pagination onClick={this.listener1} total={5} current={this.state.value1}/>
              </div>
              <div>
                <p className="title">默认分页</p>
                <p className="content">通过设置total确定生成分页的总数</p>
                <p className="code-show" id="code1" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode1" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Pagination = uskin.Pagination;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Pagination onClick=&#123;this.listener1} total=&#123;5} current=&#123;this.state.value1} /><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="contain">
              <div className="component">
                <Pagination onClick={this.listener2} total={20} current={this.state.value2} />
              </div>
              <div>
                <p className="title">定位指定页码的分页</p>
                <p className="content">通过设置current的初始值设置最初所处的分页</p>
                <p className="code-show" id="code2" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode2" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Pagination = uskin.Pagination;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Pagination onClick=&#123;this.listener2} total=&#123;20} current=&#123;this.state.value2} /><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="left">
            <div className="contain">
              <div className="component">
                <p className="virtual-page">Current Page is <span>{' "' + this.state.labelValue + '"'}</span></p>
                <Pagination labelOnly={true} label={this.state.changeLabel ? label1 : label2} onClickLabel={this.labelListener}/>
              </div>
              <div>
                <p className="title">无页码分页</p>
                <p className="content">不显示分页页码，仅支持点击切换向前页、向后页、最前页、最后页</p>
                <p className="code-show" id="code3" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode3" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Pagination = uskin.Pagination;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Pagination labelOnly=&#123;true} label=&#123;this.state.changeLabel ? label1 : label2} onClickLabel=&#123;this.labelListener} /><br/>
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
          <div className="param">
            <h2>Parameters</h2>
            <div className="left">
              <div className="contain">
                <div>
                  <p className="title">label属性传参</p>
                  <p className="content">设置要显示的翻页按键</p>
                </div>
                <div className="code">
                  <pre>
                    <code className="javascript">
                      var label1 = &#123;<br/>
                        &nbsp;prev: true,<br/>
                        &nbsp;next: true,<br/>
                        &nbsp;first: true,<br/>
                        &nbsp;last: true<br/>
                      };<br/><br/>

                      var label2 = &#123;<br/>
                        &nbsp;first: true,<br/>
                        &nbsp;prev: true,<br/>
                        &nbsp;next: true,<br/>
                        &nbsp;nextDisabled: true<br/>
                      };
                    </code>
                  </pre>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="contain">
                <div>
                  <p className="title">onClick及onClickLabel属性传参</p>
                  <p className="content">设置组件state的存入当前页面的页码值，如this.state.value。用onClick及onClickLabel事件控制state中页码值的更新，设置属性current={this.state.value}，即实现了点击翻页更新当前页。</p>
                </div>
                <div className="code">
                  <pre>
                    <code className="javascript">
                      constructor(props) &#123;<br/>
                        &nbsp;super(props);<br/><br/>

                        &nbsp;this.state = &#123;<br/>
                          &nbsp;&nbsp;value1: 1,<br/>
                          &nbsp;&nbsp;value2: 5,<br/>
                          &nbsp;&nbsp;labelValue: 'first',<br/>
                          &nbsp;&nbsp;changeLabel: true<br/>
                        &nbsp;};<br/><br/>

                        &nbsp;['listener1', 'listener2', 'labelListener'].forEach(func => &#123;<br/>
                          &nbsp;&nbsp;this[func] = this[func].bind(this);<br/>
                        &nbsp;});<br/>
                      }<br/><br/>

                      listener1(page, e) &#123;<br/>
                        &nbsp;console.debug('click triggered!', page, e);<br/>
                        &nbsp;this.setState(&#123;<br/>
                          &nbsp;&nbsp;value1: page<br/>
                        &nbsp;});<br/>
                      }<br/><br/>

                      listener2(page, e) &#123;<br/>
                        &nbsp;console.debug('click triggered!', page, e);<br/>
                        &nbsp;this.setState(&#123;<br/>
                          &nbsp;&nbsp;value2: page<br/>
                        &nbsp;});<br/>
                      }<br/><br/>

                      labelListener(label, e) &#123;<br/>
                        &nbsp;console.debug('click triggered!', label, e);<br/>
                        &nbsp;this.setState(&#123;<br/>
                          &nbsp;&nbsp;labelValue: label<br/>
                        &nbsp;});<br/>
                      }
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

module.exports = IntroPagination;
