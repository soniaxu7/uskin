var Step = uskin.Step;


function listener(e, status) {
  console.debug('click triggered!', e, status);
}

var items1 = [{ name: 'step 1', key: '0' },
  { name: 'step 2', key: '1' },
  { name: 'step 3', key: '2' }],
  items2 = [{ name: 'title 1', key: '0' },
  { name: 'title 2', key: '1' },
  { name: 'title 3', key: '2', default: true},
  { name: 'title 4', key: '3' }];

ReactDOM.render(
  <Step items={items1} onClick={listener}/>,
  document.getElementById('example')
);

ReactDOM.render(
  <Step items={items2} onClick={listener} width="572"/>,
  document.getElementById('example2')
);
