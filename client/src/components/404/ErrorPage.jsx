import React from 'react'
import './ErrorPage.css'
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="errorBox">
        <div className="mainbox">
                <div className='number'>
                    <div className="err">4</div>
                    <div className='zero'>0</div>
                    <div className="err2">4 </div>
                </div>

                <div className="msg">
                <div>Maybe this page moved? </div>
                <div>Got deleted?</div>
                <div>
                 Is hiding out in quarantine?
                 </div>
                 <div>
                  Never existed in the first place?     
                 </div>
                <p>Let's go <NavLink to='/' className='homeErr'>Home</NavLink> and try from there.</p></div>
        </div>
    </div>
  )
}

export default ErrorPage
