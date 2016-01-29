var Tooltip = uskin.Tooltip;
var content = 'I am a tooltip';

ReactDOM.render(
  <Tooltip content={content} width="400" />,
  document.getElementById('example')
);

ReactDOM.render(
  <Tooltip content={content} type="top" />,
  document.getElementById('example2')
);

ReactDOM.render(
  <Tooltip content={content} type="top-left" />,
  document.getElementById('example3')
);

ReactDOM.render(
  <Tooltip content={content} type="top-right" />,
  document.getElementById('example4')
);

ReactDOM.render(
  <Tooltip content={content} type="right" />,
  document.getElementById('example5')
);

ReactDOM.render(
  <Tooltip content={content} type="right-top" />,
  document.getElementById('example6')
);

ReactDOM.render(
  <Tooltip content={content} type="right-bottom" />,
  document.getElementById('example7')
);

ReactDOM.render(
  <Tooltip content={content} type="bottom" />,
  document.getElementById('example8')
);

ReactDOM.render(
  <Tooltip content={content} type="bottom-left" />,
  document.getElementById('example9')
);

ReactDOM.render(
  <Tooltip content={content} type="bottom-right" />,
  document.getElementById('example10')
);

ReactDOM.render(
  <Tooltip content={content} type="left" />,
  document.getElementById('example11')
);

ReactDOM.render(
  <Tooltip content={content} type="left-top" />,
  document.getElementById('example12')
);

ReactDOM.render(
  <Tooltip content={content} type="left-bottom" />,
  document.getElementById('example13')
);
