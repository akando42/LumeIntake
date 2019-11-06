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
import ContactPage from './components/ContactPage';

const App = () => (
    <Router>
      <Switch>
        <Route exact path="/" component={FormPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/contact" component={ContactPage} /> 
      </Switch>
    </Router>
);

export default App;