var React = require('react');
var uskin = require('uskin');
var Notification = uskin.Notification;
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

var text = {
  'title': 'Note:',
  'content': 'I am content',
  'info': 'I am a info notification',
  'success': 'I am a success notification',
  'warning': 'I am a warning notification',
  'danger': 'I am a danger notification',
  'para': 'A classification of architectural styles for network-based application software by the architectural properties they would induce when applied to the architecture for a distributed hypermedia system'
};

function listener(e) {
  console.debug('click triggered!', e);
}

var data = [{
  property: 'Notification.addNotice',
  explain: 'Pop the notification',
  type: 'Function',
  defaultValue: 'parameter \"noticeProps\"',
  id: '1'
}, {
  property: 'Notification.removeNotice',
  explain: 'Remove the notification',
  type: 'Function',
  defaultValue: 'parameter \"id\"',
  id: '2'
}, {
  property: 'Notification.updateNotice',
  explain: 'Change notification to new type of style',
  type: 'Function',
  defaultValue: 'parameter \"newNotice\"',
  id: '3'
}];

var notices = [{
  title: 'Note:',
  content: 'I am content',
  showIcon: true,
  isAutoHide: true,
  duration: 5,
  width: 300,
  id: 1
}, {
  title: 'Note:',
  content: 'I am a info notification',
  type: 'info',
  showIcon: true,
  isAutoHide: false,
  width: 300,
  id: 2
}, {
  title: 'Note:',
  content: 'I am a success notification',
  type: 'success',
  showIcon: true,
  isAutoHide: true,
  width: 300,
  id: 3
}, {
  title: 'Note:',
  content: 'I am a warning notification',
  type: 'warning',
  showIcon: true,
  isAutoHide: true,
  width: 300,
  id: 4
}, {
  title: 'Note:',
  content: 'A classification of architectural styles for network-based application software by the architectural properties they would induce when applied to the architecture for a distributed hypermedia system',
  type: 'danger',
  showIcon: true,
  isAutoHide: true,
  width: 300,
  id: 5
}, {
  title: 'Note:',
  content: 'I am a notification',
  icon: 'loading-notification',
  showIcon: true,
  isAutoHide: true,
  width: 300,
  id: 6
}, {
  title: 'Note:',
  content: 'I am a danger notification',
  type: 'danger',
  showIcon: false,
  isAutoHide: true,
  width: 300,
  id: 7
}];
var style = {margin: 20};

function showNotification(noticeVar) {
  var notice = {};

  for (var key in noticeVar) {
    notice[key] = noticeVar[key];
  }

  Notification.addNotice(notice);
}

function removeNotification() {
  Notification.removeNotice(2);
}

function updateNotification() {
  var notice = [];
  for (var key in notices[0]) {
    notice[key] = notices[0][key];
  }
  notice.id = 2;
  Notification.updateNotice(notice);
}

class IntroNotification extends React.Component{
  render(){
    return (
      <div>
        <article>
          <h1>Notification</h1>
          <p>Pop notification in the upper right corner.</p>
        </article>
        <div>
          <h4>Code Demos</h4>
          <div className="left">
            <div className="contain">
              <div className="component">
                <div style={style}>
                  <Button value="Show notification with user defined duration" onClick={showNotification.bind(this, notices[0])} />
                </div>
                <div style={style}>
                  <Button value="Show notification do not hide automatic" onClick={showNotification.bind(this, notices[1])} />
                </div>
                <div style={style}>
                  <Button value="Show success type notification with icon" onClick={showNotification.bind(this, notices[2])} />
                </div>
                <div style={style}>
                  <Button value="Show warning type notification with icon" onClick={showNotification.bind(this, notices[3])} />
                </div>
                <div style={style}>
                  <Button value="Show danger type notification with icon" onClick={showNotification.bind(this, notices[4])} />
                </div>
                <div style={style}>
                  <Button value="Show notification with user defined icon" onClick={showNotification.bind(this, notices[5])} />
                </div>
                <div style={style}>
                  <Button value="Show notification with no icon" onClick={showNotification.bind(this, notices[6])} />
                </div>
                <div style={style}>
                  <Button value="update second to first notification" onClick={updateNotification} />
                </div>
                <div style={style}>
                  <Button value="remove second notification" onClick={removeNotification} />
                </div>
              </div>
              <div>
                <p className="title">Various styles of notifications and the operation</p>
                <p className="content">Set content and type to config certain styled notification</p>
                <p className="code-show" id="code1" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode1" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Notification = uskin.Notification;<br/><br/>
                    function showNotification(noticeVar) &#123;<br/>
                      &nbsp;var notice = &#123;};<br/><br/>

                      &nbsp;for (var key in noticeVar) &#123;<br/>
                        &nbsp;&nbsp;notice[key] = noticeVar[key];<br/>
                      &nbsp;}<br/><br/>

                      &nbsp;Notification.addNotice(notice);<br/>
                    }<br/><br/>

