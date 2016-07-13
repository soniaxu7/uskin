var React = require('react');
var uskin = require('uskin');
var Breadcrumb = uskin.Breadcrumb;
var Table = uskin.Table;

function displayClose(e) {
  var tarID = e.target.id;
  var display = document.getElementById('s'+tarID).style.display;
  (display === 'none') && (document.getElementById('s'+tarID).style.display = 'block');
  (display === 'block') && (document.getElementById('s'+tarID).style.display = 'none');
}

class CommonIcon extends React.Component {
  render() {
    return (
      <div>
        <article>
          <h1>Common Icons</h1>
          <p>Some useful icons.</p>
        </article>
        <div className="demos">
          <h4>Code Demos</h4>
          <div className="left">
            <div className="contain">
              <div className="component">
                <div className="icon-list">
                  <div className="icon-item"><i className="glyphicon icon-status-active" /><span style={{marginLeft: 10}}>Icon Status Active</span></div>
                  <div className="icon-item"><i className="glyphicon icon-power-on" /><span style={{marginLeft: 10}}>Icon Power On</span></div>
                  <div className="icon-item"><i className="glyphicon icon-edit" /><span style={{marginLeft: 10}}>Icon Edit</span></div>
                  <div className="icon-item"><i className="glyphicon icon-instance" /><span className="intro-icon-name">icon-instance</span></div>
                </div>
              </div>
              <div>
                <p className="title">Usage of Icons</p>
                <p className="content">Using icons by quoting the classnames. The color can be defined in css file.</p>
                <p className="code-show" id="code1" onClick={displayClose}>+</p>
              </div>
              <div className="code" id="scode1" style={{display: 'none'}}>
                <pre>
                  <code className="javascript">
                    var Breadcrumb = uskin.Breadcrumb;<br/><br/>
                    ReactDOM.render(&lt;div><br/>
                      &nbsp;&lt;div><br/>
                        &nbsp;&nbsp;&lt;i className="glyphicon icon-status-active" /><br/>
                        &nbsp;&nbsp;&lt;span style=&#123;&#123;marginLeft: 10}}>Icon Status Active&lt;/span><br/>
                      &nbsp;&lt;/div><br/>
                      &nbsp;&lt;div><br/>
                        &nbsp;&nbsp;&lt;i className="glyphicon icon-power-on" /><br/>
                        &nbsp;&nbsp;&lt;span style=&#123;&#123;marginLeft: 10}}>Icon Power On&lt;/span><br/>
                      &nbsp;&lt;/div><br/>
                      &nbsp;&lt;div><br/>
                        &nbsp;&nbsp;&lt;i className="glyphicon icon-edit" /><br/>
                        &nbsp;&nbsp;&lt;span style=&#123;&#123;marginLeft: 10}}>Icon Edit&lt;/span><br/>
                      &nbsp;&lt;/div><br/>
                      &nbsp;&lt;div><br/>
                        &nbsp;&nbsp;&lt;i className="glyphicon icon-instance" /><br/>
                        &nbsp;&nbsp;&lt;span style=&#123;&#123;marginLeft: 10}}>Icon Instance&lt;/span><br/>
                      &nbsp;&lt;/div><br/>
                    &lt;/div>, mountNode);
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <div className="references">
          <h4>Avaliable Icons</h4>
          <div className="icon-list">
            <div className="alphabet">A</div>
            <div className="icon-item"><i className="glyphicon icon-account-charge" /><span className="intro-icon-name">icon-account-charge</span></div>
            <div className="icon-item"><i className="glyphicon icon-active-yes" /><span className="intro-icon-name">icon-active-yes</span></div>
            <div className="icon-item"><i className="glyphicon icon-active" /><span className="intro-icon-name">icon-active</span></div>
            <div className="icon-item"><i className="glyphicon icon-app-center" /><span className="intro-icon-name">icon-app-center</span></div>
            <div className="icon-item"><i className="glyphicon icon-arrow-down" /><span className="intro-icon-name">icon-arrow-down</span></div>
            <div className="icon-item"><i className="glyphicon icon-arrow-left" /><span className="intro-icon-name">icon-arrow-left</span></div>
            <div className="icon-item"><i className="glyphicon icon-arrow-right" /><span className="intro-icon-name">icon-arrow-right</span></div>
            <div className="icon-item"><i className="glyphicon icon-arrow-up" /><span className="intro-icon-name">icon-arrow-up</span></div>
            <div className="icon-item"><i className="glyphicon icon-associate" /><span className="intro-icon-name">icon-associate</span></div>
            <div className="icon-item"><i className="glyphicon icon-avatar" /><span className="intro-icon-name">icon-avatar</span></div>

            <div className="alphabet">B</div>
            <div className="icon-item"><i className="glyphicon icon-billing-record" /><span className="intro-icon-name">icon-billing-record</span></div>
            <div className="icon-item"><i className="glyphicon icon-billing" /><span className="intro-icon-name">icon-billing</span></div>
            <div className="icon-item"><i className="glyphicon icon-bucket" /><span className="intro-icon-name">icon-bucket</span></div>

            <div className="alphabet">C</div>
            <div className="icon-item"><i className="glyphicon icon-cache-config" /><span className="intro-icon-name">icon-cache-config</span></div>
            <div className="icon-item"><i className="glyphicon icon-cache" /><span className="intro-icon-name">icon-cache</span></div>
            <div className="icon-item"><i className="glyphicon icon-charge-record" /><span className="intro-icon-name">icon-charge-record</span></div>
            <div className="icon-item"><i className="glyphicon icon-close" /><span className="intro-icon-name">icon-close</span></div>
            <div className="icon-item"><i className="glyphicon icon-collaboration" /><span className="intro-icon-name">icon-collaboration</span></div>
            <div className="icon-item"><i className="glyphicon icon-create" /><span className="intro-icon-name">icon-create</span></div>

            <div className="alphabet">D</div>
            <div className="icon-item"><i className="glyphicon icon-database-config" /><span className="intro-icon-name">icon-database-config</span></div>
            <div className="icon-item"><i className="glyphicon icon-database" /><span className="intro-icon-name">icon-database</span></div>
            <div className="icon-item"><i className="glyphicon icon-delete" /><span className="intro-icon-name">icon-delete</span></div>
            <div className="icon-item"><i className="glyphicon icon-disable" /><span className="intro-icon-name">icon-disable</span></div>
            <div className="icon-item"><i className="glyphicon icon-dissociate" /><span className="intro-icon-name">icon-dissociate</span></div>
            <div className="icon-item"><i className="glyphicon icon-domain" /><span className="intro-icon-name">icon-domain</span></div>
            <div className="icon-item"><i className="glyphicon icon-double-arrow-left" /><span className="intro-icon-name">icon-double-arrow-left</span></div>
            <div className="icon-item"><i className="glyphicon icon-double-arrow-right" /><span className="intro-icon-name">icon-double-arrow-right</span></div>
            <div className="icon-item"><i className="glyphicon icon-download" /><span className="intro-icon-name">icon-download</span></div>
            <div className="icon-item"><i className="glyphicon icon-dropdown" /><span className="intro-icon-name">icon-dropdown</span></div>

            <div className="alphabet">E</div>
            <div className="icon-item"><i className="glyphicon icon-edit" /><span className="intro-icon-name">icon-edit</span></div>
            <div className="icon-item"><i className="glyphicon icon-enable" /><span className="intro-icon-name">icon-enable</span></div>
            <div className="icon-item"><i className="glyphicon icon-eye" /><span className="intro-icon-name">icon-eye</span></div>

            <div className="alphabet">F</div>
            <div className="icon-item"><i className="glyphicon icon-file-sharing" /><span className="intro-icon-name">icon-file-sharing</span></div>
            <div className="icon-item"><i className="glyphicon icon-file" /><span className="intro-icon-name">icon-file</span></div>
            <div className="icon-item"><i className="glyphicon icon-filter-collapse" /><span className="intro-icon-name">icon-filter-collapse</span></div>
            <div className="icon-item"><i className="glyphicon icon-filter-expand" /><span className="intro-icon-name">icon-filter-expand</span></div>
            <div className="icon-item"><i className="glyphicon icon-flavor-setting" /><span className="intro-icon-name">icon-flavor-setting</span></div>
            <div className="icon-item"><i className="glyphicon icon-flavor" /><span className="intro-icon-name">icon-flavor</span></div>
            <div className="icon-item"><i className="glyphicon icon-floating-ip" /><span className="intro-icon-name">icon-floating-ip</span></div>

            <div className="alphabet">G</div>
            <div className="icon-item"><i className="glyphicon icon-g-admin" /><span className="intro-icon-name">icon-g-admin</span></div>
            <div className="icon-item"><i className="glyphicon icon-g-bill" /><span className="intro-icon-name">icon-g-bill</span></div>
            <div className="icon-item"><i className="glyphicon icon-g-dashboard" /><span className="intro-icon-name">icon-g-dashboard</span></div>
            <div className="icon-item"><i className="glyphicon icon-g-vmware" /><span className="intro-icon-name">icon-g-vmware</span></div>
            <div className="icon-item"><i className="glyphicon icon-global" /><span className="intro-icon-name">icon-global</span></div>

            <div className="alphabet">H</div>
            <div className="icon-item"><i className="glyphicon icon-help" /><span className="intro-icon-name">icon-help</span></div>
            <div className="icon-item"><i className="glyphicon icon-host" /><span className="intro-icon-name">icon-host</span></div>

            <div className="alphabet">I</div>
            <div className="icon-item"><i className="glyphicon icon-image" /><span className="intro-icon-name">icon-image</span></div>
            <div className="icon-item"><i className="glyphicon icon-instance" /><span className="intro-icon-name">icon-instance</span></div>
            <div className="icon-item"><i className="glyphicon icon-invoice" /><span className="intro-icon-name">icon-invoice</span></div>

            <div className="alphabet">K</div>
            <div className="icon-item"><i className="glyphicon icon-keypair" /><span className="intro-icon-name">icon-keypair</span></div>

            <div className="alphabet">L</div>
            <div className="icon-item"><i className="glyphicon icon-lb" /><span className="intro-icon-name">icon-lb</span></div>
            <div className="icon-item"><i className="glyphicon icon-listener" /><span className="intro-icon-name">icon-listener</span></div>
            <div className="icon-item"><i className="glyphicon icon-loading" /><span className="intro-icon-name">icon-loading</span></div>
            <div className="icon-item"><i className="glyphicon icon-log" /><span className="intro-icon-name">icon-log</span></div>
            <div className="icon-item"><i className="glyphicon icon-logout" /><span className="intro-icon-name">icon-logout</span></div>

            <div className="alphabet">M</div>
            <div className="icon-item"><i className="glyphicon icon-monitor" /><span className="intro-icon-name">icon-monitor</span></div>
            <div className="icon-item"><i className="glyphicon icon-more" /><span className="intro-icon-name">icon-more</span></div>

            <div className="alphabet">N</div>
            <div className="icon-item"><i className="glyphicon icon-network" /><span className="intro-icon-name">icon-network</span></div>
            <div className="icon-item"><i className="glyphicon icon-notification" /><span className="intro-icon-name">icon-notification</span></div>

            <div className="alphabet">O</div>
            <div className="icon-item"><i className="glyphicon icon-overview" /><span className="intro-icon-name">icon-overview</span></div>

            <div className="alphabet">P</div>
            <div className="icon-item"><i className="glyphicon icon-performance" /><span className="intro-icon-name">icon-performance</span></div>
            <div className="icon-item"><i className="glyphicon icon-port" /><span className="intro-icon-name">icon-port</span></div>
            <div className="icon-item"><i className="glyphicon icon-power-off" /><span className="intro-icon-name">icon-power-off</span></div>
            <div className="icon-item"><i className="glyphicon icon-power-on" /><span className="intro-icon-name">icon-power-on</span></div>
            <div className="icon-item"><i className="glyphicon icon-project" /><span className="intro-icon-name">icon-project</span></div>
            <div className="icon-item"><i className="glyphicon icon-property" /><span className="intro-icon-name">icon-property</span></div>

            <div className="alphabet">Q</div>
            <div className="icon-item"><i className="glyphicon icon-question" /><span className="intro-icon-name">icon-question</span></div>

            <div className="alphabet">R</div>
            <div className="icon-item"><i className="glyphicon icon-redirect-policy" /><span className="intro-icon-name">icon-redirect-policy</span></div>
            <div className="icon-item"><i className="glyphicon icon-refresh" /><span className="intro-icon-name">icon-refresh</span></div>
            <div className="icon-item"><i className="glyphicon icon-region" /><span className="intro-icon-name">icon-region</span></div>
            <div className="icon-item"><i className="glyphicon icon-remove" /><span className="intro-icon-name">icon-remove</span></div>
            <div className="icon-item"><i className="glyphicon icon-resource-pool" /><span className="intro-icon-name">icon-resource-pool</span></div>
            <div className="icon-item"><i className="glyphicon icon-restart" /><span className="intro-icon-name">icon-restart</span></div>
            <div className="icon-item"><i className="glyphicon icon-role" /><span className="intro-icon-name">icon-role</span></div>
            <div className="icon-item"><i className="glyphicon icon-router" /><span className="intro-icon-name">icon-router</span></div>

            <div className="alphabet">S</div>
            <div className="icon-item"><i className="glyphicon icon-search" /><span className="intro-icon-name">icon-search</span></div>
            <div className="icon-item"><i className="glyphicon icon-security-group" /><span className="intro-icon-name">icon-security-group</span></div>
            <div className="icon-item"><i className="glyphicon icon-setting" /><span className="intro-icon-name">icon-setting</span></div>
            <div className="icon-item"><i className="glyphicon icon-snapshot" /><span className="intro-icon-name">icon-snapshot</span></div>
            <div className="icon-item"><i className="glyphicon icon-status-active" /><span className="intro-icon-name">icon-status-active</span></div>
            <div className="icon-item"><i className="glyphicon icon-status-deleted" /><span className="intro-icon-name">icon-status-deleted</span></div>
            <div className="icon-item"><i className="glyphicon icon-status-disabled" /><span className="intro-icon-name">icon-status-disabled</span></div>
            <div className="icon-item"><i className="glyphicon icon-status-light" /><span className="intro-icon-name">icon-status-light</span></div>
            <div className="icon-item"><i className="glyphicon icon-status-paused" /><span className="intro-icon-name">icon-status-paused</span></div>
            <div className="icon-item"><i className="glyphicon icon-status-shutdown" /><span className="intro-icon-name">icon-status-shutdown</span></div>
            <div className="icon-item"><i className="glyphicon icon-status-warning" /><span className="intro-icon-name">icon-status-warning</span></div>
            <div className="icon-item"><i className="glyphicon icon-subnet" /><span className="intro-icon-name">icon-subnet</span></div>

            <div className="alphabet">T</div>
            <div className="icon-item"><i className="glyphicon icon-ticket" /><span className="intro-icon-name">icon-ticket</span></div>
            <div className="icon-item"><i className="glyphicon icon-topology" /><span className="intro-icon-name">icon-topology</span></div>

            <div className="alphabet">U</div>
            <div className="icon-item"><i className="glyphicon icon-upload" /><span className="intro-icon-name">icon-upload</span></div>
            <div className="icon-item"><i className="glyphicon icon-user-group" /><span className="intro-icon-name">icon-user-group</span></div>
            <div className="icon-item"><i className="glyphicon icon-user" /><span className="intro-icon-name">icon-user</span></div>

            <div className="alphabet">V</div>
            <div className="icon-item"><i className="glyphicon icon-vnc" /><span className="intro-icon-name">icon-vnc</span></div>
            <div className="icon-item"><i className="glyphicon icon-volume" /><span className="intro-icon-name">icon-volume</span></div>
          </div>
        </div>
      </div>
    );

  }
}

module.exports = CommonIcon;
