## Example
<a href="./breadcrumb.html" target="_blank">Breadcrumb Example</a>

## Usage
```
var Breadcrumb = uskin.Breadcrumb;

var items = [{ name: 'Home', href: '#home' },
            { name: 'Store', href: '#store' },
            { name: 'Phones', href: '#phone' }];
ReactDOM.render(<Breadcrumb items={items}/>, document);
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
      <td>items</td>
      <td>Array</td>
      <td>[]</td>
      <td><a href="#items">见下方items详解</a></td>
    </tr>
    <tr>
  </tbody>
</table>

**items**
<table id="items">
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
      <td>name(必填)</td>
      <td>String</td>
      <td></td>
      <td>每个item的路由名称</td>
    </tr>
    <tr>
      <td>href</td>
      <td>String</td>
      <td></td>
      <td>每个item的地址</td>
    </tr>
  </tbody>
</table>