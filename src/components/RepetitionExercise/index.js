import React, { useState } from "react";

const RepetitionExercise = ({ name, suggested, goHome, goToExercise }) => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>{name}</h2>
      <p>Repetitions: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(0)}>Reset</button>

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

export default RepetitionExercise;
