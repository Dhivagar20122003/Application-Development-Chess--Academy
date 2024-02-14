import axios from 'axios';
import { useState,useEffect } from 'react';
import UpdateRegister from './UpdateRegister';
const Booked = () => {
    const [data,setData]=useState([]);
    const playerList=data;
    const[efirstname,setFirstname]=useState('');
    const[open,setOpen]=useState(false)
    useEffect(()=>{
        axios.get("http://localhost:8080/reg").then((response)=>{
        setData(response.data);
        })
        .catch((error)=>{
        console.log(error);
        });
    },[]);
    const handleUpdate=()=>{
        setFirstname(efirstname);
        setOpen(true);
    }
    const handleDelete= async(firstname)=>{
        try{
            await axios.delete(`http://localhost:8080/reg/${firstname}`);
            window.location.href="/Booked"
            alert("deleted")
          }
          catch(error){
            console.log(error);
            alert("unsuccessfull");
            
          }
    }
  return (
    <div>
      <table>
          <thead className='summa'>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Father Name</th>
              <th>Mother Name</th>
              <th>Age</th>
              <th>Phone Number</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Action1</th>
              <th>Action2</th>
            </tr>
          </thead>
          <tbody>
            {playerList.map(player  => (
              <tr key={player.id}>
                <td className='su-td'>{player.firstname}</td>
                <td className='su-td'>{player.lastname}</td>
                <td className='su-td'>{player.fathername}</td>
                <td className='su-td'>{player.mothername}</td>
                <td className='su-td'>{player.age}</td>
                <td className='su-td'>{player.phonenumber}</td>
                <td className='su-td'>{player.gender}</td>
                <td className='su-td'>{player.address}</td>
                <td>
                  <button type="submitii" onClick={() => handleDelete(player.firstname)}>Delete</button>
                </td>
                <td>
                  <button type="submitii" onClick={() => handleUpdate(player.firstname)}>Update</button>
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
        {open &&(<UpdateRegister efirstname={efirstname} />)}
    </div>
  )
}

export default Booked