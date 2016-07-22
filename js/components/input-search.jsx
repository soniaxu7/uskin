import React from 'react';
import styles from '../mixins/styles.js';

class InputSearch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this._onChange = this._onChange.bind(this);
    this._onClick = this._onClick.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  _onChange(e) {
    this.updateValue(e.target.value, false);
  }

  _onClick(e) {
    this.updateValue(this.refs.search.value, true);
  }

  updateValue(val, isSubmitted) {
    this.setState({
      value: val
    });

    this.props.onChange && this.props.onChange(val, isSubmitted);
  }

  clearState() {
    this.setState({
      value: ''
    });
    this.refs.search.value = '';
  }

  render() {
    const {width, type} = this.props,
      state = this.state;

    var style = styles.getWidth(parseInt(width, 10)),
      inputWidth = styles.getWidth(parseInt(width, 10) - 48);

    return (
      <div className={type === 'light' ? 'input-search input-search-light' : 'input-search'} style={style}>
        <input {...this.props} ref="search" style={inputWidth} value={state.value} onChange={this._onChange}/>
        <div className="search-icon" onClick={this._onClick}>
          <i className="glyphicon icon-search"></i>
        </div>
      </div>
    );
  }
}

InputSearch.defaultProps = {
  width: 150
};

export default InputSearch;
