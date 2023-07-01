import React, { useState } from 'react'
import './Fertility.css'
import axios from 'axios'

const Fertility = () => {
    const [show,setShow] = useState(true);
    const [ph,setPh] = useState(0);
    const [ec,setEc] = useState(0);
    const [oc,setoc] = useState(0);
    const [om,setom] = useState(0);
    const [n,setn] = useState(0);
    const [p,setp] = useState(0);
    const [k, setk ] = useState(0);
    const [zn,setzn] = useState(0);
    const [fe,setfe] = useState(0);
    const [cu,setcu] = useState(0);
    const [mn,setmn] = useState(0);
    const [sand,setsand] = useState(0);
    const [silt,setsilt] = useState(0);
    const [clay,setclay] = useState(0);
    const [caco3,setcaco3] = useState(0);
    const [cec,setcec] = useState(0);
    const [mainData,setData] = useState({});
    const [ans,setAns] = useState("");

    const handleBtn = async (e) => {
        e.preventDefault();
        
        try {
            setData({
                ph,ec,oc,om,n,p,k,zn,fe,cu,mn,sand,silt,clay,caco3,cec
            })
            
            
                const data = await axios.post('http://127.0.0.1:5000/fertility',mainData);
                // console.log(data);
                setAns(data);
                
            } catch (error) {
                console.log(error)
                setAns("Plz fill all the form")            
                }
            setShow(!show);

    }
  return (
    <>
      <div className="mainFertileBox">
        <div className="fertileContainer">
            <div className="firstBoxFert sameFert">
                <input type='text' className='sameInput' placeholder='pH'  onChange={(e) =>setPh(e.target.value)}/>
                <input type='text'  className='sameInput' placeholder='EC' onChange={(e) =>setEc(e.target.value)}/>
                <input type='text'  className='sameInput' placeholder='OC' onChange={(e) =>setoc(e.target.value)}/>
                <input type='text'  className='sameInput' placeholder='OM' onChange={(e) =>setom(e.target.value)}/>
            </div>
            <div className="secondBoxFert sameFert">
            <input type='text'  className='sameInput' placeholder='N' onChange={(e) =>setn(e.target.value)}/>
                <input type='text' className='sameInput' placeholder='P' onChange={(e) =>setp(e.target.value)}/>
                <input type='text'  className='sameInput' placeholder='K' onChange={(e) =>setk(e.target.value)}/>
                <input type='text'  className='sameInput' placeholder='Zn' onChange={(e) =>setzn(e.target.value)}/>
            </div>
            <div className="thirdBoxFert sameFert">
            <input type='text'  className='sameInput' placeholder='Fe' onChange={(e) =>setfe(e.target.value)}/>
                <input type='text'  className='sameInput' placeholder='Cu' onChange={(e) =>setcu(e.target.value)}/>
                <input type='text'  className='sameInput' placeholder='Mn' onChange={(e) =>setmn(e.target.value)}/>
                <input type='text'  className='sameInput' placeholder='Sand' onChange={(e) =>setsand(e.target.value)}/>
            </div>
            <div className="fourthBoxFert sameFert">
            <input type='text'  className='sameInput' placeholder='Silt' onChange={(e) =>setsilt(e.target.value)}/>
                <input type='text'  className='sameInput' placeholder='Clay' onChange={(e) =>setclay(e.target.value)}/>
                <input type='text'  className='sameInput' placeholder='CaCo3' onChange={(e) =>setcaco3(e.target.value)}/>
                <input type='text'  className='sameInput' placeholder='CEC' onChange={(e) =>setcec(e.target.value)}/>
            </div>
            <div className="lastBoxFert">
                    {
                        show && <button className='submitBtn' onClick={handleBtn}>Get the Fertility of soil</button>
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

export default Fertility
