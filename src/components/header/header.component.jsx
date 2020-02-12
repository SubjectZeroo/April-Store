import React from 'react';
import{ Link } from 'react-router-dom';
import {  connect } from 'react-redux';

import { createStructuredSelector} from 'reselect'

import{ auth } from '../../firebase/firebase.util'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { selectCurrentUser } from '../../redux/user/user.selector';

// import { ReactComponent as Logo } from '../../assets/uo.jpg';

import logo from '../../assets/logo-01.png'

import './header.styles.scss';
import { selectCartHidden } from '../../redux/cart/cart.selector';


const HeaderPage = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <img src={logo} alt={"logo"}/> 
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
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

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})
export default connect(mapStateToProps)(HeaderPage);