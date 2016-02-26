var React = require('react');
var ReactDOM = require('react-dom');
var Base = require('./confirm');

function modal(props) {

  var container = null,
    ref = null;

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

  var _props = Object.assign({}, props, {
    onAfterClose: onAfterClose
  });

  return ReactDOM.render(<Base {..._props}/>, container, function () {
    ref = this;
  });
}

module.exports = modal;
