import React from 'react';
import Controls from './Components/Controls.js';
import Volume from './Components/Volume.js';
import './Styles/Voice.css';

const Voice = (props) => {
  return (
    <div className="voice-body">
        <Controls play={props.play} stop={props.stop}/>
        <Volume index={props.value} handleVolumeChange={props.handleVolumeChange} />
    </div>
  )
}

export default Voice