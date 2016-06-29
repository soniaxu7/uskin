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
  explain: 'Set type light or leave it as default to switch different styles of the search bar',
  type: 'String',
  defaultValue: '-',
  id: '1'
}, {
  property: 'width',
  explain: 'Set the width of the search bar',
  type: 'String',
  defaultValue: '-',
  id: '2'
}, {
  property: 'onClick',
  explain: 'Handler of click event',
  type: 'Function',
  defaultValue: '-',
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
                <p className="title">Width of InputSearch</p>
                <p className="content">Set the width to change the overall component width</p>
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
                <p className="title">Light styled InputSearch</p>
                <p className="content">Set type to "light" to get a simplified style</p>
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
