import ReactDOM from 'react-dom';
import Modal from './modal';
import Tip from '../tip';
import confirm from './confirm';
import custom from './custom';

var btnMap = {
  warning: 'delete',
  danger: 'delete',
  success: 'create'
};

['info', 'success', 'warning', 'danger'].forEach((m) => {
  Modal[m] = function(props) {
    var _props = Object.assign({}, props, {
      content: <Tip content={props.content} type={m} />,
      btnType: btnMap[m]
    });
    return confirm(_props);
  };
});

Modal.confirm = function(props) {
  var _props = Object.assign({}, props, {
    content: props.content,
    btnType: 'create'
  });
  return confirm(_props);
};

Modal.custom = function(props) {
  return custom(props);
};

export default Modal;
