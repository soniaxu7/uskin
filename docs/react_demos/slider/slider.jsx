const {Slider} = uskin;

let value = 0;
let value2 = -20;
let value3 = 0.54;
let value4 = 3;
let value5 = 1;
let value6 = 8;

function listener(nodeId, e, status) {
  document.getElementById('value' + nodeId).innerHTML = status;
}

ReactDOM.render(
  <div>
    <div className="box">
      <Slider onChange={listener.bind(null, '1')} />
      <div className="value" id="value1">{value}</div>
      <span>Default: min = 0, max = 100, value = 0</span>
    </div>
    <div className="box">
      <Slider min={-100} max={100} value={value2} step={40} width={400} onChange={listener.bind(null, '2')} />
      <div className="value" id="value2">{value2}</div>
      <span>min = -100, max = 100, value = -20, unit = 40</span>
    </div>
    <div className="box">
      <Slider min={0} max={3} value={value3} step={0.01} width={500} onChange={listener.bind(null, '3')} />
      <div className="value" id="value3">{value3}</div>
      <span>min = 0, max = 3, value = 0.54, unit = 0.01</span>
    </div>
    <div className="box">
      <Slider min={0} max={10} value={value4} disabled={true} onChange={listener.bind(null, '4')} />
      <div className="value" id="value4">{value4}</div>
      <span>Disabled = true</span>
    </div>
    <div className="box">
      <Slider min={1} max={1} value={value5} onChange={listener.bind(null, '5')} />
      <div className="value" id="value5">{value5}</div>
      <span>when min == max == value == 1</span>
    </div>
    <div className="box">
      <Slider min={1} max={10} value={value6} hideThumb={true} />
      <div className="value" id="value6">{value6}</div>
      <span>hideThumb = true</span>
    </div>
  </div>,
  document.getElementById('example')
);
