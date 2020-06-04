import React, { Component } from 'react';
// import logo from './logo.svg';
import classes from './styles/index.css';
import Dashboard from './components/Dashboard/Dashboard';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard></Dashboard>
      </div>
    );
  }
}

export default App;
