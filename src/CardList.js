
import React, { Component } from 'react';
import Card from './Card.js';

class CardList extends Component{
    render(){
        return(
            <div>
                {this.props.cards.map(card => <Card {...card} />)}
            </div>
        )
    }
}

export default CardList;