import React, {PropTypes} from 'react';

function noop() {}

class Modal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      className: 'modal',
      visible: true
    };
    this.mask = document.querySelector('.modal-mask');

    ['onClose', 'hide', 'show'].forEach((func) => {
      this[func] = this[func].bind(this);
    });
  }

  onClose() {
    if (this.props.parent) {
      this.hide(true);
      this.props.parent.show(true);
    } else {
      this.hide();
    }
  }

  hide(keepMask) {
    const that = this;
    const props = this.props;

    if (!keepMask) {
      this.mask.classList.add('modal-mask-leave');
      this.mask.classList.add('modal-mask-leave-active');
    }

    this.setState({
      className: 'modal modal-leave modal-leave-active'
    }, () => {
      setTimeout(function() {
        that.setState({
          className: 'modal hide'
        });
        if (!keepMask) {
          that.mask.classList.remove('modal-mask-leave');
          that.mask.classList.remove('modal-mask-leave-active');
          that.mask.classList.add('hide');
        }
        if ((!keepMask && !props.parent) || (keepMask && props.parent)) {
          props.onAfterClose();
        }
      }, props.animationDuration);
    });
  }

  show(keepMask) {
    const that = this;
    if (!keepMask) {
      that.mask.classList.remove('hide');
      this.mask.classList.add('modal-mask-enter');
      this.mask.classList.add('modal-mask-enter-active');
    }
    this.setState({
      className: 'modal modal-enter modal-enter-active'
    }, () => {
      setTimeout(function() {
        that.setState({
          className: 'modal'
        });
        if (!keepMask) {
          that.mask.classList.remove('modal-mask-enter');
          that.mask.classList.remove('modal-mask-enter-active');
        }
      }, this.props.animationDuration);
    });
  }

  componentWillMount() {
    this.setState({
      className: 'modal modal-enter'
    });
    this.props.parent && this.props.parent.hide(true);
  }

  componentDidMount() {
    if (this.props.parent) {
      this.show(true);
    } else {
      this.show();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible === this.props.visible) {
      return;
    }
    if (nextProps.visible === true) {
      this.show();
    } else if (this.props.parent) {
      this.hide(true);
      this.props.parent.show(true);
    } else {
      this.hide();
    }
  }

  render() {
    const props = this.props;

    return (
      <div className={this.state.className} style={{width: props.width}}>
        {
          props.title ?
            <div className="modal-hd">
              <h6>{props.title}</h6>
              <span className="glyphicon icon-close close" onClick={this.onClose}></span>
            </div>
          : null
        }
        {props.children}
      </div>
    );
  }
}

Modal.propTypes = {
  parent: PropTypes.instanceOf(Modal),
  title: PropTypes.string,
  width: PropTypes.number,
  visible: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  animationDuration: PropTypes.number,
  onAfterClose: PropTypes.func
};

Modal.defaultProps = {
  width: 540,
  animationDuration: 200,
  visible: true,
  onAfterClose: noop
};

export default Modal;
