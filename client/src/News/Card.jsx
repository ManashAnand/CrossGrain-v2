import React from 'react'

const Card = (props) => {
    // console.log(props.item.image)
    return (
    <>
      <div className="car" style={{margin:"1rem", backgroundColor:"#97cf8a"}}>
            <img src={props?.item?.image} alt="Avatar" style={{width:"15rem",marginLeft:"21rem"}}/>
            <div className="container" style={{marginTop:"1rem",display:"flex",flexDirection:"column",gap:"2rem"}}>
                <h4><b>{props?.item?.title}</b></h4> 
                <h6 >{props?.item?.content}</h6>
                <p style={{marginLeft:"5rem"}}>{props?.item?.publishedAt}</p> 
            </div>
            </div>
    </>
  )
}

export default Card 
