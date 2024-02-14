import '../Styles/RegistrationForm.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
const UpdateRegister = ({efirstname}) => {
    const [firstname,setfirstname]=useState('');
  const [lastname,setlastname]=useState('');
  const [fathername,setfathername]=useState('');
  const [mothername,setmothername]=useState('');
  // const [email,setemail]=useState('');
  const [age,setage]=useState('');
  const [phonenumber,setphonenumber]=useState('');
  const [gender,setgender]=useState('');
  const [address,setaddress]=useState('');
    useEffect(()=>{
            axios.get(`http://localhost:8080/reg/${efirstname}`)
            .then((response)=>{
                const data=response.data;
                if(data){
                    const{
                        firstname,
                        lastname,
                        fathername,
                        mothername,
                        age,
                        phonenumber,
                        gender,
                        address
                    }=data;
                    setfirstname(firstname);
                    setlastname(lastname);
                    setfathername(fathername);
                    setmothername(mothername);
                    setage(age);
                    setphonenumber(phonenumber);
                    setgender(gender);
                    setaddress(address);
                }
            })
        .catch((error)=>{
          console.log(error);
          alert("unsuccessfull");
          window.location.href="/Booked"
        });
    },[efirstname]);
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const dt={
            firstname:firstname,
            lastname:lastname,
            fathername:fathername,
            mothername:mothername,
            age:age,
            phonenumber:phonenumber,
            gender:gender,
            address:address
        };
        try{
          await axios.put(`http://localhost:8080/reg/${efirstname},dt`);
          setTimeout(()=>{
            alert("Updated")
          },400);
          console.log(dt);
          setTimeout(()=>{

              window.location.href="/Booked"
          },1000)
        }
        catch(error){
          console.log(error);
          alert("unsuccessfull");
        }
    };
  return (
    <div>
      <div className="lp">
      <div className="registration-form-container">
        <h1>Registration Form</h1>
        <form >
          <label>
            First Name:
            <input type="text" name="firstName" value={firstname} onChange={(e)=>setfirstname(e.target.value)} required />
          </label>

          <label>
            Last Name:
            <input type="text" name="lastName" value={lastname} onChange={(e)=>setlastname(e.target.value)} required />
          </label>

          <label>
            Father's Name:
            <input type="text" name="fathersName" value={fathername} onChange={(e)=>setfathername(e.target.value)} required />
          </label>

          <label>
            Mother's Name:
            <input type="text" name="mothersName" value={mothername} onChange={(e)=>setmothername(e.target.value)} required />
          </label>

          <label>
            Age:
            <input type="number" name="age" value={age} onChange={(e)=>setage(e.target.value)} required />
          </label>

          <label>
            Phone Number:
            <input type="tel" name="phoneNumber" value={phonenumber} onChange={(e)=>setphonenumber(e.target.value)} required />
          </label>

          <label>
            Gender:
            <select type="p" name="gender" value={gender} onChange={(e)=>setgender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>

          <label>
            Address:
            <textarea name="address" value={address} onChange={(e)=>setaddress(e.target.value)} required />
          </label>

          <button onClick={handleSubmit} type="submit">
            Enroll
          </button>
        </form>
        {/* <Image/> */}
      </div>
    </div>
    </div>
  )
}

export default UpdateRegister