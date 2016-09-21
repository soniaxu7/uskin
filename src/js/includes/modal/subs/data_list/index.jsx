var React = require('react');

class DataList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data ? this.props.data : [],
      hide: false
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.hide === nextState.hide) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    this.props.onAction(this.props.field, this.state);
  }

  render() {
    var props = this.props;
    var state = this.state;

    return (
      <div className={'modal-row data-list-row' + (state.hide ? ' hide' : '')}>
        {
          state.data.map((ele, i) =>
            <span key={i} className={'item' + (props.hasStatus ? ' has-status' : '')}>
              <span className="item-name">
                <i className={'glyphicon icon-' + props.icon} />
                {ele.name || '(' + ele.id.substr(0, 8) + ')'}
              </span>
              {
                props.hasStatus ?
                  <span className="item-status">
                    {' ( '}
                    {props.getStatusIcon(ele.status)}
                    {' )'}
                  </span>
                : null
              }
            </span>
          )
        }
      </div>
    );
  }
}

module.exports = DataList;
