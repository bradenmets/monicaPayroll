import React, { Component } from 'react';
import DateField from '../components/DateComponent';
import HoursField from '../components/HoursComponent';
import logo from '../images/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Monica's Payroll Site</h2>
        </div>
        <form >
          <div class="label" id="start-date">Start Date:</div>
          <DateField />
          <div class="label" id="end-date">End Date:</div>
          <DateField />
          <HoursField />
          <div class="label">Overtime:<div class="overTime"></div></div>
          <div class="label">Excuses:</div>
          <ul>
          <li>
            <div class="label">Reason:</div>
            <input type="text" id="excuses" />
            <div class="label">Hours worked</div>
            <input type="number" id="hoursWorked" />
          </li>
          <input type="button" onclick="alert('Excusessss!')" value="Add Excuse!" />
          </ul>
          <input type="submit" value="Submit" />
        </form>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
