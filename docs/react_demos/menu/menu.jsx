var Menu = uskin.Menu,
  Button = uskin.Button;

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
  fold: true,
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

var items2 = Object.assign([], items);
items2.unshift({
  key:'overview',
  submenu: [{
    subtitle: 'Overview',
    key: 'overview',
    onClick: listener,
    iconClass: 'glyphicon icon-overview',
    selected: true
  }]
});

function updateData() {
  var newItems = [];
  for (let i = 0; i < items.length; i++) {
    newItems[i] = Object.assign({}, items[i]);
  }
  newItems[0].submenu[0].selected = false;
  newItems[1].submenu[1].selected = true;

  ReactDOM.render(
    <div style={{height: '100%'}}>
      <Menu items={newItems}/>
    </div>,
    document.getElementById('example')
  );
}

ReactDOM.render(
  <div style={{height: '100%'}}>
    <div style={{height: '100%', float: 'left'}}>
      <Menu items={items}/>
      <div style={{margin: '40px'}}>
        <Button value="更新数据" onClick={updateData}/>
      </div>
    </div>
    <div style={{height: '100%', float: 'left'}}>
      <Menu items={items2} toggle={true}/>
    </div>
  </div>,
  document.getElementById('example')
);
