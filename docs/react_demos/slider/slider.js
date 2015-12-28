var Slider = uskin.Slider,
  value = 0,
  value2 = -20,
  value3 = 0.54;

document.getElementById('value1').innerHTML = value;
document.getElementById('value2').innerHTML = value2;
document.getElementById('value3').innerHTML = value3;

ReactDOM.render(
  <Slider min="0" max="100" value={value} onChange={listener}/>,
  document.getElementById('example')
);

ReactDOM.render(
  <Slider min="-100" max="100" value={value2} step="40" width={400} onChange={listener2}/>,
  document.getElementById('example2')
);

ReactDOM.render(
  <Slider min="0" max="3" value={value3} step="0.01" width="500" onChange={listener3}/>,
  document.getElementById('example3')
);

function listener(e, status) {
  document.getElementById('value1').innerHTML = status;
};

function listener2(e, status) {
  document.getElementById('value2').innerHTML = status;
};

function listener3(e, status) {
  document.getElementById('value3').innerHTML = status;
};