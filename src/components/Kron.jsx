import React, { useEffect, useState, useRef } from "react";
import ringer from "../flipdish-ringer.mp3";

function Kron(props) {
  const audio = new Audio(ringer);
  const second = props.setSec;
  const [timer, setTimer] = useState(second);
  const id = useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
  };
  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
      setTimer("Finished");
      audio.play();
    }
  }, [timer]);
  return (
    <div className="container">
      <h2>{timer}</h2>
    </div>
  );
}

export default Kron;
