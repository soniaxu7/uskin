import React from 'react';
import ReactDOM from 'react-dom';
import Base from './confirm';

function modal(props) {

  let container = null;

  let mask = null,
    doc = document,
    root = doc.getElementById('modal-container');

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


  function destory() {
    ReactDOM.unmountComponentAtNode(container);
    container.parentNode.removeChild(container);
  }

  function onAfterClose() {
    destory();
  }

  let _props = Object.assign({}, props, {
    onAfterClose: onAfterClose
  });

  return ReactDOM.render(<Base {..._props} />, container);
}

module.exports = modal;
