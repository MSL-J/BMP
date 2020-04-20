import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './AddPlace.scss';

class AddPlace extends Component {
    render(){
        return(
            <div className='AddPlace'>
                here is AddPlace
            </div>
        )
    }
}

export default withRouter(AddPlace);