import "../public/styles.css";
import React, { useState } from "react";
import Clock from "./components/Clock";
import Kron from "./components/Kron";

export default function App() {
  function getClick() {
    setClicked(true);
  }
  function getKron() {
    return <Kron setSec={time} />;
  }
  const [time, setTime] = useState(0);
  function Update(event) {
    const handle = event.target.value;
    setTime(handle);
  }
  const [isClicked, setClicked] = useState(false);
  return (
    <div className="App">
      <div className="container">
        <h1>Countdown</h1>
        <Clock />
        <input onChange={Update} value={time} />
        <button onClick={getClick}> Start </button>
        {isClicked === true && getKron()}
      </div>
    </div>
  );
}
