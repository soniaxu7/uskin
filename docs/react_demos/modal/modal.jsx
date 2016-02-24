var Modal = uskin.Modal,
  Button = uskin.Button;

var mountNode = document.getElementById('example');

ReactDOM.render(
  <div>
    <Button value="Info Caller" btnKey="info" onClick={listener.bind(this, 'info')}/>
    <Button value="Success Caller" btnKey="success" onClick={listener.bind(this, 'success')}/>
    <Button value="Warning Caller" btnKey="warning" onClick={listener.bind(this, 'warning')}/>
    <Button value="Danger Caller" btnKey="danger" onClick={listener.bind(this, 'danger')}/>
    <Button value="Custom Caller" btnKey="danger" onClick={listener.bind(this, 'custom')}/>
  </div>,
  mountNode
);

var d = null;

function listener(v) {
  if (v === 'custom') {
    let props = {
      title: '定制的弹出框标题',
      okText: '确认',
      okCancel: '删除',
    };
    d = Modal.custom(props);
    console.log(d)

  } else {
    let props = {
      title: v.toUpperCase(),
      content: 'this is my modal',
      okText: 'OK'
    };

    Modal[v](props);
  }

}
