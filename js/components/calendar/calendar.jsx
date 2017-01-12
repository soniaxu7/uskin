import React, { PropTypes } from 'react';
import Screen from './screen';
import Header from './header';
import DatePicker from './datepicker';
import helper from './helper';

function noop() {}

class Calendar extends React.Component {

  constructor(props) {
    super(props);

    this.state = this.initialState(props);

    ['onToggle', 'onChange', 'onSelected', 'onConfirmScreen'].forEach((func) => {
      this[func] = this[func].bind(this);
    });
  }

  initialState(props) {
    let selected = {};
    let page;

    if (props.selectedDate && helper.isValidDate(props.selectedDate)){
      selected = helper.formatDate(new Date(props.selectedDate));

      if (!this.isSelectable(props.disabled, selected)) {
        selected = {};
      }
    }

    if (selected.date) {
      page = selected;
    } else if (props.page) {
      page = helper.formatDate(new Date(props.page));
    } else {
      page = helper.formatDate(new Date());
    }

    let state = {
      page: page,
      selected: selected,
      toggle: props.hasScreen ? props.unfold : true
    };

    return state;
  }

  componentWillMount() {
    if (this.props.hasScreen) {
      this.foldListener();
    }
  }

  foldListener() {
    const that = this;
    function hideCalendar(e) {
      that.setState({
        toggle: false
      });

      that.refs.header.closeLists(e);
      document.removeEventListener('click', hideCalendar, false);
    }

    if (this.state.toggle) {
      document.addEventListener('click', hideCalendar, false);
    }
  }

  onToggle(event) {
    let nextToggle = !this.state.toggle;
    let selected = this.state.selected;

    if (nextToggle) {
      if (selected.date) {
        this.onChange(selected);
      } else {
        this.onChange(helper.formatDate(new Date()));
      }
    }

    this.setState({
      toggle: nextToggle
    }, () => {
      if (this.props.hasScreen) {
        this.foldListener();
      }
    });
  }

  onPreventFold(e) {
    e.nativeEvent.stopImmediatePropagation();
  }

  onChange(date) {
    this.setPage(date);
  }

  setPage(date) {
    this.setState({
      page: date
    });
  }

  onConfirmScreen(date) {
    let d = date;
    if (!this.isSelectable(this.props.disabled, date)) {
      d = this.state.selected;
    }

    this.onChange(d);
    this.onSelected(d);
  }

  isSelectable(disabled, date) {
    if (disabled) {
      let currentDate = new Date(date.year, date.month, date.date);

      let isAvaiableMin = true;
      if (disabled.min) {
        isAvaiableMin = helper.compareFullDate(currentDate, new Date(disabled.min)) > 0;
      }

      let isAvailableMax = true;
      if (disabled.max) {
        isAvailableMax = helper.compareFullDate(new Date(disabled.max), currentDate) > 0;
      }

      let isAvailableWeek = true;
      if (disabled.weeks && disabled.weeks.length > 0) {
        let currentWeek = currentDate.getDay();
        isAvailableWeek = disabled.weeks.indexOf(currentWeek) < 0;
      }

      let isAvailableDate = true;
      if (disabled.dates && disabled.dates.length > 0) {
        isAvailableDate = !disabled.dates.some((d) => (
          helper.compareFullDate(new Date(d), currentDate) === 0
        ));
      }

      return isAvaiableMin && isAvailableMax && isAvailableWeek && isAvailableDate;
    }

    return true;
  }

  onSelected(date) {
    let isValid = this.isSelectable(this.props.disabled, date);

    if (isValid) {
      this.setState({
        selected: date
      });

      this.alertChange(date);
    } else {
      this.setState({
        selected: this.state.selected
      });
    }
  }

  alertChange(date) {
    let d = {
      year: date.year,
      month: date.month + 1,
      date: date.date
    };

    this.beforeChange(d);
    this.onChangeDate(d);
    this.afterChange(d);
  }

  onChangeDate(date) {
    this.props.onChange(date);
  }

  beforeChange(date) {
    this.props.beforeChange(date);
  }

  afterChange(date) {
    this.props.afterChange(date);
  }

  render() {
    const props = this.props;
    const state = this.state;

    return (
      <div className="calendar-box">
        {
          props.hasScreen ?
            <Screen {...props} {...state}
              onToggle={this.onToggle}
              onSelected={this.onSelected}
              onChange={this.onChange}
              onConfirm={this.onConfirmScreen} />
          : null
        }
        <div className={'calendar' + (state.toggle ? '' : ' hide')}>
          <Header ref="header" {...props} {...state}
            onPreventFold={this.onPreventFold}
            onChange={this.onChange} />
          <DatePicker {...props} {...state}
            onSelected={this.onSelected}
            isSelectable={this.isSelectable} />
        </div>
      </div>
    );
  }

}

Calendar.propTypes = {
  onChange: PropTypes.func,
  beforeChange: PropTypes.func,
  afterChange: PropTypes.func,
  page: PropTypes.string,
  selectedDate: PropTypes.string,
  placeholder: PropTypes.string,
  startWeek: PropTypes.number,
  disabled: PropTypes.object,
  local: PropTypes.object,
  hasScreen: PropTypes.bool,
  unfold: PropTypes.bool
};

Calendar.defaultProps = {
  onChange: noop,
  beforeChange: noop,
  afterChange: noop,
  startWeek: 0,
  unfold: false
};

export default Calendar;
