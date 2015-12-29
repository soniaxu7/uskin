## Example
<a href="./tip.html" target="_blank">Tip Example</a>

## Usage
```
var Tip = uskin.Tip;

var title = 'Note:',
    content = 'Life is tough, but I'm tougher';

ReactDOM.render(
  <Tip
    title={title}
    content={content}
    type="info"
    width={200}
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
      <td>type</td>
      <td>String</td>
      <td></td>
      <td>tip的类型，包括默认值，info,success,warning,danger</td>
    </tr>
    <tr>
      <td>width</td>
      <td>Number</td>
      <td></td>
      <td>tip的宽度</td>
    </tr>
  </tbody>
</table>
