var React = require('react');
var uskin = require('uskin');
var Modal = uskin.Modal;
var Table = uskin.Table;
var Button = uskin.Button;

function displayClose(e) {
  var tarID = e.target.id;
  var display = document.getElementById('s'+tarID).style.display;
  (display === 'none') && (document.getElementById('s'+tarID).style.display = 'block');
  (display === 'block') && (document.getElementById('s'+tarID).style.display = 'none');
}

var column = [{
  title: 'Attributes',
  width: '150px',
  key: 'property',
  dataIndex: 'property'
}, {
  title: 'Explanation',
  key: 'explain',
  dataIndex: 'explain',
  render: function(col, item, index) {
    return <div style={{wordWrap: 'break-word'}}>{item.explain}</div>;
  }
}, {
  title: 'Type',
  width: '150px',
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
  explain: 'Config the modal type, available value including info, success, warning and danger',
  type: 'String',
  defaultValue: '-',
  id: '0'
}, {
  property: 'props',
  explain: 'Config the title, content and button value of the pop',
  type: 'Object',
  defaultValue: '-',
  id: '1'
}];

var style = {margin: 20};

function pop(type, a, b) {
  var props = {
    title: type.toUpperCase(),
    content: 'This is a modal.',
    okText: 'OK'
  };
  Modal[type](props);
}

class IntroSimpleModal extends React.Component {
  render() {
    return (
      <div>
        <article>
          <h1>Simple Modal</h1>
          <p>Modal pop out when click button.</p>
        </article>
        <div className="demos">
          <h4>Code Demos</h4>
          <div className="left">
            <div className="contain">
              <div className="component">
                <div style={style}><Button value="Info Pop" key="info" onClick={pop.bind(this, 'info')} /></div>
                <div style={style}><Button value="Success Pop" key="success" onClick={pop.bind(this, 'success')} /></div>
                <div style={style}><Button value="Warning Pop" key="warning" onClick={pop.bind(this, 'warning')} /></div>
                <div style={style}><Button value="Danger Pop" key="danger" onClick={pop.bind(this, 'danger')} /></div>
              </div>
              <div>
                <p className="title">Modal</p>
                <p className="content">Various typies of Modal</p>
                <p className="code-show" id="code1" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode1" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Modal = uskin.Modal;<br/>
                    var pop = function(type, a, b) &#123;<br/>
                      &nbsp;var props = &#123;<br/>
                        &nbsp;&nbsp;title: type.toUpperCase(),<br/>
                        &nbsp;&nbsp;content: 'This is a modal.',<br/>
                        &nbsp;&nbsp;okText: 'OK'<br/>
                      &nbsp;};<br/>
                      &nbsp;Modal[type](props);<br/>
                    };<br/><br/>
                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&lt;div><br/>
                        &nbsp;&nbsp;&lt;div>&lt;Button value="Info Pop" key="info" onClick=&#123;pop.bind(this, 'info')} />&lt;/div><br/>
                        &nbsp;&nbsp;&lt;div>&lt;Button value="Success Pop" key="success" onClick=&#123;pop.bind(this, 'success')} />&lt;/div><br/>
                        &nbsp;&nbsp;&lt;div>&lt;Button value="Warning Pop" key="warning" onClick=&#123;pop.bind(this, 'warning')} />&lt;/div><br/>
                        &nbsp;&nbsp;&lt;div>&lt;Button value="Danger Pop" key="danger" onClick=&#123;pop.bind(this, 'danger')} />&lt;/div><br/>
                      &nbsp;&lt;/div><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
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

        <div className="param">
          <h4>Parameters</h4>
          <div className="left">
            <div className="contain">
              <div>
                <p className="title">Parameter "props"</p>
                <p className="content">Define title, content and button value.</p>
              </div>
              <div className="code">
                <pre>
                  <code className="javascript">
                    var type = 'info';<br/>
                    var props = &#123;<br/>
                      &nbsp;title: type.toUpperCase(),<br/>
                      &nbsp;content: 'This is a modal.',<br/>
                      &nbsp;okText: 'OK'<br/>
                    };<br/>
                    Modal[type](props);
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = IntroSimpleModal;
