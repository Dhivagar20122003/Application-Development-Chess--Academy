import '../Styles/New1.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
const Uacademy = ({ename}) => {
    const [name, setname] = useState('');
    const[chessacademyname, setchessacademyname]=useState('');
    const [phonenumber, setphonenumber] = useState('');
    const [email, setemail] = useState('');
    useEffect(()=>{
            axios.get(`http://localhost:8080/add/${ename}`)
            .then((response)=>{
                const data=response.data;
                if(data){
                    const{
                        name,
                        chessacademyname,
                        phonenumber,
                        email
                    }=data;
                    setname(name);
                    setchessacademyname(chessacademyname);
                    setphonenumber(phonenumber);
                    setemail(email);
                }
            })
        .catch((error)=>{
          console.log(error);
          alert("unsuccessfull");
          window.location.href="/Academy"
        });
    },[ename]);
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const dt={
            name:name,
            chessacademyname:chessacademyname,
            phonenumber:phonenumber,
            email:email
        };
        try{
          await axios.put(`http://localhost:8080/add/${ename}`,dt);
          setTimeout(()=>{
            alert("Updated")
          },400);
          console.log(dt);
          setTimeout(()=>{

              window.location.href="/Addacademy"
          },1000)
        }
        catch(error){
          console.log(error);
          alert("unsuccessfull");
        }
    };

  return (
    <div>
      <div className="admi-page-container">
     <center> <h1>Chess Academy Details</h1></center>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={(e) => setname(e.target.value)} required />
        </label>

        <label>
          Chess Academy Name:
          <input type="text" name="chessAcademyName" value={chessacademyname} onChange={(e) => setchessacademyname(e.target.value)} required />
        </label>

        <label>
          Phone Number:
          <input type="tel" name="phoneNumber" value={phonenumber} onChange={(e) => setphonenumber(e.target.value)} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={email} onChange={(e) => setemail(e.target.value)} required />
        </label>

        <button type="submitii">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Uacademy