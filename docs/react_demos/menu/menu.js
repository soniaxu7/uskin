var Menu = uskin.Menu;

var items = [{
  title: 'Fruits',
  key: 'fruits',
  submenu: [{
    subtitle: 'Apple',
    key: '1',
    onClick: listener,
    href: '#apple',
    iconClass: 'glyphicon icon-overview',
    selected: true
  }, {
    subtitle: 'Strawberry',
    key: '2',
    onClick: listener,
    href: '#strawberry',
    iconClass: 'glyphicon icon-overview'
  }, {
    subtitle: 'Lemon',
    key: '3',
    onClick: listener,
    href: '#lemon',
    iconClass: 'glyphicon icon-overview'
  }]
}, {
  title: 'Vegetables',
  key: 'vegetables',
  fold: true,
  submenu: [{
    subtitle: 'Potato',
    key: '1',
    onClick: listener,
    href: '#potato',
    iconClass: 'glyphicon icon-overview'
  }, {
    subtitle: 'Eggplant',
    key: '2',
    onClick: listener,
    href: '#eggplant',
    iconClass: 'glyphicon icon-overview'
  }, {
    subtitle: 'Carrot',
    key: '3',
    onClick: listener,
    href: '#carrot',
    iconClass: 'glyphicon icon-overview'
  }]
}, {
  title: 'Dessert',
  key: 'dessert',
  submenu: [{
    subtitle: 'Tiramisu',
    key: '1',
    onClick: listener,
    href: '#tiramisu',
    iconClass: 'glyphicon icon-overview'
  }, {
    subtitle: 'Macaron',
    key: '2',
    onClick: listener,
    href: '#macaron',
    iconClass: 'glyphicon icon-overview'
  }]
}];

function listener(e, status) {
  console.debug('click triggered!', e, status);
}

ReactDOM.render(
  <Menu items={items}/>,
  document.getElementById('example')
);
