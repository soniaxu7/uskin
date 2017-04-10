import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Screen from './screen';
import Header from './header';
import DatePicker from './datepicker';
import helper from './helper';

function noop() {}

class Calendar extends React.Component {

  constructor(props) {
    super(props);

    this.state = this.initialState(props);

    ['onToggle', 'onChange', 'onSelected', 'onConfirmScreen', 'destroyCalendar'].forEach((func) => {
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
      unfold: false
    };

    return state;
  }

  updateState(state) {
    this.setState(state, () => {
      this.updateCalendar();
    });
  }

  onToggle(e) {
    const unfold = this.state.unfold;

    if (unfold) {
      this.destroyCalendar(e);
    } else {
      this.updateCalendar();
    }
  }

  createCalendar() {
    if (!this.CalenderDOM) {
      this.CalenderDOM = document.createElement('div');
      const root = this.CalenderDOM;

      root.className = 'calendar-container';
      document.body.appendChild(root);

      ReactDOM.render(this.getCalendar(this.props, this.state), root);

      document.addEventListener('click', this.destroyCalendar, false);
    }

    this.setState({ unfold: true });
  }

  updateCalendar() {
    if (!this.CalenderDOM) {
      this.createCalendar();
    } else {
      ReactDOM.render(this.getCalendar(this.props, this.state), this.CalenderDOM); 
    }

    this.setState({ unfold: true });
  }

  destroyCalendar(e) {
    if (this.CalenderDOM) {
      const root = this.CalenderDOM;

      ReactDOM.unmountComponentAtNode(root);
      root.parentNode.removeChild(root);
      document.removeEventListener('click', this.destroyCalendar, false);

      delete this.CalenderDOM;
    }

    this.setState({ unfold: false });
  }

  onPreventFold(e) {
    e.nativeEvent.stopImmediatePropagation();
  }

  onChange(date) {
    this.setPage(date);
  }

  setPage(date) {
    this.updateState({
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
      this.updateState({
        selected: date
      });

      this.alertChange(date);
    } else {
      this.updateState({
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

  getCalendar(props, state) {
    const calendarBox = this.refs['calendar-box'];
    const position = calendarBox.getBoundingClientRect();

    const scrollTop = position.top + 32 + window.pageYOffset;
    const scrollLeft = position.left + window.pageXOffset
    const style = {
      position: 'absolute',
      top: scrollTop,
      left: scrollLeft
    };

    return (
      <div className="calendar" style={style}>
        <Header {...props} {...state}
          onPreventFold={this.onPreventFold}
          onChange={this.onChange} />
        <DatePicker {...props} {...state}
          onSelected={this.onSelected}
          isSelectable={this.isSelectable} />
      </div>
    );
  }

  render() {
    const props = this.props;
    const state = this.state;
// console.trace('render')
    return (
      <div className="calendar-box" ref="calendar-box" onClick={this.onToggle}>
        <Screen {...state}
          unfold={state.unfold}
          placeholder={props.placeholder}
          onSelected={this.onSelected}
          onChange={this.onChange}
          onConfirm={this.onConfirmScreen} />
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
  disabled: PropTypes.shape({
    min: PropTypes.string,
    max: PropTypes.string,
    weeks: PropTypes.arrayOf(PropTypes.number),
    dates: PropTypes.arrayOf(PropTypes.string)
  }),
  local: PropTypes.shape({
    weeks: PropTypes.arrayOf(PropTypes.string),
    months: PropTypes.arrayOf(PropTypes.string)
  })
};

Calendar.defaultProps = {
  onChange: noop,
  beforeChange: noop,
  afterChange: noop,
  startWeek: 0
};

export default Calendar;
