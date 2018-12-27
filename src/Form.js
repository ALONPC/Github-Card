import React, {Component} from 'react';

class Form extends Component{
    
    state = { userName: '' }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Event triggered!', this.userNameInput.value);
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Github username' required></input>
                <button type='submit'>Add card</button>
            </form>
        )
    }
}

export default Form;