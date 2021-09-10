import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { VideoCameraFilled, LoadingOutlined } from '@ant-design/icons'
import './PlaylistsPage.scss';

const PlaylistsPage = () => {
    const [playlists, setPlaylists] = useState();

    useEffect(() => {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const CHANNEL_ID = process.env.REACT_APP_CHANNEL_ID;
        fetch(`https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${CHANNEL_ID}&maxResults=10&key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setPlaylists(data.items))
    }, [])

    return (
        <section className="container" style={{ paddingTop: '5rem' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>All playlists</h1>
            <div className="playlist-container">
                {
                    playlists ? (
                        playlists.map(playlist => (
                            <Link to={`/playlists/${playlist.id}/${playlist.snippet.title}`} className="playlist-card" key={playlist?.id}>
                                <img src={playlist.snippet.thumbnails.maxres.url} alt="playlist-thumbnail" />
                                <div className="title">
                                    {playlist.snippet.title}
                                </div>
                                <p><VideoCameraFilled /> Total videos: {playlist.contentDetails.itemCount}</p>
                            </Link>
                        ))) : (<>&nbsp;< LoadingOutlined /></>)
                }
            </div>
        </section>
    );
};

export default PlaylistsPage;