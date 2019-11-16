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
import NineStrike from './strikes/NineStrike';
import TenStrike from './strikes/TenStrike';
import ElevenStrike from './strikes/ElevenStrike';

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
          <Route exact path="/10SS-4" component={SecondStrike} />
          <Route exact path="/10SS-5" component={ThirdStrike} />
          <Route exact path="/10SS-6" component={FourthStrike} />
          <Route exact path="/10SS-7" component={FifthStrike} />
          <Route exact path="/10SS-8" component={SixStrike} />
          <Route exact path="/10SS-9" component={NineStrike} />
          <Route exact path="/10SS-10" component={TenStrike} />
          <Route exact path="/10SS-11" component={ElevenStrike} />
          <Route exact path="/admin" component={AdminPage} />
          
        </AnimatedSwitch>
      </Router>
  )
};

export default App;