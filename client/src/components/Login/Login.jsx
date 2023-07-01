import React, { useState } from 'react'
import './Login.css'
import {NavLink, useNavigate} from 'react-router-dom';
import axios from 'axios'

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  

  const handleLogin  = async (e) => {
    // console.log(lat+" "+long);
    e.preventDefault();
    console.log(e);
    try {
      const data = await axios.post("http://127.0.0.1:4000/login", {
        name,
        password,
      });
      
      if (data.status == 200) {
        console.log("Login succesfull by frontend" );
        localStorage.setItem('user-data',JSON.stringify(data.data));

        setName("");
        setPassword("");
        navigate('/');


      } else console.log("Login error in frontend");
    } catch (error) {
      console.log(error);
      console.log("working")
    }
  }

  return (
    <>
      <div className="LoginContainer">
        <div className="LoginBox1">
            <div className='LoginHeader'>Login</div>
            <div className="loginInputBox">
            <input
              type="text"
              placeholder="Enter your username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
                 <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            </div>
          
            <div className="LoginBtnBox">
            <button onClick={handleLogin}>Login</button>
            </div>
            
            
            <div className='SignupQuery'>
                Don't have an account  
                <NavLink className='LoginErr' to='/signup'>
                Signup
                </NavLink>
                ?
            </div>
        </div>
      </div>
    </>
  )
}

export default Login
