
import React, { Component } from 'react';

class Card extends Component{
    render(){
        let hasCompany = this.props.company != null;
        let hasName = this.props.name != null;
        return(
            <div className='info card'>
                <img className='picture' src={this.props.avatar_url}></img>
                <div className='info'>
                    <div className='nickname'><a href={this.props.html_url}>{this.props.login}</a></div>
                    <div className='name'>{ hasName ? this.props.name : <div className='no-data'>name</div> }</div>
                    <div className='company'>{ hasCompany ? this.props.company : <div className='no-data'>company</div> }</div>
                </div>
            </div>
        )
    }
}

export default Card;