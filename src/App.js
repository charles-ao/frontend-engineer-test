import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import CreateEmployee from './components/CreateEmployee';
import Employees from './components/Employees';
import EmployeePage from './components/EmployeePage'
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path='/'>
            <CreateEmployee />
          </Route>
          <Route path='/employees'>
            <Employees />
          </Route>
          <Route path='/employee-page'>
            <EmployeePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
