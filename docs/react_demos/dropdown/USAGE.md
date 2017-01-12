## Example
<a href="./dropdown.html" target="_blank">Dropdown Example</a>

## Usage
```
var Dropdown = uskin.Dropdown;

var items = [{
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

ReactDOM.render(<Dropdown items={items}/>, document);
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
    <tr>
      <td>onClick</td>
      <td>Function</td>
      <td></td>
      <td>点击item时候触发，返回参数(e, item)</td>
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
      <td>每个子菜单的title，如果不设置不显示title</td>
    </tr>
    <tr>
      <td>key</td>
      <td>String</td>
      <td></td>
      <td>每个子菜单的key值</td>
    </tr>
    <tr>
      <td>items</td>
      <td>Array</td>
      <td></td>
      <td><a href="#items-items">每个子菜单的列表信息，见下方详解</a></td>
    </tr>
  </tbody>
</table>

**items: { items:[] }**
<table id="items-items">
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
      <td>title(必填)</td>
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
      <td>disabled</td>
      <td>Boolean</td>
      <td>false</td>
      <td>是否设置为disabled状态</td>
    </tr>
    <tr>
      <td>danger</td>
      <td>Boolean</td>
      <td>false</td>
      <td>是否设置为danger状态</td>
    </tr>
    <tr>
      <td>children</td>
      <td>Array</td>
      <td></td>
      <td><a href="#items-items-children">每个子菜单的子菜单列表信息，见下方详解</a></td>
    </tr>
  </tbody>
</table>

**items: { items:[ children: [] ] }**
<table id="items-items">
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
      <td>title(必填)</td>
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
      <td>disabled</td>
      <td>Boolean</td>
      <td>false</td>
      <td>是否设置为disabled状态</td>
    </tr>
    <tr>
      <td>danger</td>
      <td>Boolean</td>
      <td>false</td>
      <td>是否设置为danger状态</td>
    </tr>
    <tr>
      <td>items</td>
      <td>Array</td>
      <td></td>
      <td><a href="#items-items">每个children的items列表信息，见items详解</a></td>
    </tr>
  </tbody>
</table>