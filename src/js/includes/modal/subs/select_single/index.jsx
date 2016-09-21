var React = require('react');

var copyObj = function(obj) {
  var newobj = obj.constructor === Array ? [] : {};
  if (typeof obj !== 'object') {
    return newobj;
  } else {
    newobj = JSON.parse(JSON.stringify(obj));
  }
  return newobj;
};

class SelectSingle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      disabled: props.disabled,
      hide: props.hide,
      data: copyObj(props.data)
    };

    this.onChange = this.onChange.bind(this);
    this.time = (new Date()).getTime();
  }

  onChange(value) {
    this.setState({
      value: value
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    var now = (new Date()).getTime();
    if (nextState.value === null && (now - this.time < 50)) {
      return false;
    } else {
      return true;
    }
  }

  componentDidUpdate() {
    this.time = (new Date()).getTime();
    this.props.onAction(this.props.field, this.state);
  }

  render() {
    var props = this.props,
      state = this.state;
    var className = 'modal-row select-single-row';
    if (props.is_long_label) {
      className += ' label-row long-label-row';
    } else {
      className += ' label-row';
    }
    if (state.hide) {
      className += ' hide';
    }

    var that = this;
    function renderTabs() {
      var data = state.data, columnNum = props.columnNum, ret = [];
      var width = (100 - (columnNum - 1) * 2) / columnNum + '%';

      for(var i = 0; i < data.length; i += columnNum) {
        var tabs = [];
        for(var j = i; j < i + columnNum; j++) {
          if (j < data.length) {
            var value = data[j];
            tabs.push(
              <a key={value}
                style={{width: width}}
                className={value === state.value ? 'selected' : ''}
                onClick={value === state.value ? null : that.onChange.bind(that, value)}>
                {value}
              </a>
            );
          }
        }
        ret.push(<div key={i}>{tabs}</div>);
      }

      return ret;
    }

    return (
      <div className={className}>
        <div>
          {props.label}
        </div>
        <div>{renderTabs()}</div>
      </div>
    );
  }
}

SelectSingle.defaultProps = {
  value: '',
  disabled: false,
  hide: false,
  data: []
};

module.exports = SelectSingle;
