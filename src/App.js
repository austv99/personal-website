import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Main from './containers/MainContainer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize('UA-150410010-2');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <>
    <body className="container">
    <Router>
    <Route exact path="/" component={Main}/>
    </Router>
    </body>
    </>
  );
}

export default App;
