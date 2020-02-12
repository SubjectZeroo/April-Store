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


import { selectCartHidden } from '../../redux/cart/cart.selector';

import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink,OptionDiv} from './header.styles'

const HeaderPage = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <img src={logo} alt={"logo"}/> 
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/contact'>
        CONTACT
      </OptionLink>
      {
        currentUser ?       
        <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
        :
        <OptionLink to='/signin'>LOG IN</OptionLink> 
      }
      <CartIcon />
    </OptionsContainer>
   { hidden ? null : <CartDropdown />}
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})
export default connect(mapStateToProps)(HeaderPage);