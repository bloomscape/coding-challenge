import React from 'react';
import logo from './logo.svg';
import './App.css';
import Screen from './containers/screen'
import Operator from './containers/operator';

function App() {
  return (
    <div className="App">
      <Screen></Screen>
      <Operator></Operator>
    </div>
  );
}

export default App;
