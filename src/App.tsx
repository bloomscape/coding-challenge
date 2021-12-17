import React from 'react';
import logo from './logo.svg';
import './App.css';
import Screen from './containers/screen'
import Operator from './containers/operator';
import Dispatcher from './containers/dispatcher';
import Cash from './containers/cash';

function App() {
  return (
    <div className="App">
      <div className="topMachine">
        <Screen></Screen>
        <Operator></Operator>
      </div>
      <Dispatcher></Dispatcher>
      <Cash></Cash>
    </div>
  );
}

export default App;
