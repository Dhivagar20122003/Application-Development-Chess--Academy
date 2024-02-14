import React from 'react'
import '../Styles/Navbar.css'; 
import '../Styles/Home.css'; 
import '../Styles/BookEvents.css'; 
import logo1 from '../Assets/Logo1.png'
import {  Avatar, IconButton,Box,Menu,MenuItem,Divider,ListItemIcon} from '@mui/material'
import { AccountBox,  Logout} from '@mui/icons-material';
import {Link} from 'react-router-dom'
import { useState} from 'react';
import Footer from './Footer';

function Booking() {

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
              {/* <li><a className="active1" href="/BookEvents">Enroll course</a></li> */}
              <li><a href="/Offers">Academy</a></li>
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
            <h2>Book your Event Here:</h2>
        </div>
        
        <br></br><br></br>
        

       
      <br></br>

       <Footer/>
        </div>
       
        
      </div>
  )
}

export default Booking