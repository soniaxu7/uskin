## Example
<a href="./panel.html" target="_blank">Panel Example</a>

## Usage
```
const {Panel} = uskin;

let text = {
  title: <div>Taylor Swift Songs Sound Incredibly Soothing as Lullabies</div>,
  content: <div>ot quite ready to introduce your infant to Taylor Swift? Then ease them into Swiftie-hood with these lullaby versions of her greatest hits, brought you to by Rockabye Baby! The album (which is available for purchase on iTunes) offers gentle, twinkly, super-soothing versions of recent hits like “Bad Blood” and “Blank Space” along with old classics like “Love Story” and “You Belong With Me.”<br/>You’ll hear the melodies you know and love reimagined with xylophones, bells and wood blocks. If you don’t have an infant you need to lure to sleep, we recommend just listening on your own. The songs will make great background music to keep you calm while you work or try to figure out how your health insurance works.</div>
}

ReactDOM.render(<Panel title={text.title} content={text.content} width={600}/>, document);
```

## API
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
      <td>title</td>
      <td>String</td>
      <td></td>
      <td>panel的title</td>
    </tr>
    <tr>
      <td>content</td>
      <td>String</td>
      <td></td>
      <td>panel的content</td>
    </tr>
    <tr>
      <td>width</td>
      <td>Number</td>
      <td></td>
      <td>设置panel的宽度</td>
    </tr>
  </tbody>
</table>
