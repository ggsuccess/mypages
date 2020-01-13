import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Subway from './components/Subway';
import Soccer from './components/Soccer';

const App = () => {
  return (
    <div>
      <div style={{textAlign:'center'}}>My Page</div>
      <Switch>
        <Route path="/" exact={true} component={Home} />;
        <Route path="/Subway" component={Subway} />
        <Route path="/Soccer" component={Soccer} />
      </Switch>
    </div>
  );
};

export default App;
