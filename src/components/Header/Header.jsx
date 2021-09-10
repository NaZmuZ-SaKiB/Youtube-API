import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/img/YT logo.png';
import './Header.scss'

const Header = () => {
    const [playlists, setPlaylists] = useState();

    useEffect(() => {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const CHANNEL_ID = process.env.REACT_APP_CHANNEL_ID;
        fetch(`https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${CHANNEL_ID}&maxResults=10&key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setPlaylists(data.items))
    }, [])

    return (
        <header>
            <div className="nav-container">
                <nav className="container">
                    <Link to='/' className="header-logo"><img src={LogoImg} alt="Sakib Tech Tube Logo" /></Link>
                    <ul>
                        <li className="active"><Link to='/'>Home</Link></li>
                        <li><Link to='/videos'>Videos</Link></li>
                        <li>
                            <Link to='/playlists'>Playlists</Link>
                            <ul className="submenu">
                                {
                                    playlists && playlists.map(playlist => <li key={playlist?.id} ><Link to={`/playlists/${playlist.id}/${playlist?.snippet?.localized?.title}`}>{playlist?.snippet?.localized?.title}</Link></li>)
                                }
                            </ul>
                        </li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                    <ul className="nav-right">
                        <li>
                            <Link to='/login'>Account</Link>
                            <ul className="submenu">
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/signup'>Sign up</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;