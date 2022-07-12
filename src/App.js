import React from "react";
import Die from "./components/Die";
import { nanoid } from 'nanoid'

function App() {

  function allNewDice() {
    let randArray = []
    for (let i = 0; i < 10; i++) {
      randArray.push({
        value: Math.floor(Math.random() * 6) + 1, 
        isHeld: false,
        id: nanoid()
      })
    }
    return randArray
  }

  const [dieNum, setDieNum] = React.useState(allNewDice())

  const dieElements = dieNum.map(die => {
    return <Die 
        key={die.id} 
        value={die.value} 
        held={die.isHeld}
        handleClick={() => holdDice(die.id)} 
      />
  })

  function reRoll() {
    setDieNum(prevDie => {
      return prevDie.map(item => {
        return item.isHeld === true ? 
          item : 
          {...item, 
            value: Math.floor(Math.random() * 6) + 1, 
            isHeld: false, 
            id: nanoid()}
      })
    })
  }

  function holdDice(id) {
    setDieNum(prevState => {
      return prevState.map(item => {
        return item.id === id ? {...item, isHeld: !item.isHeld} : item
      })
    })
  }

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
