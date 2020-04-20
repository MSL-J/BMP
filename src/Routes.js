import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main/Main';
import PlaceDes from './Pages/PlaceDes/PlaceDes';
import AddPlace from './Pages/AddPlace/AddPlace';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import ViewMap from './Pages/ViewMap/ViewMap';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/placedes' component={PlaceDes} />
          <Route exact path='/addplace' component={AddPlace} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/viewmap' component={ViewMap} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;