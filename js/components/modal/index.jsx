import Modal from './modal';
import Tip from '../tip';
import shim from './shim';

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
    return shim(_props);
  };
});

export default Modal;
