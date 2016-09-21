var Modal = require('../../modal/index');
var config = require('./config.json');

function pop(obj, parent, callback) {
  var props = {
    parent: parent,
    config: config,
    onInitialize: function(refs) {},
    onConfirm: function(refs, cb) {
      var data = {
        name: refs.network_name.state.value
      };
      // check vlan
      if (refs.enable_vlan.state.checked) {
        data['provider:network_type'] = 'vlan';
        let v = refs.vlan_id.state.value.trim();
        if (v !== '') {
          data['provider:segmentation_id'] = v;
          data['provider:physical_network'] = 'physnet3';
        }
      }

      if (!refs.enable_security.state.checked) {
        data.port_security_enabled = false;
      }
      data.net_address = refs.net_address.state.value;
      cb(true);
    },
    onAction: function(field, status, refs) {
      var subnetChecked = refs.create_subnet.state.checked;
      switch (field) {
        case 'create_subnet':
          refs.subnet_name.setState({
            hide: !subnetChecked
          });
          refs.net_address.setState({
            hide: !subnetChecked
          });
          refs.btn.setState({
            disabled: subnetChecked
          });
          break;
        case 'enable_vlan':
          refs.vlan_id.setState({
            hide: !refs.enable_vlan.state.checked
          });
          break;
        case 'net_address':
          var netState = refs.net_address.state,
            testAddr = /^(((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))\/(\d|1\d|2\d|3[0-2])$/;
          if(refs.create_subnet.state.checked) {
            if(!testAddr.test(netState.value)) {
              if(netState.value !== '') {
                refs.net_address.setState({
                  error: true
                });
                refs.btn.setState({
                  disabled: true
                });
              } else {
                refs.net_address.setState({
                  error: false
                });
                refs.btn.setState({
                  disabled: true
                });
              }
            } else {
              refs.net_address.setState({
                error: false
              });
              refs.btn.setState({
                disabled: false
              });
            }
          }
          break;
        default:
          break;
      }
    }
  };

  Modal(props);
}

module.exports = pop;
