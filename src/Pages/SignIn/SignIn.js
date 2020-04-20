import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './SignIn.scss';

class SignIn extends Component {
    render(){
        return(
            <div className='SignIn'>
                here is SignIn
            </div>
        )
    }
}

export default withRouter(SignIn);