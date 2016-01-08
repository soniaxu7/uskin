import React from 'react';
import styles from '../mixins/styles.js';

class InputSearch extends React.Component {

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.props.onClick && this.props.onClick(this.refs.search.value);
  }

  render() {
    var props = this.props;

    var style = styles.getWidth(parseInt(props.width, 10)),
      inputWidth = styles.getWidth(props.type === 'light' ? parseInt(props.width, 10) - 40 : parseInt(props.width, 10) - 50);

    return (
      <div className={props.type === 'light' ? 'input-search-light' : 'input-search'} style={style}>
        <input ref="search" style={inputWidth}/>
        <div className="search-icon" onClick={this.onClick}>
          <i className="glyphicon icon-search"></i>
        </div>
      </div>
    );
  }
}

export default InputSearch;
