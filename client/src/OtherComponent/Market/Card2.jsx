import React from 'react'
import './Card2.css'

const Card = ({item}) => {
    console.log(item)
  return (
    <>
      <div className="card">
        <img src={`http://localhost:4000/${item?.cover}`} alt="Avatar"  height={"100rem"} width={"100rem"}/>
        <div className="container">
            <h4><b>{item?.name}</b></h4>
            <p>{item?.descp}</p>
            <p>{item?.email}</p>
            <p>{item?.rate}</p>
        </div>
        </div>
    </>
  )
}

export default Card
