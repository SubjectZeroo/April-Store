import React from 'react';
import{ Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/uo.jpg';

import './header.styles.scss';


const HeaderPage = () => (
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
    </div>
  </div>
)


export default HeaderPage;