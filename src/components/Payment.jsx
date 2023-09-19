import React, { useState } from 'react';

function PaymentForm() {
  // Define state variables to store form data
  const [cardHolder, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can implement payment processing logic here
    // For simplicity, we'll just log the form data for now
    console.log('Card Holder Name:', cardHolder);
    console.log('Card Number:', cardNumber);
    console.log('Expiration Date:', expirationDate);
    console.log('CVV:', cvv);

    // Clear the form fields
    setCardHolderName('');
    setCardNumber('');
    setExpirationDate('');
    setCvv('');
  };

  return (
    <div >
      <h1>Payment Form</h1>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="cardHolder">Card Holder Name</label>
        <input type="text" id="cardHolder" value={cardHolder} onChange={(e)=> setCardHolderName(e.target.value)} required/>
      </div>
        <div>
          <label htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber"  value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required  />
        </div>
      <div>
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input  type="text" id="expirationDate" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)}  required />
       </div>
        <div>
          <label htmlFor="cvv">CVV:</label>
          <input  type="text"  id="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} required  />
        </div>
        <button className="bg-yellow-400 rounded-r-md m-4" type="submit">Payment Now</button>
      </form>
    </div>
  );
}

export default PaymentForm;
