import { useState, useEffect } from "react";

function FunctionalClock() {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(tick, 1000)
    // console.log(interval)
    return function(){
      clearInterval(interval)
    }
  }, [])

  function tick() {
    setDate(new Date())
  }
  
  return (
    <div className="App">
      <h1>Functional Component</h1>
      <hr />
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  );
}

export default FunctionalClock;
