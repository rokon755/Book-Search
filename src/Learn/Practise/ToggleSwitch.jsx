import React, { useState } from 'react'

// Icons
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

import "./ToggleSwitch.css";

const ToggleSwitch = () => {

  const [isOn, setIsOn] = useState(false)

  const handleToggleSwitch = () => {
    setIsOn(!isOn)
  }

  return (
    <div className='p-8 text-center'>
      <div className='toggle-switch' style={{ backgroundColor: isOn ? "#f44336" : "#4caf50" }} onClick={handleToggleSwitch}>
        <div className={`switch ${isOn ? "on" : "off"}`}>
          <span>{isOn ? <BsArrowLeft /> : <BsArrowRight />}</span>
        </div>
      </div >

      <ul className={`toggleList ${isOn ? "toggleOn" : "toggleOff"} `}>
        <span className='close' onClick={handleToggleSwitch}><IoClose /></span>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default ToggleSwitch