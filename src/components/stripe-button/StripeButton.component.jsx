import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
      const priceForStripe = price * 100;
      const publishableKey = "pk_test_iQ7YvbguAXJgg3h9m3QblLty00m5alq868";
      //? Bellow function should make a request to backend server to match publishable key with secret key when it is confirmed from backed we should allow the payment
      const onToken = token => {
            console.log(token);
            alert("Payment succesfull");
      };

      return (
            <StripeCheckout
                  label="Pay Now"
                  name="Pasha Clothing Ltd."
                  billingAddress
                  shippingAddress
                  image="https://sendeyo.com/up/d/f3eb2117da"
                  description={`Your total is $${price}`}
                  amount={priceForStripe}
                  panelLabel="Pay Now"
                  token={onToken}
                  stripeKey={publishableKey}
            />
      );
};
export default StripeButton;
