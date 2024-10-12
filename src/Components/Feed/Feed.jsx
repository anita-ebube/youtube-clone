import React, { useEffect, useState } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import Thumbnail from '../../assets/Thumbnail.jpeg'; // You might not need this if you're getting thumbnails from API
import { API_KEY } from '../../data';
import Sidebar from '../Sidebar/Sidebar';
import { value_converter } from '../../data';

const Feed = ({ category }) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const videoList_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
        await fetch(videoList_Url)
            .then(response => response.json())
            .then(data => setData(data.items)) // Set the actual items to the state
            .catch(error => console.log(error)); // Always good to handle errors
    };

    useEffect(() => {
        fetchData();
    }, [category]);

    return (
        <div className="feed">
            {
                data.length > 0 ? (
                    data.map((item, index) => (
                        <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
                            <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
                            <h2>{item.snippet.title}</h2>
                            <h3>{item.snippet.channelTitle}</h3>
                            <p>{value_converter(item.statistics.viewCount)} views &bull; {new Date(item.snippet.publishedAt).toLocaleDateString()}</p>
                        </Link>
                    ))
                ) : (
                    <p>Loading...</p>
                )
            }
        </div>
    );
};

export default Feed;
