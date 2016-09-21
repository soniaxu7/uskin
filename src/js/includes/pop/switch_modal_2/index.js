var Modal = require('../../modal/index');
var config = require('./config.json');

function pop(obj, parent, callback) {

  var props = {
    parent: parent,
    config: config,
    destroyPrevious: true,

    onInitialize: function(refs) {
      refs.fip.setState({
        value: refs.fip.state.data[0].id
      });
    },
    onConfirm: function(refs, cb) {
      obj.server = refs.server.props.text;
      obj.floating_ip = refs.fip.state.value;

      console.log('switch modal 2', obj);
      callback && callback();
      cb(true);
    },
    onAction: function(field, status, refs) {}
  };

  Modal(props);
}

module.exports = pop;
