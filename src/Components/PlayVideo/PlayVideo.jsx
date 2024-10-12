import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import { API_KEY } from '../../data';

const PlayVideo = ({ videoId }) => {
    const [apiData, setApiData] = useState(null);

    const fetchVideoData = async () => {
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;

        await fetch(videoDetails_url)
            .then(res => res.json())
            .then(data => setApiData(data.items[0]))
            .catch(error => console.error('Error fetching video data:', error));
    };

    useEffect(() => {
        fetchVideoData();
    }, [videoId]);

    return (
        <div className='play-video'>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                title={apiData ? apiData.snippet.title : 'Video Player'}
            ></iframe>

            <h3>{apiData ? apiData.snippet.title : 'Loading Title...'}</h3>

            <div className="play-video-info">
                <p>
                    {apiData ? `${apiData.statistics.viewCount} Views` : 'Loading views...'} &bull;{' '}
                    {apiData ? new Date(apiData.snippet.publishedAt).toLocaleDateString() : 'Loading date...'}
                </p>
                <div>
                    <span><img src="" alt="like" />Like</span>
                    <span><img src="" alt="dislike" />Dislike</span>
                    <span><img src="" alt="share" />Share</span>
                    <span><img src="" alt="save" />Save</span>
                </div>
            </div>

            <hr />

            <div className="publisher">
                <img src={apiData ? apiData.snippet.thumbnails.default.url : ''} alt="Publisher" />
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle : 'Loading Channel...'}</p>
                    <span>{apiData ? `${apiData.statistics.subscriberCount} Subscribers` : 'Loading subscribers...'}</span>
                </div>
                <button>Subscribe</button>
            </div>

            <div className="vid-description">
                <p>{apiData ? apiData.snippet.description : 'Loading description...'}</p>
                <hr />
                <h4>Comments</h4>
            </div>
        </div>
    );
};

export default PlayVideo;
