import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Fragment>
        <div className="app">
          <Switch>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={"Upchaar"} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
