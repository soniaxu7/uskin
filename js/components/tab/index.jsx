import React, {PropTypes} from 'react';

function noop() {}

class Tab extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedKey: undefined
    };

    this.onClick = this.onClick.bind(this);
  }

  componentWillMount() {
    this.findDefaultTab(this.props.items);
  }

  componentWillReceiveProps(nextProps) {
    this.findDefaultTab(nextProps.items);
  }

  findDefaultTab(items) {
    let selected = items.find((ele) => ele.default);

    this.setState({
      selectedKey: selected ? selected.key : undefined
    });
  }

  getItemClassName(item, key, selectedKey) {
    if (item.disabled) {
      return 'tab disabled';
    } else if (this.props.type !== 'sm' && this.props.items.length === 1) {
      return 'tab sole';
    } else if (typeof selectedKey !== 'undefined' && selectedKey === key) {
      return 'tab selected';
    } else {
      return 'tab';
    }
  }

  onClick(e) {
    e.preventDefault();

    let key = e.target.getAttribute('data-value');
    this.setState({
      selectedKey: key
    });

    let item = this.props.items.filter((tab) => key === tab.key)[0];
    this.props.onClick(e, item);
  }

  render() {
    const items = this.props.items;
    let className = (this.props.type === 'sm') ? 'tabs-mini' : 'tabs';
    let selectedKey = this.state.selectedKey;

    return (
      <ul className={className}>
        {items.map((item, index) =>
          <li key={item.key} className={this.getItemClassName(item, item.key, selectedKey)}>
            <a href={(item.href && !item.disabled) ? item.href : null}
              onClick={(item.disabled || selectedKey === item.key) ? null : this.onClick}
              data-value={item.key}>{item.name}</a>
          </li>
        )}
      </ul>
    );
  }

}

Tab.propsTypes = {
  items: PropTypes.shape({
    name: PropTypes.string,
    key: PropTypes.string,
    default: PropTypes.bool,
    disabled: PropTypes.bool
  }),
  type: PropTypes.oneOf(['sm']),
  onClick: PropTypes.func
};

Tab.defaultProps = {
  items: [],
  onClick: noop
};

export default Tab;
