import React from "react";
import Die from "./components/Die";

function App() {
  return (
    <main>
      <Die 
        value = {Math.floor(Math.random() * 6) + 1}
      />
    </main>
  );
}

export default App;
