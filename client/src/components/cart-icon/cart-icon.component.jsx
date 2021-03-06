import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector} from 'reselect'
import { toggleCartHidden } from  '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

import { ReactComponent as ShoppinIcon } from '../../assets/11.2 shopping-bag.svg.svg'

import './cart-icon.styles.scss'


const CartIcon = ({ toggleCartHidden, itemCount }) => ( 
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppinIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
    
  </div>
);

const mapDispatchProps = dispatch => ( {
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector ({
  itemCount: selectCartItemsCount
})





export default connect(
  mapStateToProps,
  mapDispatchProps
)(CartIcon);