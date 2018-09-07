import React, { Component } from 'react';
import './App.css';
import Ticker from './Tickers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 >Cryptocurrencty Ticker</h2>
        </header>

        <Ticker />
        
      </div>
    );
  }
}

export default App;
