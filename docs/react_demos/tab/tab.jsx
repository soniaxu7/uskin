var Tab = uskin.Tab;

function listener(e, status) {
  console.debug('click triggered!', e, status);
  ReactDOM.render(
    <div>The Tab is {status.name}</div>,
    document.getElementById('example2')
  );
}

var items1 = [{ name: 'Overview', value: '0', onClick: listener },
  { name: 'Account Recharge', value: '1', onClick: listener, default: true },
  { name: 'Recharge Record', value: '2', onClick: listener }],
  items2 = [{ name: 'Overview', value: '0', href: '#', onClick: listener, default: true },
  { name: 'Account Recharge', value: '0', href: '#', onClick: listener },
  { name: 'Disabled Tab', value: '0', href: '#', onClick: listener, disabled: true }],
  items3 = [{ name: 'Overview', value: '0', href: '#overview', onClick: listener, default: true },
  { name: 'Account Recharge', value: '1', href: '#accout', onClick: listener },
  { name: 'Disabled Tab', value: '2', href: '#', onClick: listener, disabled: true }];

ReactDOM.render(
  <div>
    <Tab items={items1}/>
    <Tab items={items2}/>
    <Tab items={items1} size="small"/>
    <Tab items={items3} size="small"/>
  </div>,
  document.getElementById('example')
);
