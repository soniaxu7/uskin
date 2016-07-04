var React = require('react');
var uskin = require('uskin');
var Breadcrumb = uskin.Breadcrumb;
var Table = uskin.Table;

function displayClose(e) {
  var tarID = e.target.id;
  var display = document.getElementById('s'+tarID).style.display;
  (display === 'none') && (document.getElementById('s'+tarID).style.display = 'block');
  (display === 'block') && (document.getElementById('s'+tarID).style.display = 'none');
}

var breadcrumb = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'Store',
    href: '#store'
  }],
  items2 = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'Store',
    href: '#store'
  }, {
    name: 'Phones',
    href: '#phone'
  }];

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
  property: 'items',
  explain: 'Config the hierarchy via an array',
  type: 'Array',
  defaultValue: '-',
  id: '0'
}];

class IntroBreadcrumb extends React.Component {
  render(){
    return (
      <div>
        <article>
          <h1>Breadcrumb</h1>
          <p>Displaying a hierarchy of the current page in relation to the website&#39;s structrue.</p>
        </article>
        <div className="demos">
          <h4>Code Demos</h4>
          <div className="left">
            <div className="contain">
              <div className="component">
                <Breadcrumb items={breadcrumb} key="1" />
                <Breadcrumb items={items2} key="2" />
              </div>
              <div>
                <p className="title">Breadcrumb</p>
                <p className="content">The sequence of the breadcrumb links are consistent with the sequence of the array named items.</p>
                <p className="code-show" id="code1" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode1" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Breadcrumb = uskin.Breadcrumb;<br/><br/>
                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Breadcrumb items=&#123;breadcrumb} key="1" /><br/>
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
                <p className="title">Parameter "items"</p>
                <p className="content">Define the name of each level in the hierarchy, and the link address.</p>
              </div>
              <div className="code">
                <pre>
                  <code className="javascript">
                    var breadcrumb = [&#123;<br/>
                      &nbsp;name: 'Home',<br/>
                      &nbsp;href: '#home'<br/>
                    }, &#123;<br/>
                      &nbsp;name: 'Store',<br/>
                      &nbsp;href: '#store'<br/>
                    }],<br/>
                    items2 = [&#123;<br/>
                      &nbsp;name: 'Home',<br/>
                      &nbsp;href: '#home'<br/>
                    }, &#123;<br/>
                      &nbsp;name: 'Store',<br/>
                      &nbsp;href: '#store'<br/>
                    }, &#123;<br/>
                      &nbsp;name: 'Phones',<br/>
                      &nbsp;href: '#phone'<br/>
                    }];
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

module.exports = IntroBreadcrumb;
