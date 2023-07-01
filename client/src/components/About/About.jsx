import React from 'react'
import './About.css'
import Card from '../Card/Card'

import manash from '../../assets/manash.jpg'
import pranjal from '../../assets/pranjal.jpg'
import shubham from '../../assets/shubham.jpg'
import apurv from '../../assets/apurv.jpg'

const About = () => {
  return (
    <>
    <div className="aboutConatiner">

     <div className="about">
        <div className='about_about'>About</div>
        <div className="about_desc">
        All in one solutions marketplace for farmers. Our platform empowers farmers with comprehensive tools and services for enhanced productivity, profitability, and sustainable agricultural practices.     </div>
     </div> 
    
     <div className="cardContainer">
        <Card name={manash} FullName="Manash Anand"/>
        <Card name={pranjal} FullName="Pranjal Chaubey"/>
        <Card name={shubham} FullName="Shubham Kumar"/>
        <Card name={apurv} FullName="Apurv Tiwary"/>
     </div>
     <div>
   
     </div>
    </div>

    <div className='downSection'>
      Our Platform - <br/>
      1.Transforming farmers' agricultural experience comprehensively<br/>

      2.Empowering farmers with comprehensive tools for productivity, profitability, and sustainability.<br/>
      3.Nurturing farmer connections and knowledge
            </div>
    </>
  )
}

export default About
