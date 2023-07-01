import React, { useState } from "react";
import axios from "axios";
import './Disease.css'

export default function Disease() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const [qns, setQns] = useState("")
  const [ans,setAns] = useState("Hi! How may I help you?");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post("http://localhost:8000/predict", formData);
      setPrediction(response.data);
    } catch (error) {
      console.error(error);
      alert("An error occurred during prediction.");
    }
  };

  const handleChat = async (e) => {
    e.preventDefault();
    console.log(qns);
    try {
      const {data} = await axios.post('http://localhost:4000/ask',{qns});
      setAns(data[0].message.content);
      setQns("");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <div style={{display:"flex"}}>

    <div className="mainBox_disease">
      <form onSubmit={handleSubmit} >
        <input type="file" onChange={handleFileChange} />
        <button type="submit" style={{cursor:"pointer"}}>Upload and Predict</button>
      {prediction && (
        <div className="predict_box">
            <div>
            <h2>Prediction Result:</h2>
            <div>Disease: {prediction?.class}</div>
            <div>Confidence: {prediction?.confidence}</div>
            </div>
        </div>
      )}
      </form>


    </div>
      <div className="chatGpt_container">
            <span>ChatBot</span> 
            <div className="small_Chat_container">
                    <div className="talking_box">
                        {ans}
                    </div>
            <div className="sending_qns">
                <input className="sending_box" onChange={(e) => setQns(e.target.value)}/>

               
                <button className="BtnBox" onClick={handleChat}>Send</button>
            </div>
            </div>
      </div>
    </div>
    </>
  );
}
