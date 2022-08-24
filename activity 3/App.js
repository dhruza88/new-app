import React from 'react';
// TODO: Add a comment explaining what this import statement is doing
//this is bringing in the jsx from the file HelloReact.js to build a portion in App
import HelloReact from './components/HelloReact';

// TODO: Add a comment explaining the purpose of the App component
//Within the function App, it is returning the contents of HelloReact
function App() {
  return <HelloReact />;
}

export default App;
