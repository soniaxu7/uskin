import React from 'react';
import helper from './helper';
import Constants from './constants';

const { MONTHS_LOCAL, YEARS_PERIOD } = Constants;

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      yearsVisible: false,
      monthsVisible: false
    };

    ['onChangeYear', 'onChangeMonth', 'prevMonth', 'nextMonth',
      'showYears', 'showMonths', 'closeLists'
    ].forEach((func) => {
      this[func] = this[func].bind(this);
    });
  }

  onChange(y, m, d = 1) {
    let page = new Date(y, m, d);
    let func = this.props.onChange;
    func && func(helper.formatDate(page));
  }

  onChangeYear(e) {
    let target = e.target;
    let year = parseInt(target.getAttribute('data-year'), 10);
    let page = this.props.page;

    if (!isNaN(year)) {
      this.onChange(year, page.month);
    }
  }

  onChangeMonth(e) {
    let target = e.target;
    let month = parseInt(target.getAttribute('data-month'), 10);
    let page = this.props.page;

    if (!isNaN(month)) {
      this.onChange(page.year, month);
    }
  }

  prevMonth(e) {
    let page = this.props.page;
    this.onChange(page.year, page.month - 1);
  }

  nextMonth(e) {
    let page = this.props.page;
    this.onChange(page.year, page.month + 1);
  }

  showYears(e) {
    this.setState({
      yearsVisible: !this.state.yearsVisible,
      monthsVisible: false
    });
  }

  showMonths(e) {
    this.setState({
      yearsVisible: false,
      monthsVisible: !this.state.monthsVisible
    });
  }

  closeLists(e) {
    let event = e.nativeEvent ? e.nativeEvent : e;
    event.stopImmediatePropagation();
    this.setState({
      yearsVisible: false,
      monthsVisible: false
    });
  }

  getYears(current) {
    let years = [];
    let start = current - YEARS_PERIOD;
    let end = current + YEARS_PERIOD;

    for (let i = start; i <= end; i++) {
      years.push(i);
    }

    return years;
  }

  render() {
    const props = this.props;
    const state = this.state;

    let page = this.props.page;
    let years = this.getYears(page.year);

    let MONTHS = MONTHS_LOCAL;
    if (props.local && props.local.months) {
      MONTHS = props.local.months;
    }

    return (
      <div className="calendar-header" onClick={this.props.onPreventFold}>
        <i className="glyphicon icon-arrow-left direction" onClick={this.prevMonth} />
        <span className="title">
          <div className={'title-left' + (state.yearsVisible ? ' selected' : '')} onClick={this.showYears}>
            <span className="title-content">
              <span>{page.year}</span>
              <i className="glyphicon icon-arrow-down toggle" />
            </span>
            <ul onClick={this.onChangeYear} className={'list' + (state.yearsVisible ? '' : ' hide')}>
              {
                years.map((ele) =>
                  <li key={ele}
                    className={ele === page.year ? 'selected' : ''}
                    data-year={ele}>
                    {ele}
                  </li>
                )
              }
            </ul>
          </div>
          <div className={'title-right' + (state.monthsVisible ? ' selected' : '')} onClick={this.showMonths}>
            <span className="title-content">
              <span>{MONTHS[page.month]}</span>
              <i className="glyphicon icon-arrow-down toggle" />
            </span>
            <ul onClick={this.onChangeMonth} className={'list' + (state.monthsVisible ? '' : ' hide')}>
              {
                MONTHS.map((ele, i) =>
                  <li key={i}
                    className={ele === MONTHS[page.month] ? 'selected' : ''}
                    data-month={i}>
                    {ele}
                  </li>
                )
              }
            </ul>
          </div>
        </span>
        {
          state.yearsVisible || state.monthsVisible ?
            <div className="mask" onClick={this.closeLists} />
          : null
        }
        <i className="glyphicon icon-arrow-right direction" onClick={this.nextMonth} />
      </div>
    );
  }

}

export default Header;
