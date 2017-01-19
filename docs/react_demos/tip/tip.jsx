const {Tip} = uskin;

let text = {
  title: 'Note:',
  content: 'I am content',
  info: 'I am a info tip',
  success: 'I am a success tip',
  warning: 'I am a warning tip',
  danger: 'I am a danger tip',
  para: 'A classification of architectural styles for network-based application software by the architectural properties they would induce when applied to the architecture for a distributed hypermedia system'
};


ReactDOM.render(
  <div>
    <Tip title={text.title} content={text.content} isAutoHide={true} />
    <Tip content={text.info} type="info" />
    <Tip title={text.title} content={text.success} type="success" />
    <Tip title={text.title} content={text.warning} type="warning" />
    <Tip title={text.title} content={text.danger} type="danger" />
    <Tip title={text.title} content={text.para} type="danger" width="400" />
    <Tip content={text.content} icon="loading" enableClose={true} />
    <Tip content={text.info} icon="loading" enableClose={true} type="info" />
    <Tip content={text.success} showIcon={true} enableClose={true} type="success" />
    <Tip content={text.warning} showIcon={true} enableClose={true} type="warning" />
    <Tip content={text.danger} showIcon={true} enableClose={true} type="danger" />
    <Tip content={text.para} showIcon={true} enableClose={true} type="danger" width={500} />
  </div>,
  document.getElementById('example')
);
