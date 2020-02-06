import React from 'react';
import{ Link } from 'react-router-dom';
import {  connect } from 'react-redux';

import{ auth } from '../../firebase/firebase.util'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { ReactComponent as Logo } from '../../assets/uo.jpg';

import './header.styles.scss';


const HeaderPage = ({ currentUser, hidden }) => (
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
      <CartIcon />
    </div>
   { hidden ? null : <CartDropdown />}
  </div>
)

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
  currentUser,
  hidden
})
export default connect(mapStateToProps)(HeaderPage);