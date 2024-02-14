import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Info.css";
import { useNavigate } from 'react-router-dom';
function Info() {
   const nav = useNavigate();
        const handleHome=()=>{
    //    nav("/Info")
        }
  return (
    
   
      <div className="headerContainer">
        <center><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <h1> <div className="med">Madrid Chess Academy!</div></h1><br></br><br></br><br></br>
        <br></br>
        
        <p>Whoever sees no other aim in the game than that of giving checkmate to one's opponent will never become a good Chess player.</p>
        <br></br><br></br>
        <Link to="Login">  <button className="but6">USER</button></Link>
        <Link to="Adminlogin"> <button className="but6">ADMIN</button></Link>
        </center>
      </div>
  );
}



export default Info;