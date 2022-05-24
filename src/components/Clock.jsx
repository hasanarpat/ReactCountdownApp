import React, { useState } from "react";

function Clock() {
  let time = new Date().toLocaleTimeString();
  const [count, setCount] = useState(time);
  setInterval(GetTime, 1000);
  function GetTime() {
    let currentTime = new Date().toLocaleTimeString();
    setCount(currentTime);
  }
  return (
    <div className="container">
      <h2>{count}</h2>
    </div>
  );
}

export default Clock;
