var React = require('react');
var {Modal, Button} = require('uskin');
var UskinTip = require('uskin').Tip;

var Input = require('./subs/input/index');
var Text = require('./subs/text/index');
var Tip = require('./subs/tip/index');
var Checkbox = require('./subs/checkbox/index');
var IconLabel = require('./subs/icon_label/index');
var TextArea = require('./subs/textarea/index');
var Select = require('./subs/select/index');
var SelectGroup = require('./subs/select_group/index');
var SelectSingle = require('./subs/select_single/index');
var Tab = require('./subs/tab/index');
var GroupSelect = require('./subs/group_select/index');
var Slider = require('./subs/slider/index');
var Progress = require('./subs/progress/index');
var ShortTip = require('./subs/short_tip/index');
var DisplayBox = require('./subs/display_box/index');
var DataList = require('./subs/data_list/index');
var Adapter = require('./subs/adapter/index');

class ModalBase extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      disabled: this.props.config.btn.disabled
    };

    this.onConfirm = this.onConfirm.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onAction = this.onAction.bind(this);
    // this.onPop = this.onPop.bind(this);
  }

  onAction(field, state) {
    this.props.onAction(field, state, this.refs);
  }

  initialize() {
    var props = this.props;

    return props.config.fields.map((m) => {
      switch(m.type) {
        case 'text':
          return <Text key={m.field} ref={m.field} {...m} onAction={this.onAction} />;
        case 'input':
          return <Input key={m.field} ref={m.field} {...m} onAction={this.onAction} />;
        case 'error':
        case 'warning':
        case 'info':
          return <Tip key={m.field} ref={m.field} {...m} onAction={this.onAction} />;
        case 'checkbox':
          return <Checkbox key={m.field} ref={m.field} {...m} onAction={this.onAction} />;
        case 'icon_label':
          return <IconLabel key={m.field} ref={m.field} {...m} onAction={this.onAction} />;
        case 'textarea':
          return <TextArea key={m.field} ref={m.field} {...m} onAction={this.onAction} />;
        case 'select':
          return <Select key={m.field} ref={m.field} {...m} onAction={this.onAction} />;
        case 'select_group':
          return <SelectGroup key={m.field} ref={m.field} {...m} onAction={this.onAction} />;
        case 'select_single':
          return <SelectSingle key={m.field} ref={m.field} {...m} onAction={this.onAction} />;
        case 'tab':
          return <Tab key={m.field} ref={m.field} {...m} onAction={this.onAction} />;
        case 'group_select':
          return <GroupSelect key={m.field} ref={m.field} {...m} onAction={this.onAction} />;
        case 'slider':
          return <Slider key={m.field} ref={m.field} {...m} onAction={this.onAction} />;
        case 'progress':
          return <Progress key={m.field} ref={m.field} {...m} onAction={this.onAction} />;
        case 'short_tip':
          return <ShortTip key={m.field} ref={m.field} {...m} onAction={this.onAction} />;
        case 'display_box':
          return <DisplayBox key={m.field} ref={m.field} {...m} onAction={this.onAction} />;
        case 'data_list':
          return <DataList key={m.field} ref={m.field} {...m} onAction={this.onAction} />;
        case 'adapter':
          return <Adapter key={m.field} ref={m.field} {...m} onAction={this.onAction} />;
        default:
          return null;
      }
    });
  }

  componentDidMount() {
    this.props.onInitialize && this.props.onInitialize(this.refs);
  }

  onConfirm() {
    var isEmpty = false;
    var refs = this.refs;
    this.props.config.fields.forEach((m) => {
      if (m.required && (m.type === 'input' || m.type === 'textarea') && !refs[m.field].state.value && !refs[m.field].state.hide) {
        refs[m.field].setState({
          error: true
        });
        isEmpty = true;
      }
    });
    if (isEmpty) {
      return;
    }

    this.setState({
      disabled: true
    });
    this.props.onConfirm && this.props.onConfirm(refs, (success, errorMessage) => {
      if (success) {
        this.setState({
          visible: false
        });

        if(this.props.destroyPrevious) {
          var root = document.getElementById('modal-container');
          root.firstChild.classList.add('hide');
        }
      } else {
        if (errorMessage) {
          this.setState({
            errorMessage: errorMessage,
            disabled: false
          });
        } else {
          this.setState({
            disabled: false
          });
        }
      }

    });
  }

  // onPop() {
  //   deleteModal({
  //     title: '删除通用弹窗测试',
  //     content: '测试，这是内容区域',
  //     deleteText: '删除',
  //     cancelText: '取消',
  //     onDelete: function(data, cb) {
  //       console.log('触发删除事件:', data);
  //       setTimeout(function() {
  //         cb(true);
  //       }, 1000);
  //     },
  //     parent: this.refs.modal
  //   });
  // }

  onCancel() {
    this.setState({
      visible: false
    });
    this.props.onCancel && this.props.onCancel();
  }

  render() {
    var props = this.props,
      state = this.state,
      btn = props.config.btn;

    var title = props.config.title.map(m => m).join('');

    return (
      <Modal ref="modal" {...props} title={title} visible={state.visible}>
        <div className="modal-bd com-modal-common">
          {this.initialize()}
          <div className={state.errorMessage ? 'modal-row tip-row' : 'modal-row tip-row hide'}>
            <UskinTip type="danger" content={state.errorMessage} showIcon={true} width={466} />
          </div>
        </div>
        <div className="modal-ft">
          <Button ref="btn" value={btn.value} disabled={state.disabled} type={btn.type} onClick={this.onConfirm}/>
          <Button value="Cancel" btnKey="cancel" type="cancel" onClick={this.onCancel}/>
        </div>
      </Modal>
    );
  }
}

module.exports = ModalBase;
