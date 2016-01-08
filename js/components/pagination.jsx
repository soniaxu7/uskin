import React from 'react';

class Pagination extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      current: 1
    };

    this.paging = this.paging.bind(this);
  }

  componentWillMount() {
    var current = this.props.current,
      perPage = this.props.perPage,
      total = this.props.total;

    var pageMax = Math.ceil(total / perPage);
    if (typeof current === 'undefined' || current < 1) {
      current = 1;
    } else if (current > pageMax) {
      current = pageMax;
    }

    this.setState({
      current: current
    });
  }

  paging(index, e) {
    e.preventDefault();

    this.setState({
      current: index
    });

    this.props.onClick.apply(this, [e, index]);
  }

  _createPagi(totalPage, current) {
    var pagi = [];

    var midFrom = (current - 4 > 0) ? current - 2 : 2,
      midTo = (current + 4) <= totalPage ? current + 2 : totalPage - 1;

    for (let i = midFrom; i <= midTo; i++) {
      pagi.push(
        <li key={i}>
          <a href="#" className={current === i ? 'item active' : 'item'} onClick={this.paging.bind(null, i)}>{i}</a>
        </li>
      );
    }

    if (current > 4) {
      pagi.unshift(
        <li key="prevs omit">
          <a href="#" className="omit">···</a>
        </li>
      );
    }

    if (current + 4 <= totalPage) {
      pagi.push(
        <li key="nexts omit">
          <a href="#" className="omit">···</a>
        </li>
      );
    }

    pagi.unshift(
      <li key="1">
        <a href="#"
          className={current === 1 ? 'item active' : 'item'}
          onClick={current === 1 ? null : this.paging.bind(null, 1)}>1</a>
      </li>
    );
    pagi.unshift(
      <li key="prev">
        <a href="#"
          className={current === 1 ? 'prev disabled' : 'prev'}
          onClick={current === 1 ? null : this.paging.bind(null, current - 1)}>&lt;</a>
      </li>
    );

    pagi.push(
      <li key={totalPage}>
        <a href="#"
          className={current === totalPage ? 'item active' : 'item'}
          onClick={current === totalPage ? null : this.paging.bind(null, totalPage)}>{totalPage}</a>
      </li>
    );
    pagi.push(
      <li key="next">
        <a href="#"
          className={current === totalPage ? 'next disabled' : 'next'}
          onClick={current === totalPage ? null : this.paging.bind(null, current + 1)}>&gt;</a>
      </li>
    );

    return pagi;
  }

  render() {
    var props = this.props,
      perPage = props.perPage ? props.perPage : 10,
      totalPage = Math.ceil(props.total / perPage),
      current = this.state.current;

    return (
      <ul className="pagination">
        {this._createPagi(totalPage, current).map(perPagi => perPagi)}
      </ul>
    );
  }
}

export default Pagination;
