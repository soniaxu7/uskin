import React from 'react';
import helper from './helper';
import Constants from './constants';

const { WEEKS_LOCAL, WEEKS_COUNT, TABLE_LINE } = Constants;

class DatePicker extends React.Component {

  constructor(props) {
    super(props);

    ['onClick'].forEach((func) => {
      this[func] = this[func].bind(this);
    });
  }

  onClick(e) {
    let target = e.target;
    let monthOffset = parseInt(target.getAttribute('data-month'), 10);

    if (target.tagName === 'TD' && monthOffset === 0 && target.className === 'default') {
      let date = parseInt(target.getAttribute('data-date'), 10);
      let page = this.props.page;
      let newDate = new Date(page.year, page.month + monthOffset, date);

      this.onSelected(helper.formatDate(newDate));
    }
  }

  onSelected(date) {
    let func = this.props.onSelected;
    func && func(date);
  }

  getWeeks(props) {
    let startDay = props.startWeek;

    let LOCAL = props.local && props.local.weeks ? props.local.weeks : WEEKS_LOCAL;

    let weeks = [];
    for (let i = 0; i < WEEKS_COUNT; i++) {
      let day = (startDay + i + WEEKS_COUNT) % WEEKS_COUNT;
      weeks.push(LOCAL[day]);
    }

    return weeks;
  }

  getDates(props) {
    let startDay = props.startWeek;

    let y = props.page.year;
    let m = props.page.month;

    let prevLastDate = new Date(y, m, 0).getDate();
    let lastDate = new Date(y, m + 1, 0).getDate();
    let firstDay = new Date(y, m, 1).getDay();

    let dates = [];
    let line = 0;
    let offset = (firstDay - startDay + WEEKS_COUNT) % WEEKS_COUNT;
    if (startDay !== firstDay) {
      dates[line] = [];
      let i = 0;

      for (i = 0; i < offset; i++) {
        dates[line][i] = {
          monthOffset: -1,
          date: prevLastDate + i - offset + 1
        };
      }
      for (; i < WEEKS_COUNT; i++) {
        dates[line][i] = {
          monthOffset: 0,
          date: i - offset + 1
        };
      }

      line++;
    }

    let count = (WEEKS_COUNT - offset) % WEEKS_COUNT + 1;
    let countOverflow = 1;
    for (let i = line; i < TABLE_LINE; i++) {
      dates[i] = [];
      for (let j = 0; j < WEEKS_COUNT; j++, count++) {
        if (count <= lastDate) {
          dates[i][j] = {
            monthOffset: 0,
            date: count
          };
        } else {
          dates[i][j] = {
            monthOffset: 1,
            date: countOverflow
          };
          countOverflow++;
        }
      }
    }

    return dates;
  }

  isSelectable(disabled, date) {
    return this.props.isSelectable(disabled, date);
  }

  getClassName(props, ele) {
    if (ele.monthOffset === 0) {
      let date = {
        year: props.page.year,
        month: props.page.month,
        date: ele.date,
        monthOffset: ele.monthOffset
      };

      if (props.disabled && !this.isSelectable(props.disabled, date)) {
        return 'not-selected';
      }
      if (ele.monthOffset === 0
        && props.selected.date
        && helper.compareDate(props.selected, date) === 0) {
        return 'selected';
      }
      return 'default';
    } else {
      return 'disabled';
    }
  }

  render() {
    const props = this.props;
    let weeks = this.getWeeks(props);
    let dates = this.getDates(props);

    return (
      <div className="calendar-datepicker">
        <table>
          <thead>
            <tr>
              {weeks.map((ele) => <th key={ele}>{ele}</th>)}
            </tr>
          </thead>
          <tbody onClick={this.onClick}>
            {
              dates.map((line, index) =>
                <tr key={index}>
                  {
                    line.map((ele, i) =>
                      <td key={ele.date}
                        data-month={ele.monthOffset}
                        data-date={ele.date}
                        className={this.getClassName(props, ele)}>
                        {ele.date}
                      </td>
                    )
                  }
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    );
  }

}

export default DatePicker;
