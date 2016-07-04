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
  property: 'total',
  explain: 'Set the total number of the pages',
  type: 'String',
  defaultValue: '-',
  id: '1'
}, {
  property: 'current',
  explain: 'Set the current page number',
  type: 'String',
  defaultValue: '1',
  id: '2'
}, {
  property: 'onClick',
  explain: 'Handler of click event',
  type: 'Function',
  defaultValue: '-',
  id: '3'
}, {
  property: 'labelOnly',
  explain: 'Set "true" to only show the "previous/next" button rather than the number of page',
  type: 'Boolean',
  defaultValue: 'false',
  id: '4'
}, {
  property: 'label',
  explain: 'The text content of the turn over button',
  type: 'Object',
  defaultValue: '-',
  id: '5'
}, {
  property: 'onClickLabel',
  explain: 'Handler of click the turn over button',
  type: 'Function',
  defaultValue: '-',
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
          <h4>Code Demos</h4>
          <div className="left">
            <div className="contain">
              <div className="component">
                <Pagination onClick={this.listener1} total={5} current={this.state.value1}/>
              </div>
              <div>
                <p className="title">Default Pagination</p>
                <p className="content">Set the total as the number of all pages</p>
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
                <p className="title">Initialize current page</p>
                <p className="content">Set the value of current as the current page when initialed</p>
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
                <p className="title">No page numbers Pagination</p>
                <p className="content">Show button of previous next first last rather than the number of pages</p>
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
                  <p className="title">Parameter "label"</p>
                  <p className="content">Set the text content of the turn over button</p>
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
                  <p className="title">Parameter "onClick" and "onClickLabel"</p>
                  <p className="content">Normally we set a component state to store the current page number such as this.state.value. Set the handler of onClick and onClickLabel to refresh this.state.value and set attribute current={this.state.value}. Thus the click turnover button can be functional.</p>
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
