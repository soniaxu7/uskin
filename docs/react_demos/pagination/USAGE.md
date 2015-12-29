## Example
<a href="./pagination.html" target="_blank">Pagination Example</a>

## Usage
```
var Pagination = uskin.Pagination;
ReactDOM.render(
  <Pagination 
    onClick={this.paginationOnClick}
    total={200}
    perPage={20}
    current={7}
  />,, document);
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
      <td>页码点击时返回被点击的页码值</td>
    </tr>
    <tr>
      <td>total(必填)</td>
      <td>Number</td>
      <td></td>
      <td>总元素的数量</td>
    </tr>
    <tr>
      <td>perPage(必填)</td>
      <td>Number</td>
      <td></td>
      <td>每个页面显示的元素数量</td>
    </tr>
    <tr>
      <td>current</td>
      <td>Number</td>
      <td></td>
      <td>当前页码</td>
    </tr>
  </tbody>
</table>
