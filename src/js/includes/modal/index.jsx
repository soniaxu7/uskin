// require('./style/index.less');

var React = require('react');
var ReactDOM = require('react-dom');
var Base = require('./base');

function modal(props) {

  var container = null;

  (function() {
    var mask = null,
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

    if(props.destroyPrevious && root.childNodes.length > 1) {
      var previousModal = root.lastChild;
      previousModal.parentNode.removeChild(previousModal);
    }

    container = doc.createElement('div');
    root.appendChild(container);
  })();

  function destroy() {
    ReactDOM.unmountComponentAtNode(container);
    container.parentNode.removeChild(container);
  }

  function onAfterClose() {
    destroy();
  }

  var _props = Object.assign({}, props, {
    onAfterClose: onAfterClose
  });

  return ReactDOM.render(<Base {..._props}/>, container);
}

module.exports = modal;
