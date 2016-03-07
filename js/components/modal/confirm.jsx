import React from 'react';
import Modal from './modal';
import Button from '../button';

class ModalBase extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      disabled: false
    };

    this.onConfirm = this.onConfirm.bind(this);
  }

  onConfirm() {
    this.setState({
      visible: false
    });
    this.props.onConfirm && this.props.onConfirm();
  }

  render() {
    var props = this.props,
      state = this.state;

    return (
      <Modal {...props} visible={state.visible}>
        <div className="modal-bd">
          {props.content}
        </div>
        <div className="modal-ft">
          <Button value={props.okText} disabled={state.disabled} btnKey="create" type={props.btnType} onClick={this.onConfirm}/>
        </div>
      </Modal>
    );
  }
}

module.exports = ModalBase;
