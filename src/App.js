import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <Route path="/" exact={true} component={Home} />;
    </div>
  );
};

export default App;
