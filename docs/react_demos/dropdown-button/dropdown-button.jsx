const { DropdownButton } = uskin;

function listener(e, item) {
  console.debug('click triggered!', e, item);
}

let btn = {
  value: 'Dropdown Button',
  iconClass: 'more'
};

let dropdownItems = [{
  items: [{
    title: 'Reboot',
    key: '0'
  }, {
    title: 'Take Image Snapshot',
    key: '1'
  }]
}, {
  items: [{
    title: 'Associate Public IP',
    key: '2'
  }, {
    title: 'Dissociate Public IP',
    key: '3'
  }, {
    title: 'Join Networks',
    key: '4'
  }]
}, {
  items: [{
    title: 'Change Security Group',
    key: '5'
  }, {
    title: 'Change Passoword',
    key: '6'
  }, {
    title: 'Change Keypair',
    key: '7'
  }]
}, {
  items: [{
    title: 'Add Volume',
    key: '8'
  }, {
    title: 'Remove Volume',
    key: '9',
    disabled: true
  }]
}, {
  items: [{
    title: 'Termitate',
    key: '10',
    danger: true
  }]
}];

ReactDOM.render(
  <div>
    <div className="box">
      <DropdownButton
        buttonData={btn}
        dropdownItems={dropdownItems}
        dropdownOnClick={listener}
        dropdownStyle={{ width: 164 }}
      />
    </div>
    <div className="box">
      <DropdownButton
        disabled={true}
        buttonData={btn}
        dropdownItems={dropdownItems}
        dropdownOnClick={listener}
      />
    </div>
  </div>,
  document.getElementById('example')
);
