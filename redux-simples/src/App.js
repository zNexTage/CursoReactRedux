import './App.css';
import React from 'react';

import Average from './components/Average';

import Interval from './components/Inverval';
import Raffle from './components/Raffle';
import Sum from './components/Sum';

function App() {
  return (
    <div className="App">
      <h1>
        Exercício React-Redux(Simples)
      </h1>
      <div className="linha">
        <Interval />

      </div>

      <div className="linha">
        <Average />
        <Sum />
        <Raffle />
      </div>

    </div>
  );
}

export default App;
