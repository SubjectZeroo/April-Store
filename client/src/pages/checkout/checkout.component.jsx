import React from 'react'
import {connect} from 'react-redux'

import { createdStructuredSelectors, createStructuredSelector } from 'reselect'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selector'

import './checkout.styles.scss'
// import CartItem from '../../components/cart-item/cart-item.component'

const CheckoutPage = ({cartItems, total}) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Productos</span>
      </div>
      <div className='header-block'>
        <span>Descripcion</span>
      </div>
      <div className='header-block'>
        <span>Cantidad</span>
      </div>
      <div className='header-block'>
        <span>Precion</span>
      </div>
      <div className='header-block'>
        <span>Remover</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
    <div className='total'>TOTAL: ${total}</div>
    <div className='test-warning'>
      *Por Favor usa la siguiente tarjeta de credito para pagos de testeo*
      <br />
      4242 4242 4242 4242 - exp>-1-20 -CVV: 123
    </div>
    <StripeCheckoutButton price={total}/>
  </div>
)
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal

});

export default connect(mapStateToProps)(CheckoutPage);