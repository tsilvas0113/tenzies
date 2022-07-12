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

  const [dieNum, setDieNum] = React.useState(allNewDice())

  const num = dieNum.map(number => {
    return number
  })

  return (
    <main>
      <Die 
        value = {num}
      />
    </main>
  );
}

export default App;
