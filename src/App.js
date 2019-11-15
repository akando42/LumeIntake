import React from 'react';
import ReactDOM from "react-dom";
import { ConnectedRouter } from 'connected-react-router';
import { AnimatedSwitch } from 'react-router-transition';

import {
  Switch,
  BrowserRouter as Router,
  Route,
  useLocation,
  useParams
} from "react-router-dom";

import FirstStrike from './strikes/FirstStrike';
import SecondStrike from './strikes/SecondStrike';
import ThirdStrike from './strikes/ThirdStrike';
import FourthStrike from './strikes/FourthStrike';
import FifthStrike from './strikes/FifthStrike';
import SixStrike from './strikes/SixStrike';
import SevenStrike from './strikes/SevenStrike';

import AdminPage from './components/AdminPage';

const App = () => {
  // let location = useLocation();
  return (
      <Router>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/" component={FirstStrike} />
          <Route exact path="/10SS-5" component={SecondStrike} />
          <Route exact path="/10SS-10" component={ThirdStrike} />
          <Route exact path="/10SS-11" component={FourthStrike} />
          <Route exact path="/10SS-6" component={FifthStrike} />
          <Route exact path="/10SS-7" component={SixStrike} />
          <Route exact path="/10SS-18" component={SevenStrike} />
          
          <Route exact path="/admin" component={AdminPage} />
          
        </AnimatedSwitch>
      </Router>
  )
};

export default App;