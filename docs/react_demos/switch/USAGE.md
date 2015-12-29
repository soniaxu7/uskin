## Example
<a href="./switch.html" target="_blank">Switch Example</a>

## Usage
```
var Switch = uskin.Switch;
ReactDOM.render(
  <Switch
    onChange={listener}
    labelOn="ON"
    labelOff="OFF"
    checked={true}
    width={50}
    disabled={false}
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
      <td>onChange</td>
      <td>Function</td>
      <td></td>
      <td>当switch的状态变化时的handler</td>
    </tr>
    <tr>
      <td>labelOn</td>
      <td>String</td>
      <td></td>
      <td>on状态下显示的文字</td>
    </tr>
    <tr>
      <td>labelOff</td>
      <td>String</td>
      <td></td>
      <td>off状态下显示的文字</td>
    </tr>
    <tr>
      <td>checked</td>
      <td>Boolean</td>
      <td>false</td>
      <td>设置switch的初始状态是否为checked</td>
    </tr>
    <tr>
      <td>disbled</td>
      <td>Boolean</td>
      <td>false</td>
      <td>设置switch是否为disabled</td>
    </tr>
    <tr>
      <td>width</td>
      <td>Number</td>
      <td></td>
      <td>设置switch的宽度</td>
    </tr>
  </tbody>
</table>
