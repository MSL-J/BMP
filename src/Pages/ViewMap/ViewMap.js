import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './ViewMap.scss';

class ViewMap extends Component {
    render(){
        return(
            <div className='ViewMap'>
                here is ViewMap
            </div>
        )
    }
}

export default withRouter(ViewMap);