function createClassName(props) {

  let className = props.default ? props.default : '';
  let prefix = props.prefix ? props.prefix : '';
  let classProps = props.props;

  Object.keys(classProps).forEach((index) => {
    if (classProps[index]) {
      className += ' ' + prefix + index;
    }
  });

  return className;

}

export default createClassName;
