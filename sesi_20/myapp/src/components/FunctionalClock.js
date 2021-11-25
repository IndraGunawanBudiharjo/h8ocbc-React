import { useState, useEffect } from "react";

function FunctionalClock() {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(tick, 1000)
    console.log('set interval')
    return function(){
      clearInterval(interval)
      console.log('clear interval')
    }
  }, [])

  function tick() {
    setDate(new Date())
  }
  
  return (
    <div className="App">
      <div className="card text-white bg-dark mb-3">
          <div className="card-header">Functional Component</div>
          <div className="card-body">
            <h5 className="card-title">Today: {date.toLocaleDateString()}</h5>
            <p className="card-text">{date.toLocaleTimeString()}</p>
          </div>
        </div>
    </div>
  );
}

export default FunctionalClock;
