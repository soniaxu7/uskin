import React, {PropTypes} from 'react';
import Screen from './screen';
import Header from './header';
import DatePicker from './datepicker';
import Helper from './helper';

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

    if (props.selectedDate && Helper.isValidDate(props.selectedDate)){
      selected = Helper.formatDate(new Date(props.selectedDate));

      if (!this.isSelectable(props.disabled, selected)) {
        selected = {};
      }
    }

    if (selected.date) {
      page = selected;
    } else if (props.page) {
      page = Helper.formatDate(new Date(props.page));
    } else {
      page = Helper.formatDate(new Date());
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
        this.onChange(Helper.formatDate(new Date()));
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

  beforeChange(date) {
    let func = this.props.beforeChange;
    func && func(date);
  }

  afterChange(date) {
    let func = this.props.afterChange;
    func && func(date);
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
        isAvaiableMin = Helper.compareFullDate(currentDate, new Date(disabled.min)) > 0;
      }

      let isAvailableMax = true;
      if (disabled.max) {
        isAvailableMax = Helper.compareFullDate(new Date(disabled.max), currentDate) > 0;
      }

      let isAvailableWeek = true;
      if (disabled.weeks && disabled.weeks.length > 0) {
        let currentWeek = currentDate.getDay();
        isAvailableWeek = disabled.weeks.indexOf(currentWeek) < 0;
      }

      let isAvailableDate = true;
      if (disabled.dates && disabled.dates.length > 0) {
        isAvailableDate = !disabled.dates.some((d) => (
          Helper.compareFullDate(new Date(d), currentDate) === 0
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
    let func = this.props.onChange;
    func && func(date);
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
  page: PropTypes.string,
  selectedDate: PropTypes.string,
  startWeek: PropTypes.number,
  disabled: PropTypes.object,
  local: PropTypes.object,
  hasScreen: PropTypes.bool,
  unfold: PropTypes.bool,
  placeholder: PropTypes.string
};

Calendar.defaultProps = {
  startWeek: 0,
  unfold: false
};

export default Calendar;
