import React, { useState } from "react";

function Toggle() {

  const [isOn, setIsOn] = useState(false) // initial value - false

  function handleClick() {
    setIsOn((isOn) => !isOn)
  }

  const color = isOn? "red" : "white" // compute it based on other state in our component

  return <button onClick={handleClick} style={{background: color}}>{isOn ? "ON": "OFF"}</button>;
}

export default Toggle;
