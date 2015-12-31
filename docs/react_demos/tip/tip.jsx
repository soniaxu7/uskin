var Tip = uskin.Tip;
var text = {
  'title': 'Note:',
  'content': 'I am content',
  'info': 'I am a info tip',
  'success': 'I am a success tip',
  'warning': 'I am a warning tip',
  'danger': 'I am a danger tip',
  'para': 'I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph'
};

ReactDOM.render(
  <Tip title={text.title} content={text.content} isAutoHide={true} />,
  document.getElementById('example')
);

ReactDOM.render(
  <Tip content={text.info} type='info' />,
  document.getElementById('example2')
);

ReactDOM.render(
  <Tip title={text.title} content={text.success} type='success' />,
  document.getElementById('example3')
);

ReactDOM.render(
  <Tip title={text.title} content={text.warning} type='warning' />,
  document.getElementById('example4')
);

ReactDOM.render(
  <Tip title={text.title} content={text.danger} type='danger' />,
  document.getElementById('example5')
);

ReactDOM.render(
  <Tip title={text.title} content={text.para} type='danger' width='300' />,
  document.getElementById('example6')
);

ReactDOM.render(
  <Tip content={text.content} showIcon={true} enableClose={true} />,
  document.getElementById('example7')
);

ReactDOM.render(
  <Tip content={text.info} showIcon={true} enableClose={true} type='info' />,
  document.getElementById('example8')
);

ReactDOM.render(
  <Tip content={text.success} showIcon={true} enableClose={true} type='success' />,
  document.getElementById('example9')
);

ReactDOM.render(
  <Tip content={text.warning} showIcon={true} enableClose={true} type='warning' />,
  document.getElementById('example10')
);

ReactDOM.render(
  <Tip content={text.danger} showIcon={true} enableClose={true} type='danger' />,
  document.getElementById('example11')
);

ReactDOM.render(
  <Tip content={text.para} showIcon={true} enableClose={true} type='danger' width='300' />,
  document.getElementById('example12')
);