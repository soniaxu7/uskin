var Modal = uskin.Modal,
  Button = uskin.Button;

var mountNode = document.getElementById('example');

function listener(v) {
  let props = {
    title: v.toUpperCase(),
    content: 'this is my modal2',
    okText: 'OK'
  };
  Modal[v](props);
}

ReactDOM.render(
  <div>
    <Button value="Info Caller" btnKey="info" onClick={listener.bind(this, 'info')}/>
    <Button value="Success Caller" btnKey="success" onClick={listener.bind(this, 'success')}/>
    <Button value="Warning Caller" btnKey="warning" onClick={listener.bind(this, 'warning')}/>
    <Button value="Danger Caller" btnKey="danger" onClick={listener.bind(this, 'danger')}/>
  </div>,
  mountNode
);
