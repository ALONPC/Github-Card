
import React, { Component } from 'react';

class Card extends Component{
    render(){
        let hasCompany = this.props.company != null;
        return(
            <div className='info'>
                <img className='picture' src={this.props.avatar_url}></img>
                <div className='info'>
                    <div className='nickname'>{this.props.login}</div>
                    <div className='name'>{this.props.name}</div>
                    <div className='company'>{ hasCompany ? this.props.company : 'No company' }</div>
                </div>
            </div>
        )
    }
}

export default Card;