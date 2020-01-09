import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';


import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>Pagina de sombrero</h1>
  </div>
)
function App() {
  return (
    <div>
      <Switch>
        <Route  exact path='/' component={ HomePage } />
        <Route  path='/sombreros' component={ HatsPage } />
      </Switch>
    </div>
  );
}

export default App;
