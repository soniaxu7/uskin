const {Button, ButtonGroup, Step} = uskin;

function listener(e, status) {
  console.debug('click triggered!', e, status);
}

let items1 = [{
  name: 'step 1'
}, {
  name: 'step 2'
}, {
  name: 'step 3'
}];
let items2 = [{
  name: 'title 1'
}, {
  name: 'title 2'
}, {
  name: 'title 3',
  default: true
}, {
  name: 'title 4'
}];

class StepForm1 extends React.Component {

  onClick(index) {
    this.refs.step.setState({
      selectedIndex: index
    });
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <Step ref="step" items={items1} onClick={listener} disabled={true} consecutive={true} />
        <ButtonGroup width="800">
          <span style={{marginRight: '20px'}}>consecutive = true, disabled = true</span>
          <Button value="Step 1" type="create" onClick={this.onClick.bind(this, 0)} />
          <Button value="Step 2" type="create" onClick={this.onClick.bind(this, 1)} />
          <Button value="Step 3" type="create" onClick={this.onClick.bind(this, 2)} />
        </ButtonGroup>
      </div>
    );
  }

}

class StepForm2 extends React.Component {

  onClick(index) {
    this.refs.step.setState({
      selectedIndex: index
    });
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <Step ref="step" items={items2} onClick={listener} disabled={true} width="572" />
        <ButtonGroup width="800">
          <span style={{marginRight: '20px'}}>disabled = true</span>
          <Button value="Title 1" type="create" onClick={this.onClick.bind(this, 0)} />
          <Button value="Title 2" type="create" onClick={this.onClick.bind(this, 1)} />
          <Button value="Title 3" type="create" onClick={this.onClick.bind(this, 2)} />
          <Button value="Title 4" type="create" onClick={this.onClick.bind(this, 3)} />
        </ButtonGroup>
      </div>
    );
  }

}

ReactDOM.render(
  <div style={{paddingBottom: '100px'}}>
    <StepForm1 />
    <StepForm2 />
    <div>
      <Step items={items2} onClick={listener} width="572" consecutive={true} />
      <p style={{marginLeft: '200px'}}>consecutive = true</p>
    </div>
    <div>
      <Step items={items2} onClick={listener} width="572" />
      <p style={{marginLeft: '200px'}}>default props</p>
    </div>
  </div>,
  document.getElementById('example')
);
