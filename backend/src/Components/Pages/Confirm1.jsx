// Offers.js
import React from 'react';
import '../Styles/Confirm.css';

import { Link, Router } from 'react-router-dom';
const offers = [
 
  {
    id: 2,
    title: 'Course name:Intermediate class',
    description: 'Course Duration:3 Months',
    confirmation: 'your slot has been booked',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUVUx4tWQbb7PtYaX1M9Y2vR7M_vZc8bRq3A&usqp=CAU'
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