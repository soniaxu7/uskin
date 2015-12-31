var Dropdown = uskin.Dropdown;

function listener(e, status) {
  console.debug('click triggered!', e, status);
}

//key value should be exclusive
var items1 = [{
  items: [{
    title: 'Reboot',
    key: '0',
    onClick: listener
  }, {
    title: 'Take Image Snapshot',
    key: '1',
    onClick: listener
  }]
}, {
  items: [{
    title: 'Associate Public IP',
    key: '2',
    onClick: listener
  }, {
    title: 'Dissociate Public IP',
    key: '3',
    onClick: listener
  }, {
    title: 'Join Networks',
    key: '4',
    onClick: listener
  }]
}, {
  items: [{
    title: 'Change Security Group',
    key: '5',
    onClick: listener
  }, {
    title: 'Change Passoword',
    key: '6',
    onClick: listener
  }, {
    title: 'Change Keypair',
    key: '7',
    onClick: listener
  }]
}, {
  items: [{
    title: 'Add Volume',
    key: '8',
    onClick: listener
  }, {
    title: 'Remove Volume',
    key: '9',
    disabled: true,
    onClick: listener
  }]
}, {
  items: [{
    title: 'Termitate',
    key: '10',
    danger: true,
    onClick: listener
  }]
}];

var items2 = [{
  title: 'Basic Ops',
  key: 'basic',
  items: [{
    title: 'Reboot',
    key: '0',
    onClick: listener
  }, {
    title: 'Take Image Snapshot',
    key: '1',
    onClick: listener
  }]
}, {
  title: 'Network Ops',
  key: 'network',
  items: [{
    title: 'Associate Public IP',
    key: '2',
    onClick: listener
  }, {
    title: 'Dissociate Public IP',
    key: '3',
    onClick: listener
  }, {
    title: 'Join Networks',
    key: '4',
    onClick: listener
  }]
}, {
  items: [{
    title: 'Change Security Group',
    key: '5',
    onClick: listener
  }, {
    title: 'Change Passoword',
    key: '6',
    onClick: listener
  }, {
    title: 'Change Keypair',
    key: '7',
    onClick: listener
  }]
}, {
  title: 'Volume Ops',
  key: 'volume',
  items: [{
    title: 'Add Volume',
    key: '8',
    onClick: listener
  }, {
    title: 'Remove Volume',
    key: '9',
    disabled: true,
    onClick: listener
  }]
}, {
  title: 'Dangerous Ops',
  key: 'dangerous',
  items: [{
    title: 'Termitate',
    key: '10',
    danger: true,
    onClick: listener
  }]
}];

ReactDOM.render(
  <Dropdown items={items1}/>,
  document.getElementById('example')
);

ReactDOM.render(
  <Dropdown items={items2}/>,
  document.getElementById('example2')
);
