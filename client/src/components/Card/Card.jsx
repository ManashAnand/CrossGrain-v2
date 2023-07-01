import React, { useState } from 'react'
import './Card.css'

const Card = ({name,FullName}) => {
    const [show,setshow] = useState(false);
  return (
    <>
    <div className="carBoxContainer">

        <div className='cardBox'>
            <img src={name} alt='working'
             onMouseEnter={() => setshow(true)}
             onMouseLeave={() => setshow(false)}
             />
        </div>
        {
            show 
            && 
            <div className='cardHoverBox'>
                <p>{FullName}</p>

            </div>

        }
    </div>
    </>
  )
}

export default Card
