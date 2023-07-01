import React, { useState,useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from '../../assets/3.png'
import { userAuth } from "../../context/UserContext";


const Navbar = () => {
    const navigate = useNavigate();
    const [userInfo,setUserInfo] = userAuth();


    const handleLogout = () => {
      localStorage.removeItem("user-data");    
        setUserInfo({});
        navigate('/login')
  }

  useEffect(() => {
    if(Object.keys(userInfo).length === 0) setUserInfo(userInfo);
    else setUserInfo({});
},[])

useEffect(() => {
  const userInfo = localStorage.getItem("user-data");
  if(userInfo) setUserInfo(userInfo);
},[])

  return (
    <>
      <div className="navBarBox">
        <div className="linkBox">
          <div className="IconBox">
            <NavLink className='lil' to='/'>
              <img src={logo} alt="" style={{width:"2rem",height:"2rem",backgroundColor:"transparent"}} />
            </NavLink>
          </div>
          <ul className="ulLinkBox">
            <li>
              <NavLink className='lil' to="/">Home</NavLink>
            </li>
            <li>
              <NavLink  className='lil'  to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className='lil'  to="/all">Function</NavLink>
            </li>
            <li>
              <NavLink  className='lil' to="/market"> MarketPlace</NavLink>
            </li>
            
          </ul>
        </div>

        <div className="authBox">
        {
          Object.keys(userInfo).length === 0 ?
          <NavLink  className='lil' to="/login">Login</NavLink>:
          <button className="lil2" onClick={handleLogout} >Logout</button>
        }
        </div>
      </div>
    </>
  );
};

export default Navbar;
