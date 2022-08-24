// TODO: Add a comment giving a brief description of what React is
//React is a front end library, using components built to build the final result
import React from 'react';

// TODO: Add a comment that describes the difference between react and react-dom
//react-dom is the virtual connection between react and the actual dom
//The react package contains React.createElement, React.createClass and React.Component, React.PropTypes, React.Children, and the other helpers related to elements and component classes. We think of these as the isomorphic or universal helpers that you need to build components.

//The react-dom package contains ReactDOM.render, ReactDOM.unmountComponentAtNode, and ReactDOM.findDOMNode, and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString and ReactDOMServer.renderToStaticMarkup.

import ReactDOM from 'react-dom';

import App from './App';

// TODO: Add a comment describing the significance of the ReactDOM.render method
//reactDom.render is what is placing what is inside App into the root index file. So that it will populate on the front end
ReactDOM.render(<App />, document.getElementById('root'));
