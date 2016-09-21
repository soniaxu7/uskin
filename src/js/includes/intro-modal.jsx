var React = require('react');
var uskin = require('uskin');
var {Modal, Table, Button} = uskin;
var customizedModal1 = require('./pop/customized_modal_1/index');
var customizedModal2 = require('./pop/customized_modal_2/index');
var checkboxModal = require('./pop/checkbox_modal/index');
var moreSubsModal = require('./pop/more_subs_modal/index');
var switchModal1 = require('./pop/switch_modal_1/index');

function displayClose(e) {
  var tarID = e.target.id;
  var display = document.getElementById('s'+tarID).style.display;
  (display === 'none') && (document.getElementById('s'+tarID).style.display = 'block');
  (display === 'block') && (document.getElementById('s'+tarID).style.display = 'none');
}

var style = {margin: 20};

class IntroModal extends React.Component {
  render() {
    return (
      <div>
        <article>
          <h1>Customized Modal</h1>
          <p>On the basis of elemental operation of modal defined in uskin, we can fill the content of pop with abundant customized sub-components.</p>
        </article>

        <div className="demos">
          <h4>Code Demos</h4>
          <div className="left">
            <div className="contain">
              <div className="component">
                <div style={style}>
                  <Button value="Customized Modal 1" onClick={customizedModal1.bind(this)} />
                </div>
                <div style={style}>
                  <Button value="Customized Modal 2" onClick={customizedModal2.bind(this)} />
                </div>
              </div>
              <div>
                <p className="title">Modals with Elementary Sub-components</p>
                <p className="content">Examples of Modal which is supported by the customized sub-components, such as label, input, select and tab.</p>
                <p className="code-show" id="code1" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode1" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Modal = uskin.Modal;<br/><br/>
                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&lt;div style=&#123;style}><br/>
                        &nbsp;&nbsp;&lt;Button value="Customized Modal 1" onClick=&#123;customizedModal1.bind(this)} /><br/>
                      &nbsp;&lt;/div><br/>
                      &nbsp;&lt;div style=&#123;style}><br/>
                        &nbsp;&nbsp;&lt;Button value="Customized Modal 2" onClick=&#123;customizedModal2.bind(this)} /><br/>
                      &nbsp;&lt;/div><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
            <div className="contain">
              <div className="component">
                <div style={style}>
                  <Button value="Checkbox Modal" onClick={checkboxModal.bind(this)} />
                </div>
              </div>
              <div>
                <p className="title">Modal with Checkbox</p>
                <p className="content">An example of Modal which is supported by the customized sub-components.</p>
                <p className="code-show" id="code3" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode3" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Modal = uskin.Modal;<br/><br/>
                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&lt;Button value="Checkbox Modal" onClick=&#123;checkboxModal.bind(this)} /><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="contain">
              <div className="component">
                <div style={style}>
                  <Button value="Switch Modals" onClick={switchModal1.bind(this)} />
                </div>
              </div>
              <div>
                <p className="title">Switch Modals</p>
                <p className="content">An example of Modal which is able to open a second modal as 'Next'.
                  Convenient to customize your operation steps sequentially.</p>
                <p className="code-show" id="code2" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode2" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Modal = uskin.Modal;<br/><br/>
                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&lt;Button value="Switch Modals" onClick=&#123;switchModal1.bind(this)} /><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
            <div className="contain">
              <div className="component">
                <div style={style}>
                  <Button value="More Subs Modal" onClick={moreSubsModal.bind(this)} />
                </div>
              </div>
              <div>
                <p className="title">Modals with More Sub-components</p>
                <p className="content">An example of Modal which is supported by the customized sub-components.</p>
                <p className="code-show" id="code4" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode4" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Modal = uskin.Modal;<br/><br/>
                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&lt;Button value="More Subs Modal" onClick=&#123;moreSubsModal.bind(this)} /><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

module.exports = IntroModal;
