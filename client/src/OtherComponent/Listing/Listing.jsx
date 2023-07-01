import React, { useState } from 'react'
import './Listing.css';
import {NavLink} from 'react-router-dom'
import axios from 'axios'

const Listing = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [descp,setDescp] = useState("");
    const [type,setType] = useState(true);
    const [rate,setRate] = useState(0);
    const [files, setFiles] = useState();

    const handleListing = async (e) => {  
        e.preventDefault();
        const formData = new FormData();
        formData.set('name',name);
        formData.set('email',email);
        formData.set('descp',descp);
        formData.set('rate',rate);
        formData.set('type',type);
        formData.set('file',files);
        console.log(formData)
        try {
            if(!files){
              alert("Please provide photo");
              return;
            }
            const  data  = await axios.post("http://127.0.0.1:4000/listing",formData);
            if(data?.success){
                console.log("Listing added");
            } 
            else{
                console.log("image uploaded succesfully");
             
                console.log(data);
            }
            setName("");
            setType(false);
            setEmail("");
            setRate(0);
            setDescp("");
            setFiles();
            
          } catch (error) {
            console.log(error);
          }
    }
  return (
    <>
      <div className="listingMainBox">
        {/* <div className="listingSmallForm"> */}
        <div className="ListingBox">
            <div className='ListingHeader'>Listing</div>
            
            <input
              type="text"
              placeholder="Enter your username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className='inputList'
            />
                 <input
              type="text"
              placeholder="Enter your email or phone no"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='inputList'
            />

                 <input
              type="text"
              placeholder="Enter your machinary amount per hour or work per hour"
            //   value={rate}
              onChange={(e) => setRate(e.target.value)}
              required
              className='inputList'
            />
            
                 <input
              type="text"
              placeholder="Enter a small Description"
              value={descp}
              onChange={(e) => setDescp(e.target.value)}
              required
              className='inputList'
            />
             <p> Which type of Listing you want to create?</p>
        <div className='radioContainer'>
        <span className='sameSpan'>
         <input type="radio" id="html"  name="HTML"  onChange={(e) => setType(true)}/> Equipment
        </span>
        <span className='sameSpan'>
          <input type="radio" id="html"  name="HTML"  onChange={(e) => setType(false)}/> Worker

        </span>
        </div>
              <input
              id="inputTag"
              type="file"
              onChange={(e) => setFiles(e.target.files[0])}
            />
          
          
            <div className="LoginBtnBox">
            <button onClick={handleListing}>Listing</button>
            </div>
            
            
            
        </div>
        {/* </div> */}
      </div>
    </>
  )
}

export default Listing
