const {Tooltip} = uskin;

let content = 'I am a tooltip';

ReactDOM.render(
  <div>
    <Tooltip content={content} width={200} />
    <Tooltip content={content} shape="top" type="error" />
    <Tooltip content={content} shape="top-left" hide={true} />
    <Tooltip content={content} shape="top-right" />
    <Tooltip content={content} shape="right" />
    <Tooltip content={content} shape="right-top" type="error" />
    <Tooltip content={content} shape="right-bottom" />
    <Tooltip content={content} shape="bottom" />
    <Tooltip content={content} shape="bottom-left" />
    <Tooltip content={content} shape="bottom-right" />
    <Tooltip content={content} shape="left" />
    <Tooltip content={content} shape="left-top" />
    <Tooltip content={content} shape="left-bottom" />
  </div>,
  document.getElementById('example')
);
