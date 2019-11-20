import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router';
import { AnimatedSwitch } from 'react-router-transition';

import {
  Switch,
  BrowserRouter as Router,
  Route,
  useLocation,
  useParams
} from "react-router-dom";

import { store, history } from './store';

import AdminPage from './components/AdminPage';

import FirstStrike from './strikes/FirstStrike';
import SecondStrike from './strikes/SecondStrike';
import ThirdStrike from './strikes/ThirdStrike';
import FourthStrike from './strikes/FourthStrike';
import FifthStrike from './strikes/FifthStrike';
import SixStrike from './strikes/SixStrike';
import SevenStrike from './strikes/SevenStrike';
import EightStrike from './strikes/EightStrike';
import NineStrike from './strikes/NineStrike';
import TenStrike from './strikes/TenStrike';
import ElevenStrike from './strikes/ElevenStrike';
import TwelveStrike from './strikes/TwelveStrike';
import ThirteenStrike from './strikes/ThirteenStrike';
import FourteenStrike from './strikes/FourthStrike';
import FifteenStrike from './strikes/FifteenStrike';
import SixteenStrike from './strikes/SixteenStrike';

const App = () => {
  // let location = useLocation();
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path="/" component={AdminPage} />
            <Route exact path="/10SS-1" component={FirstStrike} />
            <Route exact path="/10SS-5" component={SecondStrike} />
            <Route exact path="/10SS-10" component={ThirdStrike} />
            <Route exact path="/10SS-11" component={FourthStrike} />
            <Route exact path="/10SS-6" component={FifthStrike} />
            <Route exact path="/10SS-7" component={SixStrike} />
            <Route exact path="/10SS-8" component={SevenStrike} />
            <Route exact path="/10SS-9" component={EightStrike} />
            <Route exact path="/10SS-12" component={NineStrike} />
            <Route exact path="/10SS-13" component={TenStrike} />
            <Route exact path="/10SS-14" component={ElevenStrike} />
            <Route exact path="/10SS-15" component={TwelveStrike} />
            <Route exact path="/10SS-16" component={ThirteenStrike} />
            <Route exact path="/10SS-17" component={FourthStrike} />
            <Route exact path="/10SS-18" component={FifthStrike} />
            <Route exact path="/10SS-19" component={SixteenStrike} />
          </AnimatedSwitch>
        </Router>
      </ConnectedRouter>
    </Provider>
  )
};

export default App;