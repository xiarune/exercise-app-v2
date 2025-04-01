import React, { useState } from "react";

const RepetitionExercise = ({ suggested, goHome, goToExercise }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Repetitions: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => goToExercise(suggested)}>
          Do Suggested: {suggested.name}
        </button>
      </div>
    </div>
  );
};

export default RepetitionExercise;

