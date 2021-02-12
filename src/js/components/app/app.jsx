import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import history from '../../history/history.js';
import RegistrationScreen from '../registration-screen/registration-screen';
import {AppRoute} from '../../utils/const.js';
import InfoScreen from '../info-screen/info-screen.jsx';

const App = () => {

  return (
    <Router history={history}>
      <Switch>
        <Route exact path={`${AppRoute.ROOT}`}>
          <RegistrationScreen/>
        </Route>
        <Route exact path={`${AppRoute.INFO}`}>
          <InfoScreen/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
