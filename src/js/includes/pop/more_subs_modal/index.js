var Modal = require('../../modal/index');
var config = require('./config.json');

function pop(obj, parent, callback) {

  var props = {
    parent: parent,
    config: config,

    onInitialize: function(refs) {
      refs.fip.setState({
        value: refs.fip.state.data[0].id
      });
    },
    onConfirm: function(refs, cb) {
      console.log('Server: ' + refs.server.props.text +
        ', Floating-ip: ' + refs.fip.state.value);
      cb(true);
    },
    onAction: function(field, status, refs) {}
  };

  Modal(props);
}

module.exports = pop;
