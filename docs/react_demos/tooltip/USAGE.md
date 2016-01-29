## Example
<a href="./tooltip.html" target="_blank">Tooltip Example</a>

## Usage
```
var Tooltip = uskin.Tooltip;

var content = 'I am a tooltip';

ReactDOM.render(
  <Tooltip
    content={content}
    type="top"
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
      <td>content</td>
      <td>String</td>
      <td></td>
      <td>tooltip的content</td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td></td>
      <td>tooltip的类型，包括默认值，top, top-left, top-right, right, right-top, right-bottom, bottom, bottom-left, bottom-right, left, left-top, left-bottom</td>
    </tr>
    <tr>
      <td>width</td>
      <td>Number</td>
      <td></td>
      <td>tooltip的宽度</td>
    </tr>
  </tbody>
</table>
