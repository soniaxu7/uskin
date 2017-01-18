## Example
<a href="./tab.html" target="_blank">Tab Example</a>

## Usage
```
const {Tab} = uskin;

let items1 = [{
  name: 'Overview',
  key: '0'
}, {
  name: 'Account Recharge',
  key: '1',
  default: true
}, {
  name: 'Recharge Record',
  key: '2',
  disabled: true
}];

ReactDOM.render(<Tab items={items} size="small"/>, document);
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
      <td>非disabled的tab被点击时候的事件，返回参数(e, item)</td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td></td>
      <td>type="sm"为small样式，否则为默认样式</td>
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
      <td>name</td>
      <td>String</td>
      <td></td>
      <td>每个tab的显示名称</td>
    </tr>
    <tr>
      <td>key</td>
      <td>String</td>
      <td></td>
      <td>每个tab的唯一key值</td>
    </tr>
    <tr>
      <td>default</td>
      <td>Boolean</td>
      <td></td>
      <td>是否为初始选中状态</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>Boolean</td>
      <td></td>
      <td>是否设置为disabled</td>
    </tr>
  </tbody>
</table>
