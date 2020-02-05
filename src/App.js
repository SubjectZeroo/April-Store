import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import HeaderPage from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sing-in-and-sign-up';


import { auth } from  './firebase/firebase.util';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <HeaderPage currentUser={this.state.currentUser} />
        <Switch>
          <Route  exact path='/' component={ HomePage } />
          <Route  path='/shop' component={ ShopPage } />
          <Route  path='/sigin' component={  SignInAndSignUpPage } />
        </Switch>
      </div>
    ); 
  }
}

export default App;
