import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { LikeFilled, EyeFilled } from '@ant-design/icons';
import './VideoPage.scss'

const VideoPage = (props) => {
    const [video, setVideo] = useState({});
    useEffect(() => {
        const API_KEY = process.env.REACT_APP_API_KEY;

        fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${props.match.params.id}&key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setVideo(data.items[0]))
    }, [])
    return (
        <div className="container" style={{ paddingTop: '5rem' }}>
            {
                Object.keys(video).length ? (
                    <>
                        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Title: {video.snippet.title}</h1>
                        <div className="video-wrapper">
                            <div className="videoplayer-container">
                                <iframe width="560" height="315" src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className="video-stats">
                                <p><LikeFilled /> Likes: {video.statistics.likeCount}</p>
                                <p><EyeFilled /> Views: {video.statistics.viewCount}</p>
                            </div>
                        </div>
                    </>
                ) : 'loading...'
            }
        </div>
    );
};

export default VideoPage;