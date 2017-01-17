import React, {PropTypes} from 'react';

function noop() {}

class Pagination extends React.Component {

  constructor(props) {
    super(props);

    let current = props.current;
    let total = props.total;
    if (current < 1) {
      current = 1;
    }
    if (total < 1) {
      total = 1;
    }
    if (current > total) {
      current = total;
    }
    this.state = {
      current: current
    };

    ['onClick', 'onClickLabel'].forEach((func) => {
      this[func] = this[func].bind(this);
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      current: nextProps.current
    });
  }

  onClick(index, e) {
    e.preventDefault();

    this.setState({
      current: index
    });

    this.props.onClick(index, e);
  }

  onClickLabel(status, e) {
    e.preventDefault();

    this.props.onClickLabel(status, e);
  }

  renderLabelOnly(label) {
    let labelData = [];
    if (label.first) {
      labelData.push({
        key: 'first',
        icon: 'double-arrow-left'
      });
    }
    if (label.prev) {
      labelData.push({
        key: 'prev',
        disabled: label.prevDisabled,
        icon: 'arrow-left'
      });
    }
    if (label.next) {
      labelData.push({
        key: 'next',
        disabled: label.nextDisabled,
        icon: 'arrow-right'
      });
    }
    if (label.last) {
      labelData.push({
        key: 'last',
        icon: 'double-arrow-right'
      });
    }

    let pagi = [];
    labelData.forEach((ele) => {
      pagi.push(
        <li key={ele.key}>
          <a className={ele.key + (ele.disabled ? ' disabled' : '')}
            onClick={ele.disabled ? null : this.onClickLabel.bind(null, ele.key)}>
            <i className={'glyphicon icon-' + ele.icon}></i>
          </a>
        </li>
      );
    });

    return pagi;
  }

  renderPageNumber(total, current) {
    let pagi = [];

    pagi.push(
      <li key={current}>
        <a className="item active">{current}</a>
      </li>
    );

    for (let i = 1; i <= 2; i++) {
      let prevSibling = current - i;
      if (prevSibling >= 1 && prevSibling < current) {
        pagi.unshift(
          <li key={prevSibling}>
            <a className="item" onClick={this.onClick.bind(null, prevSibling)}>{prevSibling}</a>
          </li>
        );
      }
      let nextSibling = current + i;
      if (nextSibling <= total && current < nextSibling) {
        pagi.push(
          <li key={nextSibling}>
            <a className="item" onClick={this.onClick.bind(null, nextSibling)}>{nextSibling}</a>
          </li>
        );
      }
    }

    if (current > 3) {
      if (current > 4) {
        pagi.unshift(
          <li key="prevs omit">
            <a className="omit">···</a>
          </li>
        );
      }
      pagi.unshift(
        <li key="1">
          <a className="item"
            onClick={this.onClick.bind(null, 1)}>1</a>
        </li>
      );
    }

    if (current + 3 <= total) {
      if (current + 4 <= total) {
        pagi.push(
          <li key="nexts omit">
            <a className="omit">···</a>
          </li>
        );
      }
      pagi.push(
        <li key={total}>
          <a className="total"
            onClick={this.onClick.bind(null, total)}>{total}</a>
        </li>
      );
    }

    return pagi;
  }

  renderPagination(total, current) {
    if (current < 1) {
      current = 1;
    }
    if (total < 1) {
      total = 1;
    }
    if (current > total) {
      current = total;
    }

    let pagi = [];

    pagi.push(
      <li key="prev">
        <a className={'prev' + (current === 1 ? ' disabled' : '')}
          onClick={current === 1 ? null : this.onClick.bind(null, current - 1)}>
          <i className="glyphicon icon-arrow-left"></i>
        </a>
      </li>
    );

    pagi.push(this.renderPageNumber(total, current));

    pagi.push(
      <li key="next">
        <a className={'next' + (current === total ? ' disabled' : '')}
          onClick={current === total ? null : this.onClick.bind(null, current + 1)}>
          <i className="glyphicon icon-arrow-right"></i>
        </a>
      </li>
    );

    return pagi;
  }

  render() {
    const props = this.props;
    const current = this.state.current;

    return (
      <ul className="pagination">
        {
          this.props.labelOnly ?
            this.renderLabelOnly(props.label)
          : this.renderPagination(props.total, current)
        }
      </ul>
    );
  }

}

Pagination.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
  labelOnly: PropTypes.bool,
  label: PropTypes.shape({
    prev: PropTypes.bool,
    next: PropTypes.bool,
    first: PropTypes.bool,
    last: PropTypes.bool
  }),
  onClick: PropTypes.func,
  onClickLabel: PropTypes.func
};

Pagination.defaultProps = {
  current: 1,
  labelOnly: false,
  onClick: noop,
  onClickLabel: noop
};

export default Pagination;
