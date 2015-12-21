var createClassName = function(props) {

  var className = props.default ? props.default : '';
  var prefix = props.prefix ? props.prefix : '';
  var classProps = props.props;

  Object.keys(classProps).map(index => {
    if (classProps[index]) {
      className += ' ' + prefix + index;
    }
  });

  return className;

};

export default createClassName;
