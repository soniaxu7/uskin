import ReactDOM from 'react-dom';
import Modal from './modal';
import Button from '../button'

export default function(props) {
  var container = null,
    mask = null,
    doc = document,
    ref = null;

  (function() {
    var root = doc.getElementById('modal-container');
    if (!root) {
      root = doc.createElement('div');
      root.id = 'modal-container';

      mask = doc.createElement('div');
      mask.classList.add('modal-mask');
      root.appendChild(mask);

      doc.body.appendChild(root);
    }
    container = doc.createElement('div');
    root.appendChild(container);
  })();

  function destory() {
    ReactDOM.unmountComponentAtNode(container);
    container.parentNode.removeChild(container);
  }

  function onAfterClose() {
    destory();
  }

  function onClickFooter() {
    ref.onClose();
  }

  var bd  = (
    <div className="modal-bd">
      {props.content}
    </div>
  );
  var ft = (
    <div className="modal-ft">
      <Button value={props.okText} btnKey="create" type={props.btnType} onClick={onClickFooter}/>
    </div>
  );


  var _props = Object.assign({}, props, {
    onAfterClose: onAfterClose
  });

  return ReactDOM.render(<Modal {..._props}>{bd}{ft}</Modal>, container, function () {
    ref = this;
  });
  };
