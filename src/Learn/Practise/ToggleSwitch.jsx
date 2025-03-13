import React, { useState } from 'react'
import "./ToggleSwitch.css";

const ToggleSwitch = () => {

  const [isOn, setIsOn] = useState(false)

  const handleToggleSwitch = () => {
    setIsOn(!isOn)
  }

  return (
    <>
      <div className='toggle-switch' style={{ backgroundColor: isOn ? "#4caf50" : "#f44336" }} onClick={handleToggleSwitch}>
        <div className={`switch ${isOn ? "on" : "off"}`}>
          <span>{isOn ? "Show" : "Hide"}</span>
        </div>
      </div >

      <ul className={`toggleList ${isOn ? "toggleOn" : "toggleOff"} `}>
        <span className='close' onClick={handleToggleSwitch}>X</span>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </>
  )
}

export default ToggleSwitch