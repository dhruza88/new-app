import React from 'react';

// TODO: Create a `name` variable
  // const name = "David Hruza"
// TODO: Create a `thoughts` variable
  // const thoughts = "is honestly a really cool way to inject Java into html"
// This should be a string regarding what you think of React

function JSXVariables(name, thoughts) {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          {/* TODO: Add your name variable */}
          <h1>Hi! My name is {name}</h1>
          {/* TODO: Add your number of letters variable */}
          <h2>My name has {name.length} letters</h2>
          {/* TODO: Add your thoughts variable */}
          <h2>I think React {thoughts}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
