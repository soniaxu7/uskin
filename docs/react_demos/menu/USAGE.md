## Example
<a href="./menu.html" target="_blank">Menu Example</a>

## Usage
```
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

ReactDOM.render(<Menu items={items}/>, document);
```

## API
<table>
  <thead>
    <tr>
      <th style="width: 100px;">name</th>
      <th style="width: 50px;">type</th>
      <th style="width: 50px;">default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>items</td>
      <td>Array</td>
      <td></td>
      <td><a href="#items">见下方items详解</a></td>
    </tr>
  </tbody>
</table>

**items**
<table id="items">
  <thead>
    <tr>
      <th style="width: 100px;">name</th>
      <th style="width: 50px;">type</th>
      <th style="width: 50px;">default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>title</td>
      <td>String</td>
      <td></td>
      <td>每个子菜单的title</td>
    </tr>
    <tr>
      <td>key</td>
      <td>String</td>
      <td></td>
      <td>每个子菜单的key值</td>
    </tr>
    <tr>
      <td>fold</td>
      <td>Boolean</td>
      <td></td>
      <td>每个子菜单的key值</td>
    </tr>
    <tr>
      <td>submenu</td>
      <td>Array</td>
      <td></td>
      <td><a href="#items-submenu">每个子菜单的列表信息，见下方详解</a></td>
    </tr>
  </tbody>
</table>

**items: { submenu:[] }**
<table id="items-submenu">
  <thead>
    <tr>
      <th style="width: 100px;">name</th>
      <th style="width: 50px;">type</th>
      <th style="width: 50px;">default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>subtitle(必填)</td>
      <td>String</td>
      <td></td>
      <td>每个子列表的title</td>
    </tr>
    <tr>
      <td>key(必填)</td>
      <td>String</td>
      <td></td>
      <td>每个子列表的key值</td>
    </tr>
    <tr>
      <td>onClick</td>
      <td>Function</td>
      <td></td>
      <td>子列表的click事件</td>
    </tr>
    <tr>
      <td>href</td>
      <td>String</td>
      <td></td>
      <td>设置href值</td>
    </tr>
    <tr>
      <td>iconClass</td>
      <td>String</td>
      <td></td>
      <td>设置submenu的icon的class值</td>
    </tr>
    <tr>
      <td>selected</td>
      <td>Boolean</td>
      <td></td>
      <td>设置是否为selected状态</td>
    </tr>
  </tbody>
</table>