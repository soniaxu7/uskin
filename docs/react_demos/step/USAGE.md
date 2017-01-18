## Example
<a href="./step.html" target="_blank">Step Example</a>

## Usage
```
const {Step} = uskin;

let items = [{
  name: 'step 1',
  value: '0'
}, {
  name: 'step 2',
  value: '1'
}, {
  name: 'step 3',
  value: '2',
  selected: true
}, {
  name: 'step 4',
  value: '3'
}];

ReactDOM.render(
  <Step
    items={items}
    onClick={this.stepOnClick}
    width={600} />,
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
      <td>items</td>
      <td>Array</td>
      <td></td>
      <td><a href="#items">见下方items详解</a></td>
    </tr>
    <tr>
      <td>onClick</td>
      <td>Function</td>
      <td></td>
      <td>当step点击时的Handler，返回该元素的所有信息</td>
    </tr>
    <tr>
      <td>width</td>
      <td>Number</td>
      <td></td>
      <td>设置steps的总长度</td>
    </tr>
     <tr>
      <td>disabled</td>
      <td>Boolean</td>
      <td>false</td>
      <td>设置是否让用户可点击每个step</td>
    </tr>
     <tr>
      <td>consecutive</td>
      <td>Boolean</td>
      <td>false</td>
      <td>设置是否step前n个都是被选中状态</td>
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
      <td>每个元素的显示名称</td>
    </tr>
    <tr>
      <td>default</td>
      <td>Boolean</td>
      <td></td>
      <td>设置是否是被选中状态</td>
    </tr>
  </tbody>
</table>
