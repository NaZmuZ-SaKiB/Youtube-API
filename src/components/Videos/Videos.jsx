import React from 'react';
import VideoCard from '../VideoCard/VideoCard';
import './Videos.scss'

const Videos = ({ videos, count, heading }) => {
    let counter = 0;
    return (
        <section className="container section-videos">
            <h2>{heading}</h2>
            <div className="videos-container">
                {
                    Object.keys(videos).length && videos.map(video => {
                        counter++;
                        return counter > count ? null : <VideoCard key={video.id} videoId={video.contentDetails.videoId} />
                    })
                }
            </div>
        </section>
    );
};

export default Videos;