import React, {PropTypes} from 'react';
import styles from '../../mixins/styles';

function noop() {}

class InputSearch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    ['onChange', 'onClick', 'updateValue', 'clearState'].forEach((func) => {
      this[func] = this[func].bind(this);
    });
  }

  onChange(e) {
    this.updateValue(e.target.value, false);
  }

  onClick(e) {
    this.updateValue(this.refs.search.value, true);
  }

  updateValue(val, isSubmitted) {
    this.setState({
      value: val
    });

    this.props.onChange(val, isSubmitted);
  }

  clearState() {
    this.setState({
      value: ''
    });
  }

  render() {
    const {width, type} = this.props;
    const state = this.state;
    const style = styles.getWidth(width, 10);
    const inputWidth = styles.getWidth(width - 48);

    return (
      <div className={'input-search' + (type === 'light' ? ' input-search-light' : '')} style={style}>
        <input {...this.props}
          ref="search"
          style={inputWidth}
          value={state.value}
          onChange={this.onChange} />
        <div className="search-icon" onClick={this.onClick}>
          <i className="glyphicon icon-search"></i>
        </div>
      </div>
    );
  }

}

InputSearch.propTypes = {
  width: PropTypes.number,
  type: PropTypes.oneOf(['light']),
  onChange: PropTypes.func
};

InputSearch.defaultProps = {
  width: 150,
  onChange: noop
};

export default InputSearch;
