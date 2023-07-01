import React, { useEffect, useState } from 'react'
import './News.css';
import axios from 'axios';
import HelperSlide from './HelperSlide';

const News = () => {
    const [news,setNews] = useState([{}]);

    useEffect(() => {
        getNews();
    },[]);

const getNews = async () => {
    const data = await axios.get('https://gnews.io/api/v4/search?q=agriculture&apikey=015038307b1f9bdfa8ee77c3bf59cb52&lang=hi');
    setNews(data?.data?.articles);
    console.log(data?.data?.articles)
}
// const data = await axios.get('https://gnews.io/api/v4/search?q=agriculture&apikey=015038307b1f9bdfa8ee77c3bf59cb52&lang=hi')

  return (
    <>
      <div className="NewsBox" >
           <HelperSlide news={news}/>
      </div>
    </>
  )
}

export default News
