import React from 'react';
import '../Styles/Controls.css';

const Contorls = ({play, stop}) => {
  return (
    <div>
        <button className="play" onClick={play}>Start</button>
        <button className="stop" onClick={stop}>Stop</button>
    </div>
  )
}

export default Contorls