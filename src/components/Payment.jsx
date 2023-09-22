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
              onChange={(e) => setCardHolderName(e.target.value)}
              required
              className="border-2 rounded-md py-2 px-3 bg-gray-200"
            />
          </div>
          <div className="flex flex-col p-2">
            <label htmlFor="cardNumber" className="text-lg font-semibold text-white">
              Card Number:
            </label>
            <input
              type="text"
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
              className="border-2 rounded-md py-2 px-3 bg-gray-200"
            />
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col p-2">
              <label htmlFor="expirationDate" className="text-lg font-semibold text-white">
                Expiration Date:
              </label>
              <input
                type="text"
                id="expirationDate"
                placeholder="MM/YY"
                maxLength="4"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                required
                className="border-2 rounded-md py-2 px-3 bg-gray-200"
              />
            </div>
            <div className="flex flex-col p-2 mx-14">
              <label htmlFor="cvv" className="text-lg font-semibold text-white">
                CVV:
              </label>
              <input
                type="text"
                id="cvv"
                placeholder="123"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
                maxLength="3"
                style={{ width: "60px" }}
                className="border-2 rounded-md py-2 px-3 bg-gray-200 flex items-end justify-end"
              />
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
