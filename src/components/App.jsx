import React, { useState } from "react";

function App() {
  // let time = new Date().toLocaleTimeString();
  const now = new Date().toLocaleTimeString();
  const [time, getTime] = useState(now);
  console.log(time);
  // setInterval(updateTime, 100000);
  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    getTime(newTime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
