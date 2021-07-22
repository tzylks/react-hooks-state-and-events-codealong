import React from "react";
import { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState (false)
  function clickFunction() {
    setToggle(toggle => !toggle)
  }

  const color = toggle ? "white" : "red"

  return <button style={{ background: color}} onClick={clickFunction}>{toggle ? "On" : "Off"}</button>;
}

export default Toggle;
