var Button = uskin.Button;
ReactDOM.render(
  <div>
    <div>
      <Button value="Normal"/>
      <Button value="Create" type="create"/>
      <Button value="Delete" type="delete"/>
      <Button value="Cancel" type="cancel"/>
      <Button value="Disabled" type="cancel" disabled={true}/>
    </div>
    <div>
      <Button value="Initial" beforeClick={beforeListener} onClick={listener} afterClick={afterlistener} initial={true}/>
      <Button value="Initial" type="create" initial={true}/>
      <Button value="Initial" type="delete" initial={true}/>
      <Button value="Initial" type="cancel" initial={true}/>
      <Button value="Initial" type="cancel" initial={true} disabled={true}/>
    </div>          
    <div>
      <Button value="Size xl" size="xl"/>
      <Button value="Size lg" type="create" size="lg"/>
      <Button value="Size sm" type="delete" size="sm"/>
      <Button value="Size xs" type="cancel" size="xs"/>
    </div>
    <div>
      <Button value="Status" type="status"/>
      <Button value="Status Selected" type="status" selected={true}/>
    </div>
    <div>
      <Button value="onClick" onClick={listener}/>
      <Button value="before onClick" beforeClick={beforeListener} onClick={listener}/>
      <Button value="before onClick after" beforeClick={beforeListener} onClick={listener} afterClick={afterlistener}/>
      <Button value="onClick after" onClick={listener} afterClick={afterlistener}/>
      <Button value="no onClick prop won't work" type="cancel" beforeClick={beforeListener} afterClick={afterlistener}/>
      <Button value="disabled" type="cancel" disabled={true} onClick={listener}/>
    </div>
  </div>,
  document.getElementById('example')
);

function beforeListener(e) {
  console.debug('before click triggered!', e);
}
function listener(e) {
  console.debug('click triggered!', e);
}
function afterlistener(e) {
  console.debug('after click triggered!', e);
}