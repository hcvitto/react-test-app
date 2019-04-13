import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import HeaderComponent from './components/Common/Header';
import Routes from './components/Routes';

class App extends Component {
  render() {
    return (
			<Router>
        <div className="App">
          <HeaderComponent></HeaderComponent>
          <div id="content-wrapper">
            <div className="container">
              <Routes></Routes>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
