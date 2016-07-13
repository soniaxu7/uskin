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

class IntroUskin extends React.Component {
  render() {
    return (
      <div className="md-content">
        <img className="uskin-logo" src="./images/logo.png" />
        <h1>USkin</h1>
        <div className="intro-lines">
          <p>USkin is a front-end framework which provides stunning web components based on CSS3 and ReactJS.</p>
        </div>

        <h4>Quick Start</h4>
        <ul className="intro-lines">
          <li>
            <a href="http://git.ustack.com/ustack/uskin/repository/archive.zip">Download the latest release</a>
            ,or clone the repo
            <code className="commands">git clone http:&sol;/git.ustack.com/ustack/uskin.git</code>
          </li>
          <li>
            Install all the denpendecies by
            <code className="commands">npm install</code>
            , and your first compile will also be completed by this command.
          </li>
          <li>
            You can compile your code via <a href="http://gruntjs.com/">Grunt</a>
            <code className="commands">grunt build</code> or <code>make build</code>
            at any time you need.
          </li>
          <li>
            You can find demos in folder
            <code className="commands">docs</code>
            , showing the basic usage of the components. More information can be found in the introduction documents.
          </li>
        </ul>

        <h4>Available Commands</h4>
        <div className="intro-lines">
          <p>Before using the commands, please make sure all the dependencies are well installed.</p>
          <p>Compile all the files:</p>
          <pre className="commands-pre">
            <code>grunt build</code>
          </pre>
          <p>In most of the situations, you can use make command instead. In this case, <code className="commands">make build</code>.</p>
          <p>Clean all generated files:</p>
          <pre className="commands-pre">
            <code>grunt clean</code>
          </pre>
          <p>When test is needed:</p>
          <pre className="commands-pre">
            <code>npm run test</code>
          </pre>
          <p>Use ESLint for code parsing:</p>
          <pre className="commands-pre">
            <code>npm run eslint</code>
          </pre>
          <p>Watch changes of your code real time while developing, you can run the dev mode:</p>
          <pre className="commands-pre">
            <code>npm run dev</code>
          </pre>
          <p>Customize the theme of uskin:</p>
          <pre className="commands-pre">
            <code>npm run dev --theme=default</code>
          </pre>
          <p>or</p>
          <pre className="commands-pre">
            <code>npm run build --theme=default</code>
          </pre>
          <p>Currently, we only provide two themes: <code className="commands">default</code> and <code className="commands">premium</code>.
</p>
        </div>

        <h4>Note</h4>
        <div className="intro-lines">
          <p>Details for each release are documented in the <a href="https://github.com/icecreamliker/uskin/releases">release notes</a></p>
          <p>Any questions to the releases are welcome, feel free to <a href="https://github.com/icecreamliker/uskin/issues">create issues</a></p>
        </div>

        <h4>License</h4>
        <div className="intro-lines">
          <p>USkin is available under the terms of <a href="https://github.com/icecreamliker/uskin/blob/master/LICENSE">the MIT license</a></p>
        </div>
      </div>
    );
  }
}

module.exports = IntroUskin;
