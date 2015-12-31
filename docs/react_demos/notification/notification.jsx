var Notification = uskin.Notification;
var text = {
  'title': 'Note:',
  'content': 'I am content',
  'info': 'I am a info notification',
  'success': 'I am a success notification',
  'warning': 'I am a warning notification',
  'danger': 'I am a danger notification',
  'para': 'I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph'
};

ReactDOM.render(
  <Notification title={text.title} content={text.content} showIcon={true} />,
  document.getElementById('example')
);

ReactDOM.render(
  <Notification title={text.title} content={text.info} showIcon={true} type='info' />,
  document.getElementById('example2')
);

ReactDOM.render(
  <Notification title={text.title} content={text.success} showIcon={true} type='success' />,
  document.getElementById('example3')
);

ReactDOM.render(
  <Notification title={text.title} content={text.warning} showIcon={true} type='warning' />,
  document.getElementById('example4')
);

ReactDOM.render(
  <Notification title={text.title} content={text.danger} showIcon={true} type='danger' />,
  document.getElementById('example5')
);

ReactDOM.render(
  <Notification title={text.title} content={text.para} showIcon={true} type='danger'  />,
  document.getElementById('example6')
);

ReactDOM.render(
  <Notification content={text.content} isAutoHide={true} />,
  document.getElementById('example7')
);

ReactDOM.render(
  <Notification content={text.info} isAutoHide={true} type='info' />,
  document.getElementById('example8')
);

ReactDOM.render(
  <Notification content={text.success} isAutoHide={true} type='success' />,
  document.getElementById('example9')
);

ReactDOM.render(
  <Notification content={text.warning} isAutoHide={true} type='warning' />,
  document.getElementById('example10')
);

ReactDOM.render(
  <Notification content={text.danger} isAutoHide={true} type='danger' />,
  document.getElementById('example11')
);

ReactDOM.render(
  <Notification content={text.para} isAutoHide={true} type='danger' />,
  document.getElementById('example12')
);
