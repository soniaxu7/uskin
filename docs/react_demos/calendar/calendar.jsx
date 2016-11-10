const Calendar = uskin.Calendar;

const mountNode = document.getElementById('example');

function beforeChange1(date) {
  console.log('before change 1: ', date);
}

function display1(date) {
  const node = document.getElementById('screen1');
  node.innerText = date.year + '-' + date.month + '-' + date.date;
}

function afterChange1(date) {
  console.log('after change 1: ', date);
}

function display2(date) {
  const node = document.getElementById('screen2');
  node.innerText = date.year + ' 年 ' + date.month + ' 月 ' + date.date + ' 日';
}

function display3(date) {
  const node = document.getElementById('screen3');
  node.innerText = date.year + ' ' + date.month + ' ' + date.date;
}

const local = {
  weeks: ['日', '一', '二', '三', '四', '五', '六'],
  months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
};

const disabled = {
  min: '2016-09-28',
  max: '2016-11-2',
  weeks: [0, 3, 6],
  dates: ['2016-10-10', '2016-10-13', '2016-10-18', '2016-10-21']
};

ReactDOM.render(
  <div>
    <div className="example">
      <div className="screen" id="screen1" >show date</div>
      <Calendar onChange={display1} beforeChange={beforeChange1} afterChange={afterChange1} />
    </div>
    <div className="example">
      <div className="screen" id="screen2" >show date</div>
      <Calendar startWeek={1} local={local} page="2016-10" selectedDate="2016-10-14" onChange={display2}/>
    </div>
    <div className="example">
      <div className="screen" id="screen3" >show date</div>
      <Calendar page="2016-09" disabled={disabled} onChange={display3}/>
    </div>
    <div className="example">
      <Calendar page="2016-10" disabled={disabled} hasScreen={true} placeholder="Please select date"/>
    </div>
    <div className="example">
      <Calendar disabled={disabled} page="2016-14" selectedDate="2016-10-14" hasScreen={true} unfold={true} />
    </div>
  </div>,
  mountNode
);
