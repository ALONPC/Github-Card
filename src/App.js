import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './custom.css';
import data from './data.js';
import Card from './Card.js';
import CardList from './CardList.js';
import Form from './Form';

class App extends Component {
  render() {
    console.log(data);
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <div>      
        <Form/>
        <CardList cards={data}/>
      </div>

    );
  }
}

export default App;
