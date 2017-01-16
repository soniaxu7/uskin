const {InputNumber} = uskin;

function listener(number, isError) {
  console.debug('click triggered!', number, isError);
}

ReactDOM.render(
  <div>
    <div className="box">
      <InputNumber onChange={listener} />
      <span>default props (min: -Infinity, max: Infinity, initial-value: 0, step: 1)</span>
    </div>
    <div className="box">
      <InputNumber onChange={listener} min={0} max={10} value={3} width={62} />
      <span>min: 0 / max: 10 / initial-value: 3 / width: 62</span>
    </div>
    <div className="box">
      <InputNumber onChange={listener} min={-1} max={1} value={0.98} step={0.01} />
      <span>min: -1 / max: 1 / initial-value: 0.98 / step: 0.01</span>
    </div>
    <div className="box">
      <InputNumber onChange={listener} value={20} width={62} disabled={true} />
      <span>disabled: true / width: 62</span>
    </div>
  </div>,
  document.getElementById('example')
);
