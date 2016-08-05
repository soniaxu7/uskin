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

var onClickBreadcrumb = function(item, e) {
  console.log('Testing Breadcrumb onClick event handler.', item);
};

ReactDOM.render(
  <Breadcrumb items={items1} onClick={onClickBreadcrumb}/>,
  document.getElementById('example')
);

ReactDOM.render(
  <Breadcrumb items={items2} onClick={onClickBreadcrumb}/>,
  document.getElementById('example2')
);
