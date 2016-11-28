var Button = uskin.Button;

function listener(e, btnValue) {
  console.debug('click triggered!', e, btnValue);
}

ReactDOM.render(
  <div>
    <div>
      <Button value="Normal" btnKey="normal" onClick={listener} />
      <Button value="Create" btnKey="create" type="create" onClick={listener} />
      <Button value="Warning" btnKey="warning" type="warning" onClick={listener} />
      <Button value="Delete" btnKey="delete" type="delete" onClick={listener} />
      <Button value="Cancel" btnKey="cancel" type="cancel" onClick={listener} />
      <Button value="Disabled" btnKey="disabled" type="cancel" disabled={true} onClick={listener} />
    </div>
    <div>
      <Button value="Initial" initial={true} onClick={listener} />
      <Button value="Initial" type="create" initial={true} onClick={listener} />
      <Button value="Initial" type="warning" initial={true} onClick={listener} />
      <Button value="Initial" type="delete" initial={true} onClick={listener} />
      <Button value="Initial" type="cancel" initial={true} onClick={listener} />
      <Button value="Initial" type="cancel" initial={true} disabled={true} onClick={listener} />
    </div>
    <div>
      <Button value="Initial" btnKey="btnIcon-1" initial={true} onClick={listener} iconClass="region" />
      <Button value="Initial" btnKey="btnIcon-2" type="create" initial={true} onClick={listener} iconClass="create" />
      <Button value="Initial" btnKey="btnIcon-2" type="warning" initial={true} onClick={listener} iconClass="property" />
      <Button value="Initial" btnKey="btnIcon-3" type="delete" initial={true} onClick={listener} iconClass="more" />
      <Button value="Initial" btnKey="btnIcon-4" type="cancel" initial={true} onClick={listener} iconClass="edit" />
      <Button value="Initial" btnKey="btnIcon-5" type="cancel" initial={true} disabled={true} onClick={listener} iconClass="disable" />
    </div>
    <div>
      <Button value="Size xl" btnKey="xl" size="xl" onClick={listener} />
      <Button value="Size lg" btnKey="lg" type="create" size="lg" onClick={listener} />
      <Button value="Size default" btnKey="default" type="warning" onClick={listener} />
      <Button value="Size sm" btnKey="sm" type="delete" size="sm" onClick={listener} />
      <Button value="Size xs" btnKey="xs" type="cancel" size="xs" onClick={listener} />
    </div>
    <div>
      <Button value="Status" btnKey="status-1" type="status" onClick={listener} />
      <Button value="Status Selected" btnKey="status-2" type="status" selected={true} onClick={listener} />
    </div>
    <div>
      <Button initial={true} iconClass="refresh" />
    </div>
  </div>,
  document.getElementById('example')
);
