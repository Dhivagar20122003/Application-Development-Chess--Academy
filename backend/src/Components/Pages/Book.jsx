import { useState,useEffect } from "react";
import axios from "axios";
// import './AdminPage.css';
// import '../Styles/Home.css'
// import '../Pages/Navbar.jsx'
import RegistrationForm from "../Pages/RegistrationForm";
const Book = () => {
    const [data,setData]=useState([]);
    const playerList=data;
    const[open,setOpen]=useState(false)
    useEffect(()=>{
        axios.get("http://localhost:8080/add").then((response)=>{
        setData(response.data);
        })
        .catch((error)=>{
        console.log(error);
        });
    },[]);
    const handleBook=()=>{
        setOpen(true);
    }
  return (
    <div>
        {/* <Navbar/> */}
      <div className="player">
        <h2>List Of Academy</h2>
        <table>
          <thead className='summa'>
            <tr>
              <th>Name</th>
              <th>Chess Academy</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Action</th>
             
            </tr>
          </thead>
          <tbody>
            {playerList.map(player  => (
              <tr key={player.id}>
                <td className='su-td'>{player.name}</td>
                <td className='su-td'>{player.chessacademyname}</td>
                <td className='su-td'>{player.phonenumber}</td>
                <td className='su-td'>{player.email}</td>
                <td>
                  <button type="submitii" onClick={() => handleBook()}>Book</button>
                </td>
              </tr>
            ))}
            
          </tbody>
          
        </table>
        {open &&(<RegistrationForm/>)}
    </div>
    </div>
  )
}

export default Book