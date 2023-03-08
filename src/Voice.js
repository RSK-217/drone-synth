import React from 'react';
import Controls from './Controls.js'

const Voice = (props) => {
  return (
    <div>
        <Controls play={props.play} stop={props.stop}/>
    </div>
  )
}

export default Voice