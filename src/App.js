import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Main from './containers/MainContainer';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <body className="container">
    <Router>
      <Route exact path='/' component={Main} />
    </Router>
    </body>
    </>
  );
}

export default App;
