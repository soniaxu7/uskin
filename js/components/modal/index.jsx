import React from 'react';
import Modal from './modal';
import shim from './shim';

const btnMap = {
  danger: 'delete',
  success: 'create',
  warning: 'warning'
};

const iconMap = {
  danger: 'deleted',
  info: 'warning',
  success: 'active',
  warning: 'warning'
};

['info', 'success', 'warning', 'danger'].forEach((m) => {
  Modal[m] = function(props) {
    let content = (
      <div className="modal-reminder-content">
        <div className="modal-reminder-title">
          <i className={'glyphicon icon-status-' + iconMap[m] + ' ' + m} />
          <span>
          {
            props.title ?
              props.title
            : m.charAt(0).toUpperCase() + m.slice(1)
          }
          </span>
        </div>
        <div className="modal-reminder-message">
          {props.content}
        </div>
      </div>
    );

    let _props = Object.assign({}, props, {
      content: content,
      btnType: btnMap[m],
      title: undefined
    });
    return shim(_props);
  };
});

export default Modal;
