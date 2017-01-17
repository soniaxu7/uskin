## Example
<a href="./button-group.html" target="_blank">Button-Group Example</a>

## Usage
```
const {Button, ButtonGroup} = uskin;

ReactDOM.render(  
  <ButtonGroup>
    <Button tag="div" value="Prev"/>
    <Button tag="div" value="Mid 1" type="delete"/>
    <Button tag="div" value="Mid 2" disabled={true}/>
    <Button tag="div" value="Next" type="create"/>
  </ButtonGroup>,
  document
);
```

## API
**注意：ButtonGroup里的Button的Tag属性值必须设为div**
<table>
  <thead>
    <tr>
      <th style="width: 100px;">name</th>
      <th style="width: 50px;">type</th>
      <th style="width: 50px;">default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>type</td>
      <td>String</td>
      <td></td>
      <td>默认为Button-Group横向排版，type="vertical"时竖向排版</td>
    </tr>
    <tr>
      <td>width</td>
      <td>Number</td>
      <td></td>
      <td>Button-Group的总长度</td>
    </tr>
  </tbody>
</table>
