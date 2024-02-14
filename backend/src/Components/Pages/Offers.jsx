// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../Styles/Room.css';
import {Link} from 'react-router-dom';
const offers = [
  {
    id: 1,
    title: 'Grandmaster Gambit Chess Academy',
    description: 'Chennai',
    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBo7XdNS-y-4BVDWzIC_6CoMN-vuxjHNQOXg&usqp=CAU'
  },
  {
    id: 2,
    title: 'Knight Quest Chess Academy',
    description: 'Pudhukottai',
    imageUrl: 'https://media.gettyimages.com/id/1285758531/photo/brilliant-little-girl-playing-chess-with-his-distant-relative-or-uncle-uses-laptop-for-video.jpg?s=612x612&w=0&k=20&c=eo9YjZC1ayqbYICuOPO87zuhBAnjuIaoB8Jfs-kGtmk='
  },
  {
    id: 3,
    title: 'Checkmate Academy of Chess Excellence',
    description: 'Karur',
    imageUrl: 'https://media.gettyimages.com/id/1131616973/photo/boys-playing-chess-while-teacher-watching-them.jpg?s=612x612&w=0&k=20&c=-h9c9bBdt9u8yV76b-DxmbwAtnL8hHPbVoRjtcL9K7Y='
  },
  {
    id: 4,
    title: 'Pawns Progress Chess Academy',
    description: 'Trichy',
    imageUrl: 'https://media.gettyimages.com/id/1312629557/photo/liaocheng-china-primary-school-students-attend-a-chess-competition-on-the-playground-on-april.jpg?s=612x612&w=0&k=20&c=FHRt3b65RKNPS_YZLTlBzS8VlVPAXCG0khTwLQwJ2eU='
  },
  {
    id: 5,
    title: 'Rooks Retreat Chess Academ',
    description: 'Dindugal',
    imageUrl: 'https://media.gettyimages.com/id/522624649/photo/students-playing-chess-at-garden-of-bogazici-university-istanbul-turkey.jpg?s=612x612&w=0&k=20&c=REzJVl_3Skrta3R2G4m8MPj_0TajktuLDD61wCyb3XU='
  },
  {
    id: 6,
    title: 'Chess Champions Academy',
    description: 'Coimbatore',
    imageUrl: 'https://media.gettyimages.com/id/1548515654/photo/portland-maine-congolese-asylum-seeker-valere-10-and-retired-orthopedic-surgeon-dr-laurie.jpg?s=612x612&w=0&k=20&c=wZzpWnMorRjXOOFhIV4liSPn1Fu0dWMYsjYb7q9Rcp0='
  },
  
  {
    id: 7,
    title: 'Strategic Moves Chess Academy',
    description: 'Krishnagiri',
    imageUrl: 'https://media.gettyimages.com/id/650613026/photo/outdoor-chess-in-barcelona-spain.jpg?s=612x612&w=0&k=20&c=q1XXYZ2tDPsdDdqqftdpq3VSJcXvy9Kc3n__9NDcGe4='
  },
  
  {
    id: 8,
    title: 'Endgame Excellence Chess Academy',
    description: 'Kanyakumari',
    imageUrl: 'https://media.gettyimages.com/id/646308624/photo/headmaster-c-s-kipping-instructs-a-classroom-of-boys-on-the-rules-of-chess-using-his.jpg?s=612x612&w=0&k=20&c=8rnLlCUFqXw9BhD6QlpG7iALc6tQkUGu0X8Y2WJefXw='
  },
  
  
  
  
];

const Offers = () => {
//   const handleViewClick = (offerId) => {
  
//     console.log(View clicked for offer with ID ${offerId});


//   };

//   const handleSubmitClick = (offerId) => {
   
    
//     console.log(Submit clicked for offer with ID ${offerId});

//   };

  return (
    <div className='done'>
    <div className="offers-container">
      {offers.map(offer => (
        <div className="offer" key={offer.id}>
          <img className="offer-image" src={offer.imageUrl} alt={offer.title} />
          <h2 className="offer-title">{offer.title}</h2>
          <p className="offer-description">{offer.description}</p>
          <p className="offer-price">{offer.price}</p>
          <div className="offer-buttons">
            <Link to={'/BookEvents'}>
          <button onClick={() => handleSubmitClick(offer.id)}>Book Now</button></Link>
         {/* <Link to="/PhotoCollage"><button onClick={() => handleViewClick(offer.id)}>View</button></Link>
          <Link to="/RoomBookingPage"><button onClick={() => handleSubmitClick(offer.id)}>Book Now</button></Link> */}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Offers;