import React from 'react'
import '../Styles/Navbar.css'; 
import '../Styles/Home.css'; 
import '../Styles/BookEvents.css'; 
import logo1 from '../Assets/Logo1.jpg'
import {  Avatar, IconButton,Box,Menu,MenuItem,Divider,ListItemIcon} from '@mui/material'
import { AccountBox,  Logout} from '@mui/icons-material';
import {Link} from 'react-router-dom'
import { useState} from 'react';
import'../Styles/New.css';
import Footer from './Footer';
// import '../Styles/Academy.css'


function Academy() {

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
              {/* <li><a href="/BookEvents">Book Events</a></li> */}
              <li><a className="active1"    href="/Offers">Academy</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Feedback</a></li>
             
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
        <div className='be-h1'>
            <h2>View Booked & Past Events:</h2>
        </div>
       

      <div className="be-none">
        <img className="be-noevents1" src="https://img.freepik.com/free-vector/illustrated-appointment-booking-with-calendar-concept_52683-38825.jpg?w=900&t=st=1706329469~exp=1706330069~hmac=d600cf38880c18cf106c110391f4466bdc9a93adbfcaed0132d4c89e9516c6d0"></img>
        <h3>Oops! No Past Events are Available for Now...</h3>
        <p>Book your Awesome events now!</p>
      </div>

      {/* <section className="py-5 header text-center">
        <div className="container py-4">
          <header>
            <h1 className="display-4">Bootstrap masonry</h1>
            <p className="font-italic text-muted mb-1">Use Masonry layouts with Bootstrap 4 grid system, using imagesLoaded plugin to fix the page loading issue.</p>
            <p className="font-italic text-muted">Snippet by <a className="text-dark" href="https://bootstrapious.com/"><u>Bootstrapious</u></a></p>
          </header>
        </div>
      </section> */}
      
        <br></br><br></br>
        

        {/* <div className='be-grid'>
        <section className="pb-5">
            <div className="container text-center">
            <div className="gallery-wrapper">
                <div className="grid-sizer col-lg-4 col-md-6"></div>

                <div className="col-lg-4 col-md-6 grid-item mb-4">
                <img className="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0" src="https://bootstrapious.com/i/snippets/sn-masonry/grid-item-1.png" alt="" />
                <h2 className="h4">Masonry grid item</h2>
                <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

            </div>
            </div>
        </section>     

        
        </div> */}
      <br></br>

       <Footer/>
        </div>
       
        
      </div>
  )
}


export default Academy