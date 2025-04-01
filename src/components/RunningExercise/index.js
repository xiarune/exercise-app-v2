import React, { useState, useEffect } from "react";

const RunningExercise = ({ name, suggested, goHome, goToExercise }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const recordLap = () => {
    setLaps([...laps, formatTime(time)]);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>{name}</h2>
      <p>Time: {formatTime(time)}</p>
      <button onClick={handleStartPause}>{isRunning ? "Pause" : "Start"}</button>
      <button onClick={recordLap} disabled={!isRunning}>Record Lap</button>
      <button onClick={resetTimer}>Reset</button>

      <h3>Lap Times:</h3>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>Lap {index + 1}: {lap}</li>
        ))}
      </ul>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => goToExercise(suggested)}>
          Do Suggested: {suggested.name}
        </button>
        <button onClick={goHome} style={{ marginLeft: "10px" }}>
          Home
        </button>
      </div>
    </div>
  );
};

export default RunningExercise;
