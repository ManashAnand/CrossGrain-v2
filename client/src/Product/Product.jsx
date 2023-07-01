import React, { useEffect, useState } from 'react'
import './Product.css'
import axios from 'axios'
import News from '../News/News';

const Product = ({latitude,longitude}) => {
    const [city,setCity] = useState("");
    const [state,setState] = useState("");
    const [cnt,setcnt] = useState("");
   const [airquality,setAirquality] = useState("");
   const [rainfall,setRainFall] = useState("");
   const [temp,setTemp] = useState("");

   useEffect(() => {
    console.log(latitude+" "+longitude);
       getAirQuality();
       getRainFall();
       getTemp();

   },[])

   const getAirQuality = async () => {
    const  data  = await axios.get('https://api.airvisual.com/v2/nearest_city?key=d349ff0b-1936-411a-ab82-72ee1ced6e8b');
    setCity(data?.data?.data?.city);
    setState(data?.data?.data?.state);
    setcnt(data?.data?.data?.country);
    setAirquality(data?.data?.data?.current?.pollution?.aqius);
    }

    const getRainFall = async () => {
        const data = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&key=e4296e8dff4344c4809c77b93d844165&days=7`)
        setRainFall(data?.data?.data[0]?.precip)
    }

    const getTemp = async () => {
        const data = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,alerts&units=metric&appid=154505d05ae8727798cae36fe8359d1a`)
        setTemp(data?.data?.hourly[0]?.temp)
    }
  return (
    <>
      <div className="product_cont">
        <div className="minFuncData">
            <div className="firstLine">
                In Your City {city} ,{state}, {cnt}
            </div>
            <div className="secondLine">
                <div className="firstDiv sameDiv">
                    Airquality: {airquality} in ppm
                </div>
                <div className="secondDiv sameDiv">
                    RainFall: {rainfall} in mm
                </div>
                <div className="thirdDiv sameDiv">
                    Temperature: {temp} &#8451;
                </div>
            </div>
        </div>
        <News  />
      </div>
    </>
  )
}

export default Product
