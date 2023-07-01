import React from 'react'
import './Market.css'
import  { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userAuth } from '../../context/UserContext';
import axios from 'axios';
import Card2 from './Card2';

const Market = () => {
    
    const navigate = useNavigate();
    const [userInfo,setUserInfo] = userAuth();

    const [thing,setThing] = useState(true);
    const [showPiece,setShowPiece] = useState([{}]);

    useEffect(() => {
        getEqpData();
    },[])

    useEffect(() => {
        getEqpData();
    },[thing]);

    const getEqpData =  async() => {
        try {
            const {data} = await axios.get('http://127.0.0.1:4000/eqp');
            // console.log(data);
            setShowPiece(data);
        } catch (error) {
            console.log(error);
        }
    }
  

  return (
    <>
      <div className="wholeArea">
        <div className="smallMarket">
            <div className="samething">
                <button className='sameBtnBtn' onClick={(e) => setThing(true)}>Equipment</button>
                <button className='sameBtnBtn' onClick={(e) => setThing(false)}>Worker</button>
            </div>
            <div className="diffthing">
                <button className='sameBtnBtn' onClick={() => navigate('/listing-form')}>Listing</button>
            </div>
        </div>
        <div className="MarketPlace">
            {
                thing && (
                    <>
                       {
                            showPiece.map((item) => {
                                if(item.type)
                                {
                                    return(
                                        <>
                                        <Card2 item={item}/>
                                        </>
                                    )
                                }
                               })
                       }
                    </>
                )
            }
            {
                !thing && (
                    <>
                       {
                            showPiece.map((item) => {
                                if(!item.type)
                                {
                                    return(
                                        <>
                                        <Card2 item={item}/>
                                        </>
                                    )
                                }
                               })
                       }
                    </>
                )
            }
        </div>
      </div>
    </>
  )
}

export default Market
