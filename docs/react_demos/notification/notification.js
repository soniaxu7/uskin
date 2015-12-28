var text = [{
    'title': "Note:",
    'content': "Life is tough, but I'm tougher"
  }, {
    'content': <div>Professor Cardenas says his recent study shows that more than 99 percent of the river's water does pass through the river's sediment which is on the shore or bottom of the river. But he says the study found that there is so much nitrogen in the river system that is simply can not filter all of it</div>
  }];
  
var Notification = uskin.Notification;
ReactDOM.render(
  <div>
    <Notification title={text[0].title} content={text[0].content} />
    <Notification title={text[0].title} content={text[0].content} type='info'/>
    <Notification title={text[0].title} content={text[0].content} type='success'/>
    <Notification title={text[0].title} content={text[0].content} type='warning'/>
    <Notification title={text[0].title} content={text[0].content} type='danger'/>
  </div>,
  document.getElementById('example')
);
ReactDOM.render(
  <Notification title={text[1].title} content={text[1].content} type='danger' width='300'/>,
  document.getElementById('example2')
);