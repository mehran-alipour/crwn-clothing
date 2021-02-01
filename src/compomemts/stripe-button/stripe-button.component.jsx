import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51IGAjjBnaYayPlcO9M8Y1gHwityfNyu2ZdVGUTOynyqjHYKmLy4T4a4cRcmmAEfOg3Xe4pDy6HBY3ZPM77TAySEf00GZeAJ2Bb";

  const onToken = token => {
    console.log(token)
    alert('Payment Successfull')
  }

  return (
    <StripeCheckout
      lable='Pay Now'
      name='CRWN clothing Ltd'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;
