import React, { useState, useEffect } from "react";

const DurationExercise = ({ suggested, goHome, goToExercise }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div>
      <p>Duration: {formatTime(time)}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={() => { setIsRunning(false); setTime(0); }}>Reset</button>
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => goToExercise(suggested)}>
          Do Suggested: {suggested.name}
        </button>
      </div>
    </div>
  );
};

export default DurationExercise;

