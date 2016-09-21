var Modal = require('../../modal/index');
var config = require('./config.json');
var switchModal2 = require('../switch_modal_2/index');

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
      var data = {};
      data.volume_name = refs.name.state.value;
      data.volume_type = refs.type.state.value;

      switchModal2(data, refs.modal);
      console.log('switch modal 1')
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
