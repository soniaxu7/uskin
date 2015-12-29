## Example
<a href="./button.html" target="_blank">Button Example</a>

## Usage
```
var Button = uskin.Button;
ReactDOM.render(
  <Button
    value="Create"
    onClick={this.buttonOnClick}
    type="create"
    size="sm"
  />, document);
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
      <td>value</td>
      <td>String</td>
      <td></td>
      <td>Button的文字</td>
    </tr>
    <tr>
      <td>onClick</td>
      <td>Function</td>
      <td></td>
      <td>click事件的handler</td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td></td>
      <td>Button的类型，包括默认，create,delete,cancel类型</td>
    </tr>
    <tr>
      <td>size</td>
      <td>String</td>
      <td></td>
      <td>Button的大小，包括默认，xl,lg,sm,xs</td>
    </tr>
    <tr>
      <td>initial</td>
      <td>Boolean</td>
      <td>false</td>
      <td>Button的宽度适应于文字长度</td>
    </tr>
    <tr>
      <td>selected</td>
      <td>Boolean</td>
      <td>false</td>
      <td>Button是否要selected状态</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>Boolean</td>
      <td>false</td>
      <td>Button是否要disabled状态</td>
    </tr>
    <tr>
      <td>tag</td>
      <td>String</td>
      <td></td>
      <td>默认值为Button最后以button标签形式生成，当tag="div"时由div标签生成</td>
    </tr>
  </tbody>
</table>
