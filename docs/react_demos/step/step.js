var Step = uskin.Step,
  items1 = [{ name: 'step 1', value: '0' },
          { name: 'step 2', value: '1' },
          { name: 'step 3', value: '2' }],
  items2 = [{ name: 'title 1', value: '0' },
          { name: 'title 2', value: '1' },
          { name: 'title 3', value: '2' , selected: true},
          { name: 'title 4', value: '3' }];

ReactDOM.render(
  <Step items={items1} onClick={listener}/>,
  document.getElementById('example')
);

ReactDOM.render(
  <Step items={items2} onClick={listener} width="572"/>,
  document.getElementById('example2')
);

function listener(e, status) {
  console.debug('click triggered!', e, status);
}