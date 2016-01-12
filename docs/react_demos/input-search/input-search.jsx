var InputSearch = uskin.InputSearch;

function listener(status) {
  console.debug('click triggered!', status);
}

ReactDOM.render(
  <div>
    <div>
      <InputSearch onClick={listener} width="200" />
    </div>
    <div>
      <InputSearch onClick={listener} width="300" type="light"/>
    </div>
  </div>,
  document.getElementById('example')
);
