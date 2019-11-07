import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import {
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import FirstStrike from './strikes/FirstStrike';
import SecondStrike from './strikes/SecondStrike';
import ThirdStrike from './strikes/ThirdStrike';
import FourthStrike from './strikes/FourthStrike';

import AdminPage from './components/AdminPage';

const App = () => (
    <Router>
      <Switch>
        <Route exact path="/" component={FirstStrike} />
        <Route exact path="/10SS-5" component={SecondStrike} />
        <Route exact path="/10SS-10" component={ThirdStrike} />
        <Route exact path="/10SS-11" component={FourthStrike} />
        <Route exact path="/admin" component={AdminPage} />
      </Switch>
    </Router>
);

export default App;