import logo from './logo.svg';
import './App.css';
import React from 'react';
import GooglePayButton from '@google-pay/button-react'
import FormData from './FormData';

function App() {
  return (
    <div className="App">
      <FormData />
      <h1>Google pay</h1>
      <hr/>
      <input style={{width:'217px',padding:'8px',marginBottom:'7px'}} placeholder='Enter Amount' type='number' name='amount' value='amount'/>
      <br/>
      <GooglePayButton 
        environment='TEST'
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY','CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD','VISA'],
              },
              tokenizationSpecification:{
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'examplegatewayMerchantId', 
                }
              }
            }
          ],
          merchantInfo: {
            merchantId: '1234567898761332440',
            merchantName: 'Demo Merchant',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: '1',
            currencyCode: 'USD',
            countryCode: 'US'
          },
          shippingAddressRequired: true,
          callbackIntents: ['PAYMENT_AUTHORIZATION'],
        }}
        onLoadPaymentData = { paymentRequest => {
          console.log('Success', paymentRequest)
        }}
        onPaymentAuthorized={paymentData => {
          console.log('Payment authorized success',paymentData)
          return{transactionState: 'SUCCESS'}
        }}
        existingPaymentMethodRequired = 'false'
        buttonColor='black'
        buttonType='Buy'
      />
    </div>
  );
}

export default App;
