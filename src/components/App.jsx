import React, { useState } from "react";

function App() {
  // let time = new Date().toLocaleTimeString();

  const [time, getTime] = useState(new Date().toLocaleTimeString());
  console.log(time);

  function sayHi() {
    console.log("Hey");
  }
  setInterval(sayHi, 1000);

  function currentTime() {
    const timeNow = new Date().toLocaleTimeString();
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button>Get Time</button>
    </div>
  );
}

export default App;
