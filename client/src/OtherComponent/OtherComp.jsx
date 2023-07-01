import React, { useState } from 'react'
import './OtherComp.css'
import Fertility from './Fertility/Fertility';
import Recom from './Recommend/Recom';
import Disease from './Disease/Disease';

const OtherComp = () => {
    const [num,setNum] = useState(0);
  return (
    <>
        <div className='outlineBox'>
            <div className="containerBox">
                <button className="firstBox_box sameBox_box" onClick={() => setNum(0)}>
                   Soil Fertility Checker
                </button>
                <button className="secondBox_box sameBox_box" onClick={() => setNum(1)}>
                    Recommendation system
                </button>
                <button className="thirdBox_box sameBox_box" onClick={() => setNum(2)}>
                    Prediction of Disease
                </button>
            </div>
        </div>
      {
        num==0 &&  <Fertility/>
      }
      {
        num == 1 && <Recom/>
      }
      {
        num == 2 && <Disease/>
      }
    </>
  )
}

export default OtherComp
