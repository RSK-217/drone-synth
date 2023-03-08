import * as Tone from 'tone';
import Voice from "./Voice.js"
import './App.css';

function App() {
  const osc1 = new Tone.Oscillator().toDestination();
  osc1.frequency.value = 200;
  osc1.volume.value = -25;
  
  const osc2 = new Tone.Oscillator().toDestination();
  osc2.frequency.value = 250;
  osc2.volume.value = -25;
  
  const osc3 = new Tone.Oscillator().toDestination();
  osc3.frequency.value = 300;
  osc3.volume.value = -25;

  const oscillators = [osc1, osc2, osc3];

  console.log(oscillators);

  function playOsc(osc) {
    osc.start();
  }

  function stopOsc(osc) {
    osc.stop();
  }

  return (
    <div>
      <div>
      {oscillators.map((oscillator, index) => (
        <Voice key={index + 1} play={() => playOsc(oscillator)} stop={() => stopOsc(oscillator)} />
      ))}
    </div>
      
    </div>
  );
}

export default App;
