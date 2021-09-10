import React, { useEffect, useState } from 'react';
import Videos from '../../components/Videos/Videos';

const PlaylistVideosPage = (props) => {

    const API_KEY = process.env.REACT_APP_API_KEY;
    const [videos, setVideos] = useState();
    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${props.match.params.id}&maxResults=1000000000&key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setVideos(data.items))
    }, [props.match.params.name])

    console.log(videos)
    return (
        <div style={{ paddingTop: '5rem' }}>
            {videos && <Videos videos={videos} count={videos.length} heading={`Videos of ${props.match.params.name}`} />}
        </div>
    );
};

export default PlaylistVideosPage;