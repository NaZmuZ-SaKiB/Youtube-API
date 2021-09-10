import React from 'react';
import Videos from '../../components/Videos/Videos';

const VideosPage = ({ videos }) => {
    return (
        <div style={{ paddingTop: '5rem' }}>
            <Videos videos={videos} count={videos.length} heading="All Videos" />
        </div>
    );
};

export default VideosPage;