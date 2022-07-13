import React from "react";
import Die from "./components/Die";
import { nanoid } from 'nanoid'
import Confetti from "react-confetti";

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

  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const hold = dieNum.every(die => die.isHeld)
    const sameValue = dieNum.every(die => die.value === dieNum[0].value)
    if (hold && sameValue) {
      setTenzies(true)
      console.log("You won!")
    }
  }, [dieNum])

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
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it as its current value between rolls.</p>
      <div className="die--container">
        {dieElements}
      </div>
      <button className="roll--btn" onClick={reRoll}>{tenzies ? 'New Game' : 'Roll'}</button>
    </main>
  );
}

export default App;
