## Example
<a href="./input-number.html" target="_blank">Input Number Example</a>

## Usage
```
<InputNumber 
  min={0}
  max={100}
  value={56}
  step={2}
  onChange={this.inputNumberOnChange}
  disabled={false}    
/>
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
      <td>min</td>
      <td>Number</td>
      <td>-Infinity</td>
      <td>设置最小值</td>
    </tr>
    <tr>
      <td>max</td>
      <td>Number</td>
      <td>Infinity</td>
      <td>设置最大值</td>
    </tr>
    <tr>
      <td>value</td>
      <td>Number</td>
      <td>0</td>
      <td>设置初始值</td>
    </tr>
    <tr>
      <td>step</td>
      <td>Number</td>
      <td>1</td>
      <td>设置输入字段的合法数字间隔</td>
    </tr>
    <tr>
      <td>onChange</td>
      <td>Function</td>
      <td></td>
      <td>当input-number的value有修改时返回value</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>Boolean</td>
      <td>false</td>
      <td>设置input-number是否该disabled</td>
    </tr>
    <tr>
      <td>width</td>
      <td>Number</td>
      <td></td>
      <td>设置Input-number的总宽</td>
    </tr>
  </tbody>
</table>