import React from 'react';

import {
  Switch,
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';

import AdminPage from './components/AdminPage';
import FormPage from './components/FormPage';

const App = () => (
    <Router>
      <Switch>
        <Route exact path="/admin" component={AdminPage} />
        <Route path="/" component={FormPage} />
      </Switch>
    </Router>
);

export default App;