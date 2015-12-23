var Pagination = uskin.Pagination;
ReactDOM.render(
  <Pagination onClick={listener} total={200} perPage={10}/>,
  document.getElementById('example')
);

ReactDOM.render(
  <Pagination onClick={listener2} total={200} perPage={20} current={7}/>,
  document.getElementById('example2')
);

function listener(e, status) {
  document.getElementById('value').innerHTML = status;
  console.debug('click triggered!', e, status);
}

function listener2(e, status) {
  document.getElementById('value2').innerHTML = status;
  console.debug('click triggered!', e, status);
}