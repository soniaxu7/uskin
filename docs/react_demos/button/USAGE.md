## Example
<a href="./button.html" target="_blank">Button Example</a>

## Usage
```
const { Button } = uskin;

ReactDOM.render(
  <Button
    value="Create"
    onClick={listener}
    type="create"
    size="sm"
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
      <td>onClick</td>
      <td>Function</td>
      <td></td>
      <td>click事件的handler</td>
    </tr>
    <tr>
      <td>value</td>
      <td>String</td>
      <td></td>
      <td>Button的文字</td>
    </tr>
    <tr>
      <td>btnKey</td>
      <td>String</td>
      <td></td>
      <td>Button的key值</td>
    </tr>
    <tr>
      <td>iconClass</td>
      <td>String</td>
      <td></td>
      <td>Button的icon类名</td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td></td>
      <td>Button的类型，包括默认，create, delete, warning, cancel, status类型</td>
    </tr>
    <tr>
      <td>size</td>
      <td>String</td>
      <td></td>
      <td>Button的大小，包括默认，xl,lg,sm,xs类型</td>
    </tr>
    <tr>
      <td>tag</td>
      <td>String</td>
      <td></td>
      <td>默认生成tag为Button，当tag="div"时生成div标签</td>
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
  </tbody>
</table>
