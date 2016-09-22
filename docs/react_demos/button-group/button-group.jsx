var Button = uskin.Button,
  ButtonGroup = uskin.ButtonGroup;

ReactDOM.render(
  <div>
    <ButtonGroup>
      <Button tag="div" value="Prev"/>
      <Button tag="div" value="Mid 1" type="warning"/>
      <Button tag="div" value="Mid 2" type="delete"/>
      <Button tag="div" value="Mid 3" disabled={true}/>
      <Button tag="div" value="Next" type="create"/>
    </ButtonGroup>
    <ButtonGroup width="800">
      <Button tag="div" value="Justified Prev"/>
      <Button tag="div" value="Justified Mid 1" type="warning"/>
      <Button tag="div" value="Justified Mid 2" type="delete"/>
      <Button tag="div" value="Justified Mid 3" disabled={true}/>
      <Button tag="div" value="Justified Next" type="create"/>
    </ButtonGroup>
  </div>,
  document.getElementById('example')
);
ReactDOM.render(
  <div>
    <ButtonGroup type="vertical">
      <Button tag="div" value="Prev" type="status" selected={true}/>
      <Button tag="div" value="Mid 1" type="status"/>
      <Button tag="div" value="Mid 2" disabled={true}/>
      <Button tag="div" value="Next" type="create"/>
    </ButtonGroup>
    <ButtonGroup type="vertical" width="200">
      <Button tag="div" value="Vertical Justified Prev" type="status" selected={true}/>
      <Button tag="div" value="Vertical Justified Mid 1" type="status"/>
      <Button tag="div" value="Vertical Justified Mid 2" disabled={true}/>
      <Button tag="div" value="Vertical Justified Next" type="create"/>
    </ButtonGroup>
  </div>,
  document.getElementById('example2')
);
