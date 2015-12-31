var Breadcrumb = uskin.Breadcrumb;

var items1 = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'Store',
    href: '#store'
  }],
  items2 = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'Store',
    href: '#store'
  }, {
    name: 'Phones',
    href: '#phone'
  }];

ReactDOM.render(
  <Breadcrumb items={items1}/>,
  document.getElementById('example')
);

ReactDOM.render(
  <Breadcrumb items={items2}/>,
  document.getElementById('example2')
);
