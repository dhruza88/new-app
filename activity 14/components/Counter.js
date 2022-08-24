import React, { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
//allows for counter to be used as a prop/component in index
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  // it creates count which is started at 0 in the state, and then calls the setCount function to able to update the value in state
  let [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  //increases the current count by 1
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
  //decreases the current count by 1, with my added code, if count is at zero it will not go any further
  const handleDecrement = () => {
    if( count > 0 ){
      setCount((count - 1));
    } else{
      console.log("The count is already at zero!")
    }
    
  };

  const handleReset = () => {
    setCount(0);
  }

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
      />
    </div>
  );
}
