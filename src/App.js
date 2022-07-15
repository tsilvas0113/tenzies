import React from "react";
import Die from "./components/Die";
import { nanoid } from 'nanoid';
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
      handlePause()
      getBestTime()
    }
  }, [dieNum])

  const dieElements = dieNum.map(die => {
    return <Die 
        key={die.id} 
        value={die.value} 
        held={die.isHeld}
        handleClick={() => {
          holdDice(die.id)
          handleStart()
        }} 
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
    setRollNumber(prevRollNumber => {
      return prevRollNumber + 1
    })
  }

  const [rollNumber, setRollNumber] = React.useState(0)

  function newGame() {
    setDieNum(allNewDice())
    setTenzies(false)
    setRollNumber(0)
    handleReset()
  }

  function holdDice(id) {
    setDieNum(prevState => {
      return prevState.map(item => {
        return item.id === id ? {...item, isHeld: !item.isHeld} : item
      })
    })
  }

  const [timerActive, setTimerActive] = React.useState(false)
  const [timerPaused, setTimerPaused] = React.useState(true)
  const [time, setTime] = React.useState(0)

  React.useEffect(() => {
    let interval = null

    if (timerActive && timerPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10)
      }, 10)
    } else {
      clearInterval(interval)
    }
    return () => {
      clearInterval(interval)
    }
  }, [timerActive, timerPaused])

  const handleStart = () => {
    setTimerActive(true)
    setTimerPaused(false)
  }

  const handlePause = () => {
    setTimerPaused(!timerPaused)
  }

  const handleReset = () => {
    setTimerActive(false)
    setTime(0)
  }

  const [recordTime, setRecordTime] = React.useState({
    time: localStorage.getItem('recordTimeNumber') || null
  })

  function getBestTime() {
    setRecordTime(prevRecordTime => {
      let newRecordTime = prevRecordTime.time ? Math.min(prevRecordTime.time, time) : time
      return {
        ...prevRecordTime,
        time: newRecordTime
      }
    })
  }

  React.useEffect(() => {
    localStorage.setItem('recordTimeNumber', recordTime.time)
  }, [recordTime])

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it as its current value between rolls.</p>
      <div className="die--container">
        {dieElements}
      </div>
      <div className="timer">
        <span className="min">
          {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
        </span>
        <span className="sec">
          {('0' + Math.floor((time / 1000) % 60)).slice(-2)}.
        </span>
        <span className="mili-sec">
          {('0' + ((time / 10) % 100)).slice(-2)}
        </span>
      </div>
      <button className="roll--btn" onClick={tenzies ? newGame : reRoll}>
        {tenzies ? 'New Game' : 'Roll'}
      </button>
      <p className="roll--count">Roll count: {rollNumber}</p>
      <div className="record--time">Your best time is: {recordTime.time ? 
        <span>
          <span>
            {('0' + Math.floor((recordTime.time / 60000) % 60)).slice(-2)}:
          </span>
          <span>
            {('0' + Math.floor((recordTime.time / 1000) % 60)).slice(-2)}.
          </span>
          <span>
            {('0' + ((recordTime.time / 10) % 100)).slice(-2)}
          </span>
        </span> : "-"}{" "}</div>
    </main>
  );
}

export default App;
