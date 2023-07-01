import React, { useState } from 'react'
import './Recommend.css'

import axios from 'axios'

const Recom = () => {
    const [show,setShow] = useState(true);
    const [ans,setAns] = useState("");
    const [n,setn] = useState(0);
    const [p,setp] = useState(0);
    const [k, setk ] = useState(0);
    const [ph,setPh] = useState(0);
    const [temp,setTemp] = useState(0);
    const [humidity,setHumidity] = useState(0);
    const [rainfall,setRainfall] = useState(0);
    const [mainData,setData] = useState({});

    const handleBtn = async (e) => {
        e.preventDefault();
        try {
            setData({
                ph,n,p,k,temp,humidity,rainfall
            })
            console.log(mainData)
            
            
                const {data} = await axios.post('http://127.0.0.1:5000/recommend',mainData);
                console.log(data);
                setAns(data);
                
            } catch (error) {
                // console.log(error)
                setAns("Plz fill all the form")            
                }
            setShow(!show);
        // setShow(!show);
    }
  return (
    <>
       <div className="mainFertileBox">
        <div className="fertileContainer">
            <div className="firstBoxFert sameFert">
                <input type='text' className='sameInput' placeholder='pH'  onChange={(e) =>setPh(e.target.value)}/>
                <input type='text'  className='sameInput' placeholder='N' onChange={(e) =>setn(e.target.value)}/>
                <input type='text' className='sameInput' placeholder='P' onChange={(e) =>setp(e.target.value)}/>
                <input type='text'  className='sameInput' placeholder='K' onChange={(e) =>setk(e.target.value)}/>
            </div>
            <div className="secondBoxFert sameFert">
            <input type='text'  className='sameInput' placeholder='temperature' onChange={(e) =>setTemp(e.target.value)}/>
                <input type='text' className='sameInput' placeholder='humidity' onChange={(e) =>setHumidity(e.target.value)}/>
                <input type='text'  className='sameInput' placeholder='rainfall' onChange={(e) =>setRainfall(e.target.value)}/>
            </div>
        <div className="lastBoxFert">
                    {
                        show && <button className='submitBtn' onClick={handleBtn}>Get the Best Crop for your Field</button>
                    }
                    {
                        !show && (
                            <>
                                <div className='ansTemp'>{ans}</div>
                                <button className='submitSmallBtn' onClick={() => setShow(!show)}>Reset</button>
                            </>
                        )
                    }
            </div>
        </div>
        </div>
    </>
  )
}

export default Recom
