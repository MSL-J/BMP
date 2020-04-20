import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './PlaceDes.scss';

class PlaceDes extends Component {
    render(){
        return(
            <div className='PlaceDes'>
                here is PlaceDes
            </div>
        )
    }
}

export default withRouter(PlaceDes);