import React, { useEffect, useState } from 'react'
import './Feed.css'
import { Link } from 'react-router-dom'
import { API_KEY } from '../../data'
import { value_Converter } from '../../data'
import moment from 'moment'


function Feed({ category }) {

    const [data, setData] = useState([])

    const fetchData = async () => {
        const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
        await fetch(videoListUrl).then(res => res.json()).then(data => setData(data.items))
    }

    useEffect(() => {
        fetchData()
    }, [category])

    return (
        <div className='feed'>

            {data.map((item, index) => {

                return (
                    <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                        <p>{value_Converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                    </Link>
                )
            })

            }

        </div>
    )
}

export default Feed