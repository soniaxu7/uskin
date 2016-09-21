var Modal = require('../../modal/index');
var config = require('./config.json');

function pop(obj, parent, callback) {

  var props = {
    parent: parent,
    config: config,

    onInitialize: function(refs) {
      refs.type.setState({
        value: refs.type.state.data[0]
      });
    },
    onConfirm: function(refs, cb) {
      console.log('volume name: ' + refs.name.state.value +
        ', volume type: ' + refs.type.state.value);
      cb(true);
    },
    onAction: function(field, status, refs) {
      if(field === 'name') {
        if(refs.name.state.value !== '') {
          refs.btn.setState({
            disabled: false
          });
        } else {
          refs.btn.setState({
            disabled: true
          });
        } 
      }
    }
  };

  Modal(props);
}

module.exports = pop;
