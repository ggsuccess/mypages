import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Subway from './components/Subway';
import Soccer from './components/Soccer';
import Header from './components/Header';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <div>
      <div style={{ textAlign: 'center' }}>My Page</div>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home} />;
        <Route path="/Subway" component={Subway} />
        <Route path="/Soccer" component={Soccer} />
      </Switch>
      <Route path="/SignUp" component={SignUp} />
    </div>
  );
};

export default App;
