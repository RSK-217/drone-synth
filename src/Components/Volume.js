import React from 'react'

const Volume = ({value, handleVolumeChange}) => {
  return (
    <div>
        <input 
            type="range"
            min="-87"
            max="0"
            value={value}
            onChange={handleVolumeChange}  
        />
    </div>
  )
}

export default Volume