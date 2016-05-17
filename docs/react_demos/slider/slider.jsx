var Slider = uskin.Slider;

var value = 0,
  value2 = -20,
  value3 = 0.54,
  value4 = 3,
  value5 = 1;

document.getElementById('value1').innerHTML = value;
document.getElementById('value2').innerHTML = value2;
document.getElementById('value3').innerHTML = value3;
document.getElementById('value4').innerHTML = value4;
document.getElementById('value5').innerHTML = value5;

function listener(e, status) {
  document.getElementById('value1').innerHTML = status;
}

function listener2(e, status) {
  document.getElementById('value2').innerHTML = status;
}

function listener3(e, status) {
  document.getElementById('value3').innerHTML = status;
}

function listener4(e, status) {
  document.getElementById('value4').innerHTML = status;
}

function listener5(e, status) {
  document.getElementById('value5').innerHTML = status;
}

ReactDOM.render(
  <Slider onChange={listener}/>,
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

ReactDOM.render(
  <Slider min="0" max="10" value={value4} disabled={true} onChange={listener4}/>,
  document.getElementById('example4')
);

ReactDOM.render(
  <Slider min="1" max="1" value={value5} onChange={listener5}/>,
  document.getElementById('example5')
);
