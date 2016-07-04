var React = require('react');
var uskin = require('uskin');
var Panel = uskin.Panel;
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
  property: 'title',
  explain: 'Set the title of Panel',
  type: 'String',
  defaultValue: '-',
  id: '1'
}, {
  property: 'content',
  explain: 'Set the content of Panel',
  type: 'String',
  defaultValue: '-',
  id: '2'
}, {
  property: 'width',
  explain: 'Set the width of Panel',
  type: 'String',
  defaultValue: '-',
  id: '3'
}];

var text = [{
  'title': <div>Crashed Russian Plane Broke Up in the Air</div>,
  'content': <div><p>Meanwhile in Russia, an outpouring of grief gripped the historic city of St. Petersburg,      home of many of the victims. President Vladimir Putin declared a nationwide day of mourning, and      flags flew at half-staff.</p><p>viation experts joined the searchers in a remote part of the Sinai, seeking any clues to what caused the Metrojet Airbus A321-200 to plummet abruptly from 31,000 feet just 23 minutes after it departed from the Red Sea resort of Sharm el-Sheikh bound for St. Petersburg.</p></div>
}, {
  'title': <div>Taylor Swift Songs Sound Incredibly Soothing as Lullabies</div>,
  'content': <div>ot quite ready to introduce your infant to Taylor Swift? Then ease them into Swiftie-hood with these lullaby versions of her greatest hits, brought you to by Rockabye Baby! The album (which is available for purchase on iTunes) offers gentle, twinkly, super-soothing versions of recent hits like “Bad Blood” and “Blank Space” along with old classics like “Love Story” and “You Belong With Me.”<br/>You’ll hear the melodies you know and love reimagined with xylophones, bells and wood blocks. If you don’t have an infant you need to lure to sleep, we recommend just listening on your own. The songs will make great background music to keep you calm while you work or try to figure out how your health insurance works.</div>
}];

class IntroPanel extends React.Component {
  render(){
    return (
      <div>
        <article>
          <h1>Panel</h1>
          <p>Displaying information in the form of titile and content.</p>
        </article>
        <div>
          <h4>Code Demos</h4>
          <div className="left">
            <div className="contain">
              <div className="component">
                <Panel title={text[0].title} content={text[0].content} />
              </div>
              <div>
                <p className="title">Default Panel</p>
                <p className="content">Set the title and content text of Panel</p>
                <p className="code-show" id="code1" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode1" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Panel = uskin.Panel;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Panel title=&#123;text[0].title} content=&#123;text[0].content} /><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="contain">
              <div className="component">
                <Panel title={text[1].title} content={text[1].content} width={400} />
              </div>
              <div>
                <p className="title">Width of Panel</p>
                <p className="content">Set Panel width</p>
                <p className="code-show" id="code2" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode2" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Panel = uskin.Panel;<br/><br/>

                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&nbsp;&lt;Panel title=&#123;text[1].title} content=&#123;text[1].content} width="400" /><br/>
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
                  <p className="title">Parameter "title" and "content"</p>
                  <p className="content">Set the title and content attributes value as String</p>
                </div>
                <div className="code">
                  <pre>
                    <code className="javascript">
                      var text = [&#123;<br/>
                        'title': &lt;div>Crashed Russian Plane Broke Up in the Air&lt;/div>,<br/>
                        'content': &lt;div>&lt;p>Meanwhile in Russia, an outpouring of grief gripped the historic city of St. Petersburg,      home of many of the victims. President Vladimir Putin declared a nationwide day of mourning, and      flags flew at half-staff.&lt;/p>&lt;p>viation experts joined the searchers in a remote part of the Sinai, seeking any clues to what caused the Metrojet Airbus A321-200 to plummet abruptly from 31,000 feet just 23 minutes after it departed from the Red Sea resort of Sharm el-Sheikh bound for St. Petersburg.&lt;/p>&lt;/div><br/>
                      }];
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

module.exports = IntroPanel;
