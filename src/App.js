import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import RunningExercise from "./components/RunningExercise";
import "./App.css";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    { name: "Push Ups", type: "repetition", suggested: { name: "Bicycling", type: "duration" } },
    { name: "Bicycling", type: "duration", suggested: { name: "Sit Ups", type: "repetition" } },
    { name: "Jumping Jacks", type: "repetition", suggested: { name: "Push Ups", type: "repetition" } },
    { name: "Running", type: "running", suggested: { name: "Jumping Jacks", type: "repetition" } },
    { name: "Sit Ups", type: "repetition", suggested: { name: "Bicycling", type: "duration" } },
  ];

  const goHome = () => setSelectedExercise(null);

  const goToExercise = (exercise) => {
    const found = exercises.find(
      (e) => e.name === exercise.name && e.type === exercise.type
    );
    if (found) setSelectedExercise(found);
  };

  return (
    <div className="App">
      {selectedExercise ? (
        <>
          <div className="top-nav">
            <button onClick={goHome} className="back-arrow">←</button>
            <h2 className="exercise-title">{selectedExercise.name}</h2>
          </div>

          <div className="exercise-container">
            {selectedExercise.type === "repetition" ? (
              <RepetitionExercise
                suggested={selectedExercise.suggested}
                goHome={goHome}
                goToExercise={goToExercise}
              />
            ) : selectedExercise.type === "duration" ? (
              <DurationExercise
                suggested={selectedExercise.suggested}
                goHome={goHome}
                goToExercise={goToExercise}
              />
            ) : (
              <RunningExercise
                suggested={selectedExercise.suggested}
                goHome={goHome}
                goToExercise={goToExercise}
              />
            )}
          </div>
        </>
      ) : (
        <div>
          <h1>Exercises</h1>
          <h2>Select an exercise:</h2>
          <div className="exercise-buttons">
            {exercises.map((exercise, index) => (
              <button key={index} onClick={() => setSelectedExercise(exercise)}>
                {exercise.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;


