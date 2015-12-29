## Example
<a href="./tab.html" target="_blank">Tab Example</a>

## Usage
```
var Tab = uskin.Tab;

var items = [{ name: 'Overview', value: '0', href: '#overview', onClick: listener, default: true },
  { name: 'Account Recharge', value: '1', href: '#accout', onClick: listener },
  { name: 'Disabled Tab', value: '2', href: '#', onClick: listener, disabled: true }];

ReactDOM.render(
  <Tab items={items} size="small"/>, document);
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
      <td>size</td>
      <td>String</td>
      <td></td>
      <td>设置size="small"为small样式，否则为默认样式</td>
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
      <td>value</td>
      <td>String</td>
      <td></td>
      <td>每个tab的唯一key值</td>
    </tr>
    <tr>
      <td>href</td>
      <td>String</td>
      <td></td>
      <td>tab的href值</td>
    </tr>
    <tr>
      <td>onClick</td>
      <td>Function</td>
      <td></td>
      <td>click时的handler</td>
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
