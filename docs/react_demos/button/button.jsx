var Button = uskin.Button;

function listener(e) {
  console.debug('click triggered!', e);
}

ReactDOM.render(
  <div>
    <div>
      <Button value="Normal" onClick={listener}/>
      <Button value="Create" type="create" onClick={listener}/>
      <Button value="Delete" type="delete" onClick={listener}/>
      <Button value="Cancel" type="cancel" onClick={listener}/>
      <Button value="Disabled" type="cancel" disabled={true} onClick={listener}/>
    </div>
    <div>
      <Button value="Initial" initial={true} onClick={listener}/>
      <Button value="Initial" type="create" initial={true} onClick={listener}/>
      <Button value="Initial" type="delete" initial={true} onClick={listener}/>
      <Button value="Initial" type="cancel" initial={true} onClick={listener}/>
      <Button value="Initial" type="cancel" initial={true} disabled={true} onClick={listener}/>
    </div>
    <div>
      <Button value="Initial" initial={true} onClick={listener} iconClass="glyphicon icon-region"/>
      <Button value="Initial" type="create" initial={true} onClick={listener} iconClass="glyphicon icon-create"/>
      <Button value="Initial" type="delete" initial={true} onClick={listener} iconClass="glyphicon icon-more"/>
      <Button value="Initial" type="cancel" initial={true} onClick={listener} iconClass="glyphicon icon-edit"/>
      <Button value="Initial" type="cancel" initial={true} disabled={true} onClick={listener} iconClass="glyphicon icon-disable"/>
    </div>
    <div>
      <Button value="Size xl" size="xl" onClick={listener}/>
      <Button value="Size lg" type="create" size="lg" onClick={listener}/>
      <Button value="Size sm" type="delete" size="sm" onClick={listener}/>
      <Button value="Size xs" type="cancel" size="xs" onClick={listener}/>
    </div>
    <div>
      <Button value="Status" type="status" onClick={listener}/>
      <Button value="Status Selected" type="status" selected={true} onClick={listener}/>
    </div>
  </div>,
  document.getElementById('example')
);
