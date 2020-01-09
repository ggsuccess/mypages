import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Subway from './components/Subway';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact={true} component={Home} />;
        <Route path="/Subway" component={Subway} />
      </Switch>
    </div>
  );
};

export default App;
