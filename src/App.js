import React from "react";
import Die from "./components/Die";
import { nanoid } from 'nanoid'

function App() {

  function allNewDice() {
    let randArray = []
    for (let i = 0; i < 10; i++) {
      randArray.push({
        value: Math.floor(Math.random() * 6) + 1, 
        isHeld: true,
        id: nanoid()
      })
    }
    return randArray
  }

  const [dieNum, setDieNum] = React.useState(allNewDice())

  const dieElements = dieNum.map(die => {
    return <Die key={die.id} value={die.value} held={die.isHeld} />
  })

  function reRoll() {
    let newArray = allNewDice()
    setDieNum(prevDie => {
      return prevDie.splice(0, prevDie.length, ...newArray)
    })
  }
  console.log(dieNum)
  return (
    <main>
      <div className="die--container">
        {dieElements}
      </div>
      <button className="roll--btn" onClick={reRoll}>Roll</button>
    </main>
  );
}

export default App;
