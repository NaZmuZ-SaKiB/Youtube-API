import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import PlaylistsPage from './pages/PlaylistsPage/PlaylistsPage';
import PlaylistVideosPage from './pages/PlaylistVideosPage/PlaylistVideosPage';
import VideoPage from './pages/VideoPage/VideoPage';
import VideosPage from './pages/Videos/VideosPage';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const CHANNEL_ID = process.env.REACT_APP_CHANNEL_ID;
  const [videos, setvideos] = useState({})

  const fetchVideos = (id) => {
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${id}&maxResults=1000000000&key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setvideos(data?.items)
      )
  }

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=contentDetails,statistics&id=${CHANNEL_ID}&key=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        fetchVideos(data?.items[0]?.contentDetails?.relatedPlaylists?.uploads);
      })
  }, [])

  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home videos={videos} />
          </Route>
          <Route exact path='/videos'>
            <VideosPage videos={videos} />
          </Route>
          <Route exact path='/playlists'>
            <PlaylistsPage />
          </Route>
          <Route exact path='/playlists/:id/:name' component={PlaylistVideosPage} />
          <Route exact path='/video/:id' component={VideoPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
