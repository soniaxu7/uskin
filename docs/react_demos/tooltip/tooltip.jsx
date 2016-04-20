var Tooltip = uskin.Tooltip;
var content = 'I am a tooltip';

ReactDOM.render(
  <Tooltip content={content} width="400" />,
  document.getElementById('example')
);

ReactDOM.render(
  <Tooltip content={content} shape="top" type="error" />,
  document.getElementById('example2')
);

ReactDOM.render(
  <Tooltip content={content} shape="top-left" />,
  document.getElementById('example3')
);

ReactDOM.render(
  <Tooltip content={content} shape="top-right" />,
  document.getElementById('example4')
);

ReactDOM.render(
  <Tooltip content={content} shape="right" />,
  document.getElementById('example5')
);

ReactDOM.render(
  <Tooltip content={content} shape="right-top" type="error" />,
  document.getElementById('example6')
);

ReactDOM.render(
  <Tooltip content={content} shape="right-bottom" />,
  document.getElementById('example7')
);

ReactDOM.render(
  <Tooltip content={content} shape="bottom" />,
  document.getElementById('example8')
);

ReactDOM.render(
  <Tooltip content={content} shape="bottom-left" />,
  document.getElementById('example9')
);

ReactDOM.render(
  <Tooltip content={content} shape="bottom-right" />,
  document.getElementById('example10')
);

ReactDOM.render(
  <Tooltip content={content} shape="left" />,
  document.getElementById('example11')
);

ReactDOM.render(
  <Tooltip content={content} shape="left-top" />,
  document.getElementById('example12')
);

ReactDOM.render(
  <Tooltip content={content} shape="left-bottom" />,
  document.getElementById('example13')
);
