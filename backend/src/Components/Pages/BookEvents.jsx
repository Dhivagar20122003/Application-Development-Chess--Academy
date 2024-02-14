import React from 'react'
import '../Styles/Navbar.css'; 
import '../Styles/Home.css'; 
import '../Styles/BookEvents.css'; 
import logo1 from '../Assets/Logo1.jpg'
import {  Avatar, IconButton,Box,Menu,MenuItem,Divider,ListItemIcon} from '@mui/material'
import { AccountBox,  Logout} from '@mui/icons-material';
import {Link} from 'react-router-dom'
import { useState} from 'react';
import Footer from './Footer';
import EventBox from './EventBox';
function BookEvents() {

  const[open1,setOpen] = useState('');
  const handleOpen = () => {
      setOpen(true);
  }

    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle the search submission (e.g., send search query to the server)
    console.log('Search term submitted:', searchTerm);
  };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <div className="be-overall">
      <div className='home-b'>
        <nav className='home-nav'>
          <div className="menu">
            <div className="logo">
              <img className="img1" src={logo1}/>
            </div>
            <ul className='home-ul'>
              <li><a href="/Home">Home</a></li>
              {/* <li><a className="active1" href="/BookEvents">Enroll Couse</a></li> */}
              <li><a href="/Offers">Academy</a></li>
              {/* <li><a href="/Home">About us</a></li> */}
              <li><a href="#">Contact</a></li>
              {/* <li><a href="#">Feedback</a></li> */}
             
              <Box sx={{ flexGrow: 0 }}>
                       <li>
                        <IconButton
                          onClick={handleClick} sx={{ p: 0}}
                          size="small"
                        >
                        <Avatar sx={{ width: 45, height: 45 ,bgcolor : "black" ,marginLeft:"10px" , marginBottom:"-10px", marginTop:"-8px" }}></Avatar>
                        </IconButton></li></Box>
                  </ul>
                  <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar sx={{ width: 45, height: 45 ,bgcolor : "black"}}/> <b>My Account</b>
          </MenuItem>
          <Divider />
         
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <AccountBox fontSize="small" />
            </ListItemIcon>
            <b>Profile</b>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon><Link to="/">
            <div className='logout'><b>Logout</b></div></Link>
          </MenuItem>
        </Menu>
          
          </div>
        </nav>
        <div className='hi'>
        <div className='be-h1'>
            <h2>Available courses....!</h2>
        </div>
        {/* <form className="search-form" onSubmit={handleSearchSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Type here to Search...."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="search-button" type="submit">
          <b>Search</b>
        </button>
      </form> */}

      {/* <div className="be-none">
        <img className="be-noevents" src="https://img.freepik.com/free-vector/illustrated-appointment-booking-with-calendar-concept_52683-38825.jpg?w=900&t=st=1706329469~exp=1706330069~hmac=d600cf38880c18cf106c110391f4466bdc9a93adbfcaed0132d4c89e9516c6d0"></img>
        <h3>Oops! No Upcoming Events for Now...</h3>
        <p>Watch this space for upcoming events!</p>
      </div> */}
      
        <br></br><br></br>
        

        <div className='be-grid'>
       
        
            <div className="containertext">
            <div className="gallery-wrapper">
                <div className="grid-sizer col-lg-4 col-md-6"></div>

                <div className="col-lg-4 col-md-6 grid-item mb-4">
                <img className="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0" src="https://i.pinimg.com/originals/d6/aa/82/d6aa82bf6c37530d7521fd3f4164d516.jpg" alt="" />
                <h2 className="h4">Class </h2>
                <p className="small text-muted font-italic">Course:Beginner class</p>
                <p className="small text-muted font-italic">Duration:6 Months </p>
                <p className="small text-muted font-italic">Timing:9am to 4pm </p>
                {/* <p className="small text-muted font-italic">Course Available Timings:6am to 6pm </p> */}
               <Link to='/RegistrationForm'><button type="text">Choose</button></Link> 
               
                </div>
              

                <div className="col-lg-4 col-md-6 grid-item mb-4">
                <img className="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUVUx4tWQbb7PtYaX1M9Y2vR7M_vZc8bRq3A&usqp=CAU" />
                <h2 className="h4">Class </h2>
                <p className="small text-muted font-italic">Course:Intermediate class</p>
                <p className="small text-muted font-italic">Duration:3 Months </p>
                <p className="small text-muted font-italic">Timing:9am to 4pm </p>
                {/* <p className="small text-muted font-italic">Course Available Timings:6am to 6pm </p> */}
                <Link to='/RegistrationForm'><button type="text">Choose</button></Link> 
                </div>
                <div className="col-lg-4 col-md-6 grid-item mb-4">
                <img className="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0" src="https://t3.ftcdn.net/jpg/05/53/99/12/240_F_553991255_68mubKYQuZXb6P01hcyHT3vmQLyaJQcM.jpg" alt="" />
               <center> <h2 className="h4">Class</h2></center>
                <p className="small text-muted font-italic">Course:Master class</p>
                <p className="small text-muted font-italic">Duration:2 Months </p>
                <p className="small text-muted font-italic">Timing:9am to 4pm </p>
                {/* <p className="small text-muted font-italic">Course Available Timings:6am to 6pm </p> */}
                <Link to='/RegistrationForm'><button type="text">Choose</button></Link> 
                </div>
            </div>
            </div>
        </div>
      <br></br>
      </div>
       <Footer/>
        </div>
      
      </div>
  )
}

export default BookEvents