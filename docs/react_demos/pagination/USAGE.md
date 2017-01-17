## Example
<a href="./pagination.html" target="_blank">Pagination Example</a>

## Usage
```
const {Pagination} = uskin;
ReactDOM.render(
  <Pagination 
    onClick={this.paginationOnClick}
    total={200}
    perPage={20}
    current={7} />,
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
      <td>页码点击时返回被点击的页码值(number, e)</td>
    </tr>
    <tr>
      <td>onClickLabel</td>
      <td>Function</td>
      <td></td>
      <td>first, last, prev, next被点击时返回被点击的按钮(status, e)</td>
    </tr>
    <tr>
      <td>total(必填)</td>
      <td>Number</td>
      <td></td>
      <td>总元素的数量</td>
    </tr>
    <tr>
      <td>current（必填）</td>
      <td>Number</td>
      <td></td>
      <td>当前页码</td>
    </tr>
    <tr>
      <td>labelOnly</td>
      <td>Boolean</td>
      <td>false</td>
      <td>是否只显示标签的pagination</td>
    </tr>
    <tr>
      <td>label</td>
      <td>Object</td>
      <td></td>
      <td>需要显示的标签信息，比如{prev: true, next: true, first: true, last: true}</td>
    </tr>
  </tbody>
</table>
