var React = require('react');
var uskin = require('uskin');
var InputSearch = uskin.InputSearch;
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
  explain: '设置搜索框的类型，可选值为light或不设值',
  type: 'string',
  defaultValue: '-',
  id: '1'
}, {
  property: 'width',
  explain: '设置搜索框的尺寸',
  type: 'string',
  defaultValue: '-',
  id: '2'
}, {
  property: 'onClick',
  explain: 'click事件的handler',
  type: 'function',
  defaultValue: 'function() {}',
  id: '3'
}];

class IntroInputSearch extends React.Component {
  render(){
    return (
      <div>
        <article>
          <h1>InputSearch</h1>
          <p>Input box as search bar.</p>
        </article>
        <div>
          <h2>Code Demos</h2>
          <div className="left">
            <div className="contain">
              <div className="component">
                <InputSearch onClick={listener} width="200" />
              </div>
              <div>
                <p className="title">搜索框尺寸</p>
                <p className="content">设置width属性，改变搜索框的尺寸</p>
                <p className="code-show" id="code1" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode1" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var InputSearch = uskin.InputSearch;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;InputSearch onClick=&#123;listener} width="200" /><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="contain">
              <div className="component">
                <InputSearch onClick={listener} width="300" type="light" />
              </div>
              <div>
                <p className="title">简洁的搜索框</p>
                <p className="content">设置type属性为light，使搜索框以简洁的形式呈现</p>
                <p className="code-show"  id="code2" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode2" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var InputSearch = uskin.InputSearch;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;InputSearch onClick=&#123;listener} width="300" type="light" /><br/>
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

module.exports = IntroInputSearch;
