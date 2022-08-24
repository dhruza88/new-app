// First we import `useState` with React so that we can take advantage of the hook
import React, { useState } from 'react';

export default function Greeting() {
  // To set a state variable using `useState`, we give our variable a name of `greeting` and a function to update it.
  // We also provide an initial value
  const [greeting, setGreeting] = useState('Welcome! React state is awesome!');
  

  const changeGreet = ()=>{
    setGreeting("Whoa react is so cool!")
  }

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">
        Greeting from state:
      </div>
      <div className="card-body">
        <p className="card-text" style={{ fontSize: '50px' }}>
          {greeting}
        </p>
        <button className="btn btn-info btn-outline" onClick={changeGreet}>Change Greeting</button>
      </div>
    </div>
  );
}
