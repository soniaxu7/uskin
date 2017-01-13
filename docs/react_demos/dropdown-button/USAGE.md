## Example
<a href="./dropdown-button.html" target="_blank">Dropdown Button Example</a>

## Usage
```
const { Dropdown } = uskin;

let btn = {
  value: 'Dropdown Button',
  iconClass: 'more'
};
let items = [{
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
  <DropdownButton
    buttonData={btn}
    dropdownItems={dropdownItems}
    dropdownOnClick={listener}
    dropdownStyle={{ width: 164 }}
  />,
  document
);
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
      <td>dropdownOnClick</td>
      <td>Function</td>
      <td></td>
      <td>点击item时候触发，返回参数(e, item)</td>
    </tr>
    <tr>
      <td>buttonData</td>
      <td>Object</td>
      <td></td>
      <td>参数有{ value: string, iconClass: string }</td>
    </tr>
    <tr>
      <td>dropdownItems</td>
      <td>Object</td>
      <td></td>
      <td>与Dropdown的items接口参数一直</td>
    </tr>
    <tr>
      <td>dropdownStyle</td>
      <td>Object</td>
      <td></td>
      <td>Dropdown的样式</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>false</td>
      <td></td>
      <td>是否禁止dropdown的按钮</td>
    </tr>
  </tbody>
</table>

