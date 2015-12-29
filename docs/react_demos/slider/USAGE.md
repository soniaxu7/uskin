## Example
<a href="./slider.html" target="_blank">Slider Example</a>

## Usage
```
var Slider = uskin.Slider;
ReactDOM.render(
  <Slider 
    min={-100}
    max={100}
    value={78}
    step={1}
    width={400}
    onChange={this.sliderOnChange}
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
      <td>min(必填)</td>
      <td>Number</td>
      <td></td>
      <td>slider的有效最小值</td>
    </tr>
    <tr>
      <td>max(必填)</td>
      <td>Number</td>
      <td></td>
      <td>slider的有效最小值</td>
    </tr>
    <tr>
      <td>value(必填)</td>
      <td>Number</td>
      <td></td>
      <td>滑动条所在的的初始值</td>
    </tr>
    <tr>
      <td>step</td>
      <td>Number</td>
      <td>1</td>
      <td>设置滑动合法间隔</td>
    </tr>
    <tr>
      <td>onChange</td>
      <td>Function</td>
      <td></td>
      <td>滑动条滑动时返回当前值</td>
    </tr>
    <tr>
      <td>width</td>
      <td>Number</td>
      <td></td>
      <td>设置width的总宽</td>
    </tr>
  </tbody>
</table>
