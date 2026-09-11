import React, { useState } from "react";
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);

  function onInc() {
    setError(null);
    setCount(count + 1);
  }

  function onDec() {
    if (count === 0) {
      setError("Count cannot be less than zero");
      return;
    }
    setError(null);
    setCount(count - 1);
  }

  function reset() {
    setError(null);
    setCount(0);
  }
  return (
    <div className="main-counter">
      <h1>Counter Application</h1>
      <div className="counter-div">
        {" "}
        <button onClick={onDec}>-</button>
        <h2>{count}</h2>
        <button onClick={onInc}>+</button>
      </div>

      <button className="reset" onClick={reset}>
        Reset
      </button>
      <h3>{error}</h3>
    </div>
  );
};

export default App;
