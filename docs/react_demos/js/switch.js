var Switch = uskin.Switch;
ReactDOM.render(
  <Switch onChange={listener} labelOn="ON" labelOff="OFF" disabled={false} />,
  document.getElementById('example')
);

ReactDOM.render(
  <Switch onChange={listener} disabled={false} width={45} checked={true} />,
  document.getElementById('example2')
);

ReactDOM.render(
  <Switch onChange={listener} disabled={true} width={50} labelOn="开" labelOff="关" />,
  document.getElementById('example3')
);

function listener(e, status) {
  console.debug('click triggered!', e, status);
}
