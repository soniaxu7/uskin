var InputNumber = uskin.InputNumber;

function listener(number, error) {
  console.debug('click triggered!', number, error);
}

ReactDOM.render(
  <div>
    <InputNumber onChange={listener}/>
    <InputNumber onChange={listener} min={0} max={10} value={3} width={62}/>
    <InputNumber onChange={listener} min={-1} max={1} value={0.98} step={0.01}/>
    <InputNumber onChange={listener} value={20} width={62} disabled={true}/>
  </div>,
  document.getElementById('example')
);
