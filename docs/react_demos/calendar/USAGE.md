## Example
<a href="./calendar.html" target="_blank">Calendar Example</a>

## Usage
```
const {Calendar} = uskin;

ReactDOM.render(
  <Calendar
    startWeek={1}
    local={local}
    page="2016-10"
    selectedDate="2016-10-14"
    onChange={display2} />,
  document
);
```

## API
**注意：ButtonGroup里的Button的Tag属性值必须设为div**
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
      <td>function</td>
      <td></td>
      <td>选择日期时返回date为{year: num, month: num, date: num}的对象</td>
    </tr>
    <tr>
      <td>beforeChange</td>
      <td>function</td>
      <td></td>
      <td>onChange前触发，参数返回date为{year: num, month: num, date: num}的对象</td>
    </tr>
    <tr>
      <td>afterChange</td>
      <td>function</td>
      <td></td>
      <td>onChange后触发，时返回date为{year: num, month: num, date: num}的对象</td>
    </tr>
    <tr>
      <td>page</td>
      <td>string</td>
      <td>当前时间</td>
      <td>需要显示的年份和月份，格式为'YYYY-MM-DD'</td>
    </tr>
    <tr>
      <td>selectedDate</td>
      <td>string</td>
      <td></td>
      <td>默认选中的日期，格式为'YYYY-MM-DD'</td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>string</td>
      <td></td>
      <td>日期显示屏幕上的placeholder</td>
    </tr>
    <tr>
      <td>startWeek</td>
      <td>number</td>
      <td></td>
      <td>起始周期，从星期日到星期六，依次为数字0到6</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>object</td>
      <td></td>
      <td>不可选中的格式，disabled对象包括{ min: string, max: string, weeks: array(number), dates: array(string) } ，</td>
    </tr>
    <tr>
      <td>local</td>
      <td>object</td>
      <td></td>
      <td>月份和星期的翻译，local对象包括{ weeks: array, months: array }</td>
    </tr>
    <tr>
      <td>hasScreen</td>
      <td>boolean</td>
      <td>false</td>
      <td>是否有屏幕显示日期</td>
    </tr>
    <tr>
      <td>unfold</td>
      <td>boolean</td>
      <td>false</td>
      <td>是否折叠日历</td>
    </tr>
  </tbody>
</table>
