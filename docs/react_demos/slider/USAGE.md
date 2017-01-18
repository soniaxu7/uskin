## Example
<a href="./slider.html" target="_blank">Slider Example</a>

## Usage
```
const { Slider } = uskin;

ReactDOM.render(
  <Slider 
    min={-100}
    max={100}
    value={78}
    step={1}
    width={240}
    onChange={this.sliderOnChange} />,
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
      <td>min(必填)</td>
      <td>Number</td>
      <td>1</td>
      <td>slider的有效最小值</td>
    </tr>
    <tr>
      <td>max(必填)</td>
      <td>Number</td>
      <td>10</td>
      <td>slider的有效最大值</td>
    </tr>
    <tr>
      <td>value(必填)</td>
      <td>Number</td>
      <td>1</td>
      <td>slider的初始值</td>
    </tr>
    <tr>
      <td>step</td>
      <td>Number</td>
      <td>1</td>
      <td>设置滑动间隔</td>
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
      <td>300</td>
      <td>设置width的总宽</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>Boolean</td>
      <td>false</td>
      <td>是否设置slider为disabled</td>
    </tr>
    <tr>
      <td>hideThumb</td>
      <td>Boolean</td>
      <td>false</td>
      <td>没有Thumb的slider样式</td>
    </tr>
  </tbody>
</table>
