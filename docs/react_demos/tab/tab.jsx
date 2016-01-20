var Tab = uskin.Tab;

function listener(e, status) {
  console.debug('click triggered!', e, status);
  ReactDOM.render(
    <div>The Tab is {status.name}</div>,
    document.getElementById('example2')
  );
}

var items1 = [{
  name: 'Overview',
  key: '0'
}, {
  name: 'Account Recharge',
  key: '1',
  default: true
}, {
  name: 'Recharge Record',
  key: '2'
}];

var items2 = [{
  name: 'Overview',
  key: '0',
  default: true
}, {
  name: 'Account Recharge',
  key: '0'
}, {
  name: 'Disabled Tab',
  key: '0',
  disabled: true
}];

var items3 = [{
  name: 'Overview',
  key: '0',
  default: true
}, {
  name: 'Account Recharge',
  key: '1'
}, {
  name: 'Disabled Tab',
  key: '2',
  disabled: true
}];

ReactDOM.render(
  <div>
    <Tab items={items1} onClick={listener} />
    <Tab items={items2} onClick={listener} />
    <Tab items={items1} type="sm" onClick={listener} />
    <Tab items={items3} type="sm" onClick={listener} />
  </div>,
  document.getElementById('example')
);
