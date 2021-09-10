import React, { useEffect, useState } from 'react';
import { LikeFilled, EyeFilled } from '@ant-design/icons';
import './VideoCard.scss';
import { Link } from 'react-router-dom';

const VideoCard = ({ videoId }) => {
    const [video, setVideo] = useState({});

    useEffect(() => {
        const API_KEY = process.env.REACT_APP_API_KEY;

        fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setVideo(data.items[0]))
    }, [videoId])
    return (
        <div>
            {
                Object.keys(video).length ? (
                    <Link to={`/video/${videoId}`} key={video.id} className="video" >
                        <img className="video__img" src={video.snippet.thumbnails.medium.url} alt="video-thumbnail" />
                        <div className="video__title">
                            {video.snippet.title}
                        </div>
                        <div className="video__footer">
                            <p><LikeFilled /> likes: {video?.statistics?.likeCount}</p>
                            <p><EyeFilled /> views: {video?.statistics?.viewCount}</p>
                        </div>
                    </Link>
                ) : (
                    <div className="video-loading">
                        <div className="image-loading"></div>
                        <p className="text-loading"></p>
                        <p className="text-loading"></p>
                    </div>
                )
            }
        </div>
    );
};

export default VideoCard;