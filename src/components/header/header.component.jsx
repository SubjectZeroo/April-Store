import React from 'react';
import{ Link } from 'react-router-dom';
import {  connect } from 'react-redux';

import{ auth } from '../../firebase/firebase.util'

import { ReactComponent as Logo } from '../../assets/uo.jpg';

import './header.styles.scss';


const HeaderPage = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
    
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        Contact
      </Link>
      {
        currentUser ?       
        <div className='option' onClick={() => auth.signOut()}>Salir</div>
        :
        <Link className='option' to='/sigin'>log in</Link> 
      }
    </div>
  </div>
)

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})
export default connect()(HeaderPage);