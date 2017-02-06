## Example
<a href="./menu.html" target="_blank">Modal Example</a>

## Usage
```js
const {Modal} = uskin;

ReactDOM.render(, document);
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
      <td>title</td>
      <td>String</td>
      <td></td>
      <td>Modal的title</td>
    </tr>
    <tr>
      <td>parent</td>
      <td>Modal类</td>
      <td></td>
      <td>父级Modal，当父级Modal打开时，子级Modal会hide</td>
    </tr>
    <tr>
      <td>width</td>
      <td>Number</td>
      <td></td>
      <td>Modal的宽度</td>
    </tr>
    <tr>
      <td>visible</td>
      <td>Boolean</td>
      <td>true</td>
      <td>Modal的宽度</td>
    </tr>
  </tbody>
</table>

## Modal.info, Modal.warning, Modal.danger, Modal.success 简易弹窗样式（包含以上api）
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
      <td>title</td>
      <td>String</td>
      <td></td>
      <td>Modal的title</td>
    </tr>
    <tr>
      <td>content</td>
      <td>String</td>
      <td></td>
      <td>Modal的内容区域</td>
    </tr>
    <tr>
      <td>okText</td>
      <td>String</td>
      <td></td>
      <td>确认按钮的文字</td>
    </tr>
  </tbody>
</table>
