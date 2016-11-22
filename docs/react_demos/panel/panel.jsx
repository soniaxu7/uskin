var Panel = uskin.Panel;

var text = [{
  'title': <div>Crashed Russian Plane Broke Up in the Air</div>,
  'content': <div><p>Meanwhile in Russia, an outpouring of grief gripped the historic city of St. Petersburg,      home of many of the victims. President Vladimir Putin declared a nationwide day of mourning, and      flags flew at half-staff.</p><p>viation experts joined the searchers in a remote part of the Sinai, seeking any clues to what caused the Metrojet Airbus A321-200 to plummet abruptly from 31,000 feet just 23 minutes after it departed from the Red Sea resort of Sharm el-Sheikh bound for St. Petersburg.</p></div>
}, {
  'title': <div>Taylor Swift Songs Sound Incredibly Soothing as Lullabies</div>,
  'content': <div>ot quite ready to introduce your infant to Taylor Swift? Then ease them into Swiftie-hood with these lullaby versions of her greatest hits, brought you to by Rockabye Baby! The album (which is available for purchase on iTunes) offers gentle, twinkly, super-soothing versions of recent hits like “Bad Blood” and “Blank Space” along with old classics like “Love Story” and “You Belong With Me.”<br/>You’ll hear the melodies you know and love reimagined with xylophones, bells and wood blocks. If you don’t have an infant you need to lure to sleep, we recommend just listening on your own. The songs will make great background music to keep you calm while you work or try to figure out how your health insurance works.</div>
}];

ReactDOM.render(
  <Panel title={text[0].title} content={text[0].content} />,
  document.getElementById('example')
);

ReactDOM.render(
  <Panel title={text[1].title} content={text[1].content} width="600" />,
  document.getElementById('example2')
);
