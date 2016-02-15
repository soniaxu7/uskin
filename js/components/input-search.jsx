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
    var props = this.props,
      state = this.state;

    var style = styles.getWidth(parseInt(props.width, 10)),
      inputWidth = styles.getWidth(props.type === 'light' ? parseInt(props.width, 10) - 40 : parseInt(props.width, 10) - 50);

    return (
      <div className={props.type === 'light' ? 'input-search input-search-light' : 'input-search'} style={style}>
        <input ref="search" style={inputWidth} text={state.value} onChange={this._onChange}/>
        <div className="search-icon" onClick={this._onClick}>
          <i className="glyphicon icon-search"></i>
        </div>
      </div>
    );
  }
}

export default InputSearch;
