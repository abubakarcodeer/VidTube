import React, { useEffect, useState } from 'react'
import './Recommended.css'
import { API_KEY, value_Converter } from '../../data'
import { Link } from 'react-router-dom';


function Recommended({ categoryId }) {

    const [apiData, setApiData] = useState([]);

    const fetchRecommendedData = async () => {
        const relatedVideosUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&maxResults=20&key=${API_KEY}`
        await fetch(relatedVideosUrl).then(res => res.json()).then(data => setApiData(data.items))
    }

    useEffect(() => {
        fetchRecommendedData()
    }, [categoryId])

    return (
        <div className='recommended'>
            {apiData.map((item, index) => {
               return(
                 <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
                    <img src={item.snippet.thumbnails.medium.url} alt="" />
                    <div className="vid-info">
                        <h4>{item.snippet.title}</h4>
                        <p>{item.snippet.channelTitle}</p>
                        <p>{value_Converter(item.statistics.viewCount)} Views</p>
                    </div>
                </Link>
               )
            })}
        </div>
    )
}

export default Recommended