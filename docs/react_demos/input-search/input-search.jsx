var InputSearch = uskin.InputSearch;

function listener(status) {
  console.debug('click triggered!', status);
}

ReactDOM.render(
  <div>
    <InputSearch onClick={listener} width="200" />
    <InputSearch onClick={listener} width="300" type="light"/>
  </div>,
  document.getElementById('example')
);
