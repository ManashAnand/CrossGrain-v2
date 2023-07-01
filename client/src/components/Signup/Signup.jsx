import React, { useEffect, useState } from 'react'
import './Signup.css';
import {NavLink} from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lat, setlat] = useState();
  const [long, setlong] = useState();
  const [bigFarmer, setBigFarmer] = useState(false);
  const [files, setFiles] = useState();
  const [status,setStatus] = useState("");
  const [show,setShow] = useState(true)

  useEffect(() => {
    console.log(lat, long);
  }, [lat, long]);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        
     
        setlat(position.coords.latitude);
        setlong(position.coords.longitude);
        setShow(false)
       
        
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    // console.log(userInfo)
    const formData = new FormData();
    formData.set('name',name);
    formData.set('email',email);
    formData.set('password',password);
    formData.set('latitude',lat);
    formData.set('longitude',long);
    formData.set('file',files);
    console.log(formData)
      try {
        if(!files){
          alert("Please provide photo");
          return;
        }
        const  data  = await axios.post("http://127.0.0.1:4000/register",formData);
        if(data?.success){
            console.log("Image added");
        } 
        else{
            console.log("Product image uploaded succesfully");
            if(data?.data?._message){
              alert("please provide access for location");
            }
            console.log(data);
        }
        setName("");
        setEmail("");
        setPassword("");
        setFiles();
        
      } catch (error) {
        console.log(error);
      }
      // console.log(lat+" "+long);
  };

  return (
    <div className="LoginContainer">
    <div className="LoginBox">
        <div className='LoginHeader'>Signup</div>
        <div className="loginInputBox">
        <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
           <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        { show  && <div className='accessBtn' onClick={() => getLocation()}>Give access</div>}

        <p> Which type of farmer you are?</p>
        <div className='radioContainer'>
        <span className='spanspanspan'>
         <input type="radio" id="html"  name="HTML"  onChange={(e) => setBigFarmer(true)}/> Industrial Farmer
        </span>
        <span className='spanspanspan'>
          <input type="radio" id="html"  name="HTML"  onChange={(e) => setBigFarmer(false)}/> Small Farmer

        </span>
        </div>
        <input
              id="inputTag"
              type="file"
              onChange={(e) => setFiles(e.target.files[0])}
            />
        

        <div className="LoginBtnBox">
            <button onClick={handleSignUp}>Signup</button>
        </div>
        <div className='SignupQuery'>
            Already have an account  
            <NavLink className='LoginErr' to='/Login'>
            Login 
            </NavLink>
            ?
        </div>
    </div>
  </div>
  )
}

export default Signup
