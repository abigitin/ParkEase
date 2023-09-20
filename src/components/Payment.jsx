import React, { useState } from 'react';
import GooglePayButton from '@google-pay/button-react';

function Payment() {

  const [cardHolder, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

   
    console.log('Card Holder Name:', cardHolder);
    console.log('Card Number:', cardNumber);
    console.log('Expiration Date:', expirationDate);
    console.log('CVV:', cvv);

  
    setCardHolderName('');
    setCardNumber('');
    setExpirationDate('');
    setCvv('');
  };

  const handlePayment = () => {
    alert("Successfully booked a parking spot.");  
 };


  return (
    <>
    <div className="bg-black h-screen">
      <h1 className="text-center text-2xl text-yellow-500 font-bold mb-4">Payment Form</h1>
     <form onSubmit={handleSubmit}>
      <div className="mx-8 mb-4">
        <label htmlFor="cardHolder" className="block text-white font-medium">Card Holder Name</label>
        <input type="text" id="cardHolder" placeholder="Enter your Name" value={cardHolder} onChange={(e)=> setCardHolderName(e.target.value)} required/>
      </div>
        <div className="mx-8 mb-4">
          <label htmlFor="cardNumber" className="block text-white font-medium">Card Number</label>
          <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required  />
        </div>
      <div className="mx-8 mb-4">
          <label htmlFor="expirationDate" className="block text-white font-medium">Expiration Date</label>
          <input  type="text" id="expirationDate" placeholder="MM/YY" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)}  required />
       </div>
        <div className="mx-8 mb-4">
          <label htmlFor="cvv" className="block text-white font-medium">CVV</label>
          <input  type="text"  id="cvv" placeholder="123" value={cvv} onChange={(e) => setCvv(e.target.value)} required  />
        </div>
        <button className="bg-yellow-400 rounded-md py-2 mx-8 m-4" onClick={handlePayment} type="submit">BOOK NOW</button>
      </form>

      {/* Google pay button */}
      <div className="Gpay">
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA"]
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "exampleGatewayMerchantId"
                }
              }
            }
          ],
          merchantInfo: {
            merchantId: "12345678901234567890",
            merchantName: "Demo Merchant"
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: "10",
            currencyCode: "INR",
            countryCode: "IN"
          },
          shippingAddressRequired: false,
          callbackIntents: ["PAYMENT_AUTHORIZATION"]
        }}
        onLoadPaymentData={(paymentRequest) => {
          console.log("Success", paymentRequest);
        }}
        onPaymentAuthorized={(paymentData) => {
          console.log("Payment Authorised Success", paymentData);
          return { transactionState: "SUCCESS" };
        }}
      
        existingPaymentMethodRequired="false"
        buttonColor="white"
        buttonType="book"
        
      />
    </div>
    </div>
    </>
  );
}

export default Payment;
