import React from "react";
import Die from "./components/Die";

function App() {

  function allNewDice() {
    let randArray = []
    for (let i = 0; i < 10; i++) {
      randArray.push(Math.floor(Math.random() * 6) + 1)
    }
    return randArray
  }

  return (
    <main>
      <Die 
        value = {Math.floor(Math.random() * 6) + 1}
      />
    </main>
  );
}

export default App;
