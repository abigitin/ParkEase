import React, { useState } from 'react';
import cardValidator from 'card-validator';
import GooglePayButton from '@google-pay/button-react';
import PaymentSuccessful from './PaymentSuccess';

function Payment() {

  const [cardHolder, setCardHolderName] = useState('');
  const [cardHoldeError, setCardHolderError] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardType, setCardType] = useState('');
  const [cardNumberError, setCardNumberError] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [expiryError, setExpiryError] = useState('');
  const [cvv, setCvv] = useState('');
  const [cvvError, setCvvError] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  
  
    const handleCardHolderChange = (e) => {
    const inputCardHolderName = e.target.value;
    setCardHolderName(inputCardHolderName);

    const nameRegex = /^[a-zA-Z\s.'-]+$/; 
    if (!nameRegex.test(inputCardHolderName)) {
      setCardHolderError('Invalid name format');
    } else {
      setCardHolderError('');
    }
  };
  

  const handleCardNumberChange = (e) => {
    const inputCardNumber = e.target.value;
    setCardNumber(inputCardNumber);
    
    const cardNumberValidation = cardValidator.number(inputCardNumber);

    if (!cardNumberValidation.isValid) {
      setCardNumberError('Invalid card number');
    } else {
      setCardNumberError('');
     
      const cardType = cardValidator.number(inputCardNumber).card.type;
      setCardType(cardType ? cardType : 'Unknown');
    }
  };

  const handleExpiryChange = (e) => {
    const inputExpiry = e.target.value;
    setExpirationDate(inputExpiry);

   
    const expiryRegex = /^(0[1-9]|1[0-2])\/[0-9]{4}$/;
    if (!expiryRegex.test(inputExpiry)) {
      setExpiryError('Invalid format (MM/YYYY)');
    } else {
      const [month, year] = inputExpiry.split('/');
      const currentDate = new Date();
      const enteredDate = new Date(parseInt(year, 10), parseInt(month, 10) - 1, 1);

      if (enteredDate < currentDate) {
        setExpiryError('Invalid Expiry Date');
      } else {
        setExpiryError('');
      }
    }
  };

  const handleCvv = (e) => {
    const inputCvv = e.target.value;
    setCvv(inputCvv);

    const cvvValidation = cardValidator.cvv(inputCvv);

    if (!cvvValidation.isValid) {
      setCvvError('Invalid CVV');
    } else {
      setCvvError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if(!cardHoldeError && !cardNumberError && !expiryError && !cvvError){
        
    setPaymentSuccess(true);
    console.log('Card Holder Name:', cardHolder);
    console.log('Card Number:', cardNumber);
    console.log('Expiration Date:', expirationDate);
    console.log('CVV:', cvv);
  }else{
      alert("Invalid Card Information!");
  }
};

  


  return (
    <>
    {paymentSuccess ? (
          <PaymentSuccessful />
        ) : (
      <div className="bg-black h-screen">
        <header className="text-yellow-300 font-bold text-3xl justify-center flex pt-6 py-8">
          <p className="bg-yellow-400 text-black mx-2 rounded-sm text-2xl">P</p>
          Payment <span className="text-white mx-2">Form</span>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col p-2">
            <label htmlFor="cardHolder" className="text-lg font-semibold text-white">
              Card Holder Name
            </label>
            <input
              type="text"
              id="cardHolder"
              placeholder="Enter your name"
              value={cardHolder}
              onChange={handleCardHolderChange}
              required
              className="border-2 rounded-md py-2 px-3 bg-gray-200"
            />
            {cardHoldeError && <div className="error text-white">{cardHoldeError}</div>}
          </div>
          <div className="flex flex-col p-2">
            <label htmlFor="cardNumber" className="text-lg font-semibold text-white">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={handleCardNumberChange}
              required
              className="border-2 rounded-md py-2 px-3 bg-gray-200"
              
            />
             {cardNumberError && <div className="error text-white">{cardNumberError}</div>}
          </div>
          <div> <span id="cardType" className="text-white">{cardType}</span></div>
          <div className="flex flex-row">
            <div className="flex flex-col p-2">
              <label htmlFor="expirationDate" className="text-lg font-semibold text-white">
                Expiration Date
              </label>
              <input
                type="text"
                id="expirationDate"
                placeholder="MM/YYYY"
                maxLength="7"
                value={expirationDate}
                onChange={handleExpiryChange}
                required
                className="border-2 rounded-md py-2 px-3 bg-gray-200"
              />
               {expiryError && <div className="error text-white">{expiryError}</div>}
            </div>
            <div className="flex flex-col p-2 mx-14">
              <label htmlFor="cvv" className="text-lg font-semibold text-white">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                placeholder="123"
                value={cvv}
                onChange={handleCvv}
                required
                maxLength="3"
                style={{ width: "60px" }}
                className="border-2 rounded-md py-2 px-3 bg-gray-200 flex items-end justify-end"
              />
              {cvvError && <div className="error text-white">{cvvError}</div>}
            </div>

          </div>
          
          <div className='py-5 flex justify-center'>
            <button
              className="bg-yellow-400 rounded-md p-3 text-black font-semibold "
              type="submit">
              Payment Now
            </button>
           </div>
        </form>
        

        {/* Google pay button */}
        <div className="Gpay flex justify-center">
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
                totalPrice: "100",
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
            buttonType="pay"
          />
        </div>
      </div>
      )}
    </>
  );
}


export default Payment;
