// Offers.js
import React from 'react';
import '../Styles/Confirm.css';

import { Link, Router } from 'react-router-dom';

const offers = [
  {
    id: 1,
    title: 'Course name:Beginner class',
    description: 'Course Duration:6 Months',
    confirmation: 'your slot has been booked',
    imageUrl: 'https://i.pinimg.com/originals/d6/aa/82/d6aa82bf6c37530d7521fd3f4164d516.jpg'
  },
 
 
  
];

const Offers = () => {
//   const handleViewClick = (offerId) => {
  
//     console.log(View clicked for offer with ID: ${offerId});
//   };

//   const handleSubmitClick = (offerId) => {
   
//     console.log(Submit clicked for offer with ID: ${offerId});
//   };

  return (
    <div className='hii'>
    <div className="offers-container">
      {offers.map(offer => (
        <div className="offer" key={offer.id}>
          <img className="offer-image" src={offer.imageUrl} alt={offer.title} />
          <h2 className="offer-title">{offer.title}</h2>
          <p className="offer-description">{offer.description}</p><br></br>
          <p className="offer-price">{offer.confirmation}</p>
          <div className="offer-buttons">
         <Link to="/Home"><button onClick={() => handleViewClick(offer.id)}>Back to home</button></Link>
         
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Offers;