import React, {Component} from 'react';
import axios from 'axios';
import Notify from 'notifyjs';

class Form extends Component{
    
    state = { userName: '', error: '' }

    // clean = (currentState) => {
        
    // }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Event triggered!', this.state.userName);
        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then(resp => {
                this.props.onSubmit(resp.data);
                this.setState({ error: '' });
                this.setState({ userName: '' });
            })
            .catch(errorMsg => {
                // console.log(errorMsg);
                this.setState({ error: errorMsg });
                console.log('ERROR_RESPONSE', this.state.error.response);
                let status = this.state.error.response.status;
                // let notif = new Notify('Error!', {
                //     body: 'This is an awesome notification',
                // });

                // notif.show();
            }); // Promise
    }
    
    render(){
        return(
            
            <form onSubmit={this.handleSubmit}>
                <input size='20' type='text' value={this.state.userName} onChange={(event) => this.setState({ userName: event.target.value })} placeholder='Github username' required></input>
                <button type='submit'>Add card</button>
                <div className='error'>{String(this.state.error)}</div>
            </form>
        )
    }
}

export default Form;