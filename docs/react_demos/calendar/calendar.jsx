const {Calendar} = uskin;

function beforeChange(date) {
  console.log('before change: ', date);
}

function onChange(date) {
  console.log('onChange: ', date);
}

function afterChange(date) {
  console.log('after change: ', date);
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
    <Calendar />
    <Calendar startWeek={1} local={local} page="2016-10" selectedDate="2016-10-14" onChange={onChange} beforeChange={beforeChange} afterChange={afterChange} />
    <Calendar page="2016-10" disabled={disabled} placeholder="Please enter the date" />
  </div>,
  document.getElementById('example')
);
