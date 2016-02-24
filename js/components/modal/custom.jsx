import ReactDOM from 'react-dom';
import Modal from './modal';
import Button from '../button';


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

  function onClickLink() {
   
    Modal.info({
      title: '框中框',
      content: '这是框中框的内容区域',
      okText: '关闭',
      parent: ref
    });
  }

  var bd  = (
    <div className="modal-bd">
      <a href="javascript:;" onClick={onClickLink}>点击我哦</a>
      <input type="value" />
    </div>
  );
  var ft = (
    <div className="modal-ft">
      <Button value={props.okText} btnKey="create" type="delete" onClick={onClickFooter}/>
      <Button value={props.okCancel} btnKey="cancel" type="cancel" onClick={onClickFooter}/>
    </div>
  );


  var _props = Object.assign({}, props, {
    onAfterClose: onAfterClose
  });

  return ReactDOM.render(<Modal {..._props}>{bd}{ft}</Modal>, container, function () {
    ref = this;
  });
};
