import React, { useState } from "react";
import * as Tone from "tone";
import Voice from "./Voice.js";
import "./App.css";

function App() {
  //oscillator 1
  const osc1 = new Tone.Oscillator().toDestination();
  osc1.volume.value = -25;
  osc1.frequency.value = 200;

  //oscillator 2
  const osc2 = new Tone.Oscillator().toDestination();
  osc2.volume.value = -30;
  osc2.frequency.value = 250;

  //oscillator 3
  const osc3 = new Tone.Oscillator().toDestination();
  osc3.volume.value = -30;
  osc3.frequency.value = 300;

  //arrays
  const oscillators = [osc1, osc2, osc3];

  function playOsc(osc) {
    osc.start();
  }

  function stopOsc(osc) {
    osc.stop();
  }

  function handleVolumeChange(e, index) {
    if (e.target && e.target.hasOwnProperty("value")) {
      const volume = e.target.value;
      oscillators[index].volume.value = volume;
    }
  }

  return (
    <div className="app-body">
      <div>
        {oscillators.map((oscillator, index) => (
          <Voice
            key={index + 1}
            play={() => playOsc(oscillator)}
            stop={() => stopOsc(oscillator)}
            value={index}
            handleVolumeChange={(e) => handleVolumeChange(e, index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;