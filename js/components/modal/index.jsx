import React from 'react';
import Modal from './modal';
import Tip from '../tip/index';
import shim from './shim';

var btnMap = {
  danger: 'delete',
  success: 'create',
  warning: 'warning'
};

var iconMap = {
  danger: 'deleted',
  info: 'warning',
  success: 'active',
  warning: 'warning'
};

['info', 'success', 'warning', 'danger'].forEach((m) => {
  Modal[m] = function(props) {
    var content;

    if (props.title) {
      content = <Tip content={props.content} type={m} />;
    } else {
      content = (
        <div className="modal-reminder-content">
          <div className="modal-reminder-title">
            <i className={'glyphicon icon-status-' + iconMap[m] + ' ' + m} />
            <span>{m.charAt(0).toUpperCase() + m.slice(1)}</span>
          </div>
          <div className="modal-reminder-message">
            {props.content}
          </div>
        </div>
      );
    }

    var _props = Object.assign({}, props, {
      content: content,
      btnType: btnMap[m]
    });
    return shim(_props);
  };
});

export default Modal;
