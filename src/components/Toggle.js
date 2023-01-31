import React, { useState } from "react";

function Toggle() {

  const [isOn, setIsOn] = useState(false)

  return <button>{isOn ? "ON": "OFF"}</button>;
}

export default Toggle;
