var {Button, Pagination} = uskin;

var label1 = {
  prev: true,
  next: true,
  first: true,
  last: true
};

var label2 = {
  first: true,
  prev: true,
  next: true,
  nextDisabled: true
};

class Example extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value1: 5,
      value2: 1,
      value3: 'first',
      changeLabel: true
    };

    ['listener1', 'listener2', 'labelListener', 'changeLabel'].forEach((func) => {
      this[func] = this[func].bind(this);
    });

  }

  listener1(page, e) {
    console.debug('click triggered!', page, e);
    this.setState({
      value1: page
    });
  }

  listener2(page, e) {
    console.debug('click triggered!', page, e);
    this.setState({
      value2: page
    });
  }

  labelListener(label, e) {
    console.debug('click triggered!', label, e);
    this.setState({
      value3: label
    });
  }

  pageJump(page) {
    this.setState({
      value1: page
    });
  }

  changeLabel() {
    this.setState({
      changeLabel: !this.state.changeLabel
    });
  }

  render() {
    var state = this.state;

    return (
      <div>
        <div>
          <p className="page">
            Current Page is
            <span>{' ' + state.value1}</span>
            <Button value={'Jump to 17'} onClick={this.pageJump.bind(this, 17)}/>
          </p>
          <Pagination onClick={this.listener1} current={state.value1} total={20}/>
        </div>
        <div>
          <p className="page">Current Page is <span>{state.value2}</span></p>
          <Pagination onClick={this.listener2} current={state.value2} total={5}/>
        </div>
        <div>
          <p className="page">
            Current Page is
            <span>{' ' + state.value3}</span>
            <Button value={'Change Label'} onClick={this.changeLabel}/>
          </p>
          <Pagination labelOnly={true} label={state.changeLabel ? label1 : label2} onClickLabel={this.labelListener}/>
        </div>
      </div>
    );
  }

}

ReactDOM.render(<Example />, document.getElementById('example'));
