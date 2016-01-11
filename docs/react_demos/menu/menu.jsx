var Menu = uskin.Menu;

function listener(e, status) {
  console.debug('click triggered!', e, status);
}

var items = [{
  title: 'Fruits',
  key: 'fruits',
  submenu: [{
    subtitle: 'Apple',
    key: '1',
    onClick: listener,
    iconClass: 'glyphicon icon-overview',
    selected: true
  }, {
    subtitle: 'Strawberry',
    key: '2',
    onClick: listener,
    iconClass: 'glyphicon icon-overview'
  }, {
    subtitle: 'Lemon',
    key: '3',
    onClick: listener,
    iconClass: 'glyphicon icon-overview'
  }]
}, {
  title: 'Vegetables',
  key: 'vegetables',
  submenu: [{
    subtitle: 'Potato',
    key: '1',
    onClick: listener,
    iconClass: 'glyphicon icon-overview'
  }, {
    subtitle: 'Eggplant',
    key: '2',
    onClick: listener,
    iconClass: 'glyphicon icon-overview'
  }, {
    subtitle: 'Carrot',
    key: '3',
    onClick: listener,
    iconClass: 'glyphicon icon-overview'
  }]
}, {
  title: 'Dessert',
  key: 'dessert',
  submenu: [{
    subtitle: 'Tiramisu',
    key: '1',
    onClick: listener,
    iconClass: 'glyphicon icon-overview'
  }, {
    subtitle: 'Macaron',
    key: '2',
    onClick: listener,
    iconClass: 'glyphicon icon-overview'
  }]
}];

ReactDOM.render(
  <Menu items={items}/>,
  document.getElementById('example')
);
