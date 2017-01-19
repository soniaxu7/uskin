## Example
<a href="./tip.html" target="_blank">Tip Example</a>

## Usage
```
const {Tip} = uskin;

let title = 'Note:';
let content = 'Life is tough, but I'm tougher';

ReactDOM.render(
  <Tip
    title={title}
    content={content}
    type="info"
    width={200} />,
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
      <td>title</td>
      <td>String</td>
      <td></td>
      <td>tip的title，不设置则没有title</td>
    </tr>
    <tr>
      <td>content</td>
      <td>String</td>
      <td></td>
      <td>tip的content</td>
    </tr>
    <tr>
      <td>width</td>
      <td>Number</td>
      <td></td>
      <td>tip的宽度</td>
    </tr>   
    <tr>
      <td>type</td>
      <td>String</td>
      <td></td>
      <td>tip的类型，包括默认值，info,success,warning,danger</td>
    </tr>
    <tr>
      <td>showIcon</td>
      <td>Boolean</td>
      <td>false</td>
      <td>是否显示title前面的icon，根据不用的type有不同的icon</td>
    </tr> 
    <tr>
      <td>icon</td>
      <td>String</td>
      <td></td>
      <td>自定义icon</td>
    </tr> 
    <tr>
      <td>enableClose</td>
      <td>Boolean</td>
      <td>false</td>
      <td>是否显示关闭按钮</td>
    </tr> 
    <tr>
      <td>isAutoHide</td>
      <td>Boolean</td>
      <td>false</td>
      <td>是否3秒后自动关闭</td>
    </tr> 
  </tbody>
</table>
