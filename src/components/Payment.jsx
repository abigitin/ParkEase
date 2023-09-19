import React, { useState } from 'react';

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

  return (
    <>
    <div className="bg-black h-screen">
      <h1 className="text-center text-2xl text-yellow-500 font-bold mb-4">Payment Form</h1>
      <form onSubmit={handleSubmit}>
      <div className="mx-8 mb-4">
        <label htmlFor="cardHolder" className="block text-white font-medium">Card Holder Name</label>
        <input type="text" id="cardHolder" value={cardHolder} onChange={(e)=> setCardHolderName(e.target.value)} required/>
      </div>
        <div className="mx-8 mb-4">
          <label htmlFor="cardNumber" className="block text-white font-medium">Card Number</label>
          <input type="text" id="cardNumber"  value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required  />
        </div>
      <div className="mx-8 mb-4">
          <label htmlFor="expirationDate" className="block text-white font-medium">Expiration Date</label>
          <input  type="text" id="expirationDate" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)}  required />
       </div>
        <div className="mx-8 mb-4">
          <label htmlFor="cvv" className="block text-white font-medium">CVV</label>
          <input  type="text"  id="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} required  />
        </div>
        <button className="bg-yellow-400 rounded-md py-2 mx-8 m-4" type="submit">Payment Now</button>
      </form>
    </div>
    </>
  );
}

export default Payment;
