const {Tab} = uskin;

function listener(e, status) {
  console.debug('click triggered!', e, status);

  document.getElementById('name').innerHTML = status.name;
}

let items1 = [{
  name: 'Overview',
  key: '0'
}, {
  name: 'Account Recharge',
  key: '1',
  default: true
}, {
  name: 'Recharge Record',
  key: '2',
  disabled: true
}];
let items2 = [{
  name: 'Overview',
  key: '0',
  default: true
}];
let items3 = [{
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
    <div className="name-box">
      <span>The Tab is </span>
      <span id="name">{status.name}</span>
    </div>
  </div>,
  document.getElementById('example')
);
