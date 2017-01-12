const { Dropdown } = uskin;

function listener(e, item) {
  console.debug('click triggered!', e, item);
}

let items1 = [{
  title: 'Basic Ops',
  key: 'basic',
  items: [{
    title: 'Reboot',
    key: '0'
  }, {
    title: 'Take Image Snapshot',
    key: '1'
  }]
}, {
  title: 'Network Ops',
  key: 'network',
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
  title: 'Volume Ops',
  key: 'volume',
  items: [{
    title: 'Add Volume',
    key: '8'
  }, {
    title: 'Remove Volume',
    key: '9',
    disabled: true
  }]
}, {
  title: 'Dangerous Ops',
  key: 'dangerous',
  items: [{
    title: 'Termitate',
    key: '10',
    danger: true
  }]
}];

var items2 = [{
  items: [{
    title: 'Reboot',
    key: '0',
    children: [{
      items: [{
        title: 'Confirm',
        key: 'confirm'
      }, {
        title: 'Cancel',
        key: 'canel'
      }]
    }]
  }, {
    title: 'Take Image Snapshot',
    key: '1'
  }]
}, {
  items: [{
    title: 'Associate Public IP',
    key: '2',
    children: [{
      title: 'First',
      items: [{
        title: 'Associate - 1',
        key: 'ip-1',
        children: [{
          items: [{
            title: 'Sub Channel - 1',
            key: 'sub-1'
          }, {
            title: 'Sub Channel - 2',
            key: 'sub-2'
          }, {
            title: 'Sub Channel - 3',
            key: 'sub-3'
          }]
        }]
      }, {
        title: 'Associate - 2',
        key: '1'
      }]
    }, {
      title: 'Second',
      items: [{
        title: 'Public IP - 1',
        key: 'ip-1'
      }, {
        title: 'Public IP - 2',
        key: '1'
      }]
    }]
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
      <Dropdown items={items1} onClick={listener} />
    </div>
    <div className="box box2">
      <Dropdown items={items2} onClick={listener} />
    </div>
  </div>,
  document.getElementById('example')
);
