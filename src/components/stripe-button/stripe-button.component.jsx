import React from 'react'

import StripeCheckout from 'react-stripe-checkout'


const StripeCheckoutButton =({ price }) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JBIIoH0ksmpfHw6Ub1q77NfhsiHnVnVFWIFIIpNJticDVqfZ4yT1sAU6EGkWHwEThjLU9Uihn2SVUof50dlGIE700XClbkN1s'
const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
        label ='Pay Now'
        name='Crown Clothing'
        billingAddress
        shippingAddress
        bitcoin
        image='https://static.vecteezy.com/system/resources/previews/002/132/077/non_2x/golden-crown-logo-sign-free-vector.jpg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}

        />
    )
}

export default StripeCheckoutButton;