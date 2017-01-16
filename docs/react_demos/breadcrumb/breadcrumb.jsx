const {Breadcrumb} = uskin;

const items1 = [{
  name: 'Home',
  href: '#home'
}, {
  name: 'Store',
  href: '#store'
}];
const items2 = [{
  name: 'Home',
  href: '#home'
}, {
  name: 'Store',
  href: '#store'
}, {
  name: 'Phones',
  href: '#phone'
}];
let listener = function(item, e) {
  console.log('Breadcrumb item clicked: ', item);
};

ReactDOM.render(
  <div>
    <Breadcrumb items={items1} onClick={listener} />
    <Breadcrumb items={items2} onClick={listener} />
  </div>,
  document.getElementById('example')
);
