var React = require('react');

var copyObj = (obj) => {
  var newobj = obj.constructor === Array ? [] : {};
  if (typeof obj !== 'object') {
    return newobj;
  } else {
    newobj = JSON.parse(JSON.stringify(obj));
  }
  return newobj;
};

class SelectGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: !!props.disabled,
      hide: !!props.hide,
      data: props.data ? copyObj(props.data) : [],
      clicked: false,
      value: props.value ? props.value : '',
      single: props.single
    };

    this.onChange = this.onChange.bind(this);
    this.renderEmpty = this.renderEmpty.bind(this);
    this.onLinkClick = this.onLinkClick.bind(this);
  }

  onChange(index) {
    var data = copyObj(this.state.data);
    data[index].selected = !data[index].selected;
    if (this.state.single) {
      data.forEach((item) => {
        if (item.id !== data[index].id) {
          item.selected = false;
        }
      });
    }
    if (data[index].selected) {
      this.setState({
        data: data,
        value: data[index].id
      });
    } else {
      this.setState({
        data: data,
        value: ''
      });
    }
  }

  onLinkClick() {
    this.setState({
      clicked: true
    });
    this.props.onAction(this.props.field, this.state);
  }

  shouldComponentUpdate(nextProps, nextState) {
    for (var index in this.state) {
      if (typeof this.state[index] !== 'object') {
        if (this.state[index] !== nextState[index]) {
          return true;
        }
      } else {
        if (JSON.stringify(this.state[index]) !== JSON.stringify(nextState[index])) {
          return true;
        }
      }
    }
    return false;
  }

  componentDidUpdate() {
    this.props.onAction(this.props.field, this.state);
  }

  renderEmpty() {
    var props = this.props,
      state = this.state;
    if (props.empty_text && (!state.data || state.data.length < 1)) {
      if (props.empty_text.link_info) {
        return (
          <span className={'empty-text-label'}>
            {props.empty_text.info}
            <a onClick={this.onLinkClick}>
              {
                props.empty_text.link_info.map((m) => {
                  return m;
                }).join('')
              }
            </a>
          </span>
        );
      } else {
        return (
          <span className="empty-text-label">{props.empty_text.info}</span>
        );
      }
    }
  }

  render() {
    var props = this.props,
      state = this.state;
    var className = 'modal-row select-group-row';
    if (props.is_long_label) {
      className += ' label-row long-label-row';
    } else {
      className += ' label-row';
    }
    if (props.is_warning) {
      className += ' warning-row';
    }
    if (state.hide) {
      className += ' hide';
    }

    return (
      <div className={className}>
        <div>
          {props.label}
        </div>
        <div>
          {
            state.data.map((item, index) => {
              var selected = false;
              if (state.single && item.id === state.value) {
                selected = true;
              } else if (!state.single) {
                selected = item.selected;
              }
              return <a key={item.id} className={selected ? 'items selected' : 'items '} onClick={this.onChange.bind(this, index)}>{item.name || '(' + item.id.substr(0, 8) + ')'}<i className="glyphicon icon-active-yes"></i></a>;
            })
          }
          {this.renderEmpty()}
        </div>
      </div>
    );
  }
}

module.exports = SelectGroup;
