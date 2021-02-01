import { getAllByPlaceholderText } from '@testing-library/react';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../compomemts/checkout-item/checkout-item.component';
import StripeCheckoutButton from "../../compomemts/stripe-button/stripe-button.component";

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';


import './checkout.styles.scss';

const getDate = () => {
  let today = new Date()
  let year = (today.getFullYear() + 2).toString().substr(-2);
  let month = today.getMonth()
  let myFutureDate = `${month}/${year}`
  return myFutureDate
}

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(cartItem =>
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      )
    }
    <div className='total'><span>TOTAL: ${total}</span></div>
    <div className='warning'>
      <p><b>**Please use the following test credit cart for payment**</b><br />
        <b>**Card#:</b> 4242 4242 4242 4242**<br />
        <b>**Exp:</b> {getDate()}**<br />
        <b>**CVV:</b> 123**</p>
    </div>
    <StripeCheckoutButton price={total} />
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
