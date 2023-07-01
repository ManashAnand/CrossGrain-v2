import React from 'react'
import './HelperSlide.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Card from './Card';

const HelperSlide = ({news}) => {
    const renderSlides = () =>
    news.map((num) => (
       
            <>
                <Card item={num}/>
            </>
        
        ));
  return (
    <>
    <div className="App" style={{backgroundColor:"#97cf8a"}}>
      <Slider dots={true}>{renderSlides()}</Slider>
    </div>
    </>
  )
}

export default HelperSlide