                    function removeNotification() &#123;<br/>
                      &nbsp;Notification.removeNotice(2);<br/>
                    }<br/><br/>

                    function updateNotification() &#123;<br/>
                      &nbsp;var notice = [];<br/>
                      &nbsp;for (var key in notices[0]) &#123;<br/>
                        &nbsp;&nbsp;notice[key] = notices[0][key];<br/>
                      &nbsp;}<br/>
                      &nbsp;notice.id = 2;<br/>
                      &nbsp;Notification.updateNotice(notice);<br/>
                    }<br/><br/>

                    ReactDOM.render(<br/>
                      &nbsp;&lt;div><br/>
                        &nbsp;&nbsp;&lt;Button value="Show notification with user defined duration" onClick=&#123;showNotification.bind(this, notices[0])} /><br/>
                      &nbsp;&lt;/div><br/>
                      &nbsp;&lt;div><br/>
                        &nbsp;&nbsp;&lt;Button value="Show notification do not hide automatic" onClick=&#123;showNotification.bind(this, notices[1])} /><br/>
                      &nbsp;&lt;/div><br/><br/>
                        &nbsp;&nbsp;...<br/><br/>
                      &nbsp;&lt;div><br/>
                        &nbsp;&nbsp;&lt;Button value="update second to first notification" onClick=&#123;updateNotification} /><br/>
                      &nbsp;&lt;/div><br/>
                      &nbsp;&lt;div><br/>
                        &nbsp;&nbsp;&lt;Button value="remove second notification" onClick=&#123;removeNotification} /><br/>
                      &nbsp;&lt;/div><br/>, mountNode);
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
                  <p className="title">Parameter "addNotice"</p>
                  <p className="content">Config the text content, icon type and style type of the notification</p>
                </div>
                <div className="code">
                  <pre>
                    <code className="javascript">
                      var notices = [&#123;<br/>
                        &nbsp;title: 'Note:',<br/>
                        &nbsp;content: 'I am content',<br/>
                        &nbsp;showIcon: true,<br/>
                        &nbsp;isAutoHide: true,<br/>
                        &nbsp;duration: 5,<br/>
                        &nbsp;width: 300,<br/>
                        &nbsp;id: 1<br/>
                      }, &#123;<br/>
                        &nbsp;title: 'Note:',<br/>
                        &nbsp;content: 'I am a info notification',<br/>
                        &nbsp;type: 'info',<br/>
                        &nbsp;showIcon: true,<br/>
                        &nbsp;isAutoHide: false,<br/>
                        &nbsp;width: 300,<br/>
                        &nbsp;id: 2<br/>
                      }, &#123;<br/>
                        &nbsp;title: 'Note:',<br/>
                        &nbsp;content: 'I am a success notification',<br/>
                        &nbsp;type: 'success',<br/>
                        &nbsp;showIcon: true,<br/>
                        &nbsp;isAutoHide: true,<br/>
                        &nbsp;width: 300,<br/>
                        &nbsp;id: 3<br/>
                      }, &#123;<br/>
                        &nbsp;title: 'Note:',<br/>
                        &nbsp;content: 'I am a warning notification',<br/>
                        &nbsp;type: 'warning',<br/>
                        &nbsp;showIcon: true,<br/>
                        &nbsp;isAutoHide: true,<br/>
                        &nbsp;width: 300,<br/>
                        &nbsp;id: 4<br/>
                      }, &#123;<br/>
                        &nbsp;title: 'Note:',<br/>
                        &nbsp;content: 'A classification of architectural styles for network-based application software by the architectural properties they would induce when applied to the architecture for a distributed hypermedia system',<br/><br/>
                        &nbsp;type: 'danger',<br/>
                        &nbsp;showIcon: true,<br/>
                        &nbsp;isAutoHide: true,<br/>
                        &nbsp;width: 300,<br/>
                        &nbsp;id: 5<br/>
                      }, &#123;<br/>
                        &nbsp;title: 'Note:',<br/>
                        &nbsp;content: 'I am a notification',<br/>
                        &nbsp;icon: 'loading-notification',<br/>
                        &nbsp;showIcon: true,<br/>
                        &nbsp;isAutoHide: true,<br/>
                        &nbsp;width: 300,<br/>
                        &nbsp;id: 6<br/>
                      }, &#123;<br/>
                        &nbsp;title: 'Note:',<br/>
                        &nbsp;content: 'I am a danger notification',<br/>
                        &nbsp;type: 'danger',<br/>
                        &nbsp;showIcon: false,<br/>
                        &nbsp;isAutoHide: true,<br/>
                        &nbsp;width: 300,<br/>
                        &nbsp;id: 7<br/>
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

module.exports = IntroNotification;
