import React from 'react';

// TODO: Add a comment explaining what a react component is
// it is a portion of a final html page, written in jsx
function HelloReact() {
  const text = 'more text to talk about REACT.js';

  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  // jsx is javascript meant to look like html, the significance of the curly brackets is to reference the variable text, to bring it in
  return <p>Hello World! Here is {text}</p>;
}

export default HelloReact;
