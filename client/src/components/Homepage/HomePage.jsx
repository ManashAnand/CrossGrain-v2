import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { userAuth } from "../../context/UserContext";
import './HomePage.css'
// import MapBox from '../MapBox/MapBox';
import MapBox from '../MapBox/MapBox'
import Product from '../../Product/Product';
 
const HomePage = () => {
  const navigate = useNavigate();
  const [userInfo,setUserInfo] = userAuth();
  const [lat,setLat] = useState(0);
  const [long,setLong] = useState(0);

  useEffect(() => {
    if(Object.keys(userInfo).length === 0)
    {
      setUserInfo(userInfo);
      navigate('/login')
    }
    
    else setUserInfo({});
  },[])

  useEffect(() => {
    const userInfo = localStorage.getItem("user-data");
    if(userInfo)
    {
      setUserInfo(userInfo);
      // console.log(userInfo);
      const user = JSON.parse(userInfo);
      // console.log(user)
      setLat(user?.latitude);
      setLong(user?.longitude)
      // console.log(lat)
      // console.log(long)
    }
  },[])
  return (
    <>
      <div className="Box_container">
        <div className="map_container">
          <MapBox latitude={lat} longitude={long}/>
        </div>
        <div className="product_container">
          <Product  latitude={lat} longitude={long}/>
          
        </div>

      </div>  
    </>
  )
}

export default HomePage
