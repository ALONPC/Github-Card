import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './custom.css';
import cardCollection from './data.js';
import Card from './Card.js';
import CardList from './CardList.js';
import Form from './Form';

class App extends Component {

  // state = {
  //   cards: [
  //     {
  //         "login": "ALONPC",
  //         "avatar_url": "https://avatars2.githubusercontent.com/u/15879751?v=4",
  //         "name": "Alonso Berrios",
  //         "company": null,
  //     }, {
  //         "login": "adbernal",
  //         "avatar_url": "https://avatars2.githubusercontent.com/u/31907186?v=4",
  //         "name": "Adolfo Bernal",
  //         "company": null,
  //     }, {
  //         "login": "maleb1337",
  //         "avatar_url": "https://avatars0.githubusercontent.com/u/23465142?v=4",
  //         "name": null,
  //         "company": null,
  //     }
  //   ]
  // };

  state = cardCollection; // Usando el import

  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo) // Retorna el state anterior con la info de la nueva card concatenada al array de cards
    }));
    console.log('New card has been appended!', this.state.cards)
  }

  render() {
    console.log('Cards:', this.state.cards);
    return (
      <div>      
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards}/>
      </div>

    );
  }
}

export default App;
