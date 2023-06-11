import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes} from "react-router-dom";
import { Header, Home, SearchVideos, WatchVideos} from './utilis/components'
import { ThemeProvider } from 'styled-components';
import { Theme } from './utilis/Themes';
import ChannelDetails from './Pages/ChannelDetails';
import { ChannelHome } from './Components/ChannelComponents/ChannelTabs.tsx/Home';
import { ChannelVideos } from './Components/ChannelComponents/ChannelTabs.tsx/Videos';
import { ChannelPlaylist } from './Components/ChannelComponents/ChannelTabs.tsx/Playlists';
import { ChannelCommuntiy } from './Components/ChannelComponents/ChannelTabs.tsx/Communtiy';
import { ChannelAbout } from './Components/ChannelComponents/ChannelTabs.tsx/About';
import { Channels } from './Components/ChannelComponents/ChannelTabs.tsx/Channels';
import { ChannelLive } from './Components/ChannelComponents/ChannelTabs.tsx/Live';
import Playlists from './Pages/Playlists';

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Header/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/search/:categoryName' element={<SearchVideos />} />
              <Route path='/watch/:videoId' element={<WatchVideos/>} />
              <Route path='/playlist/:list' element={<Playlists/>} />
              <Route path='/channel/:channelId' element={<ChannelDetails/>}>
                  <Route index element={<ChannelHome/>} />
                  <Route path='featured' element={<ChannelHome/>} />
                  <Route path='video' element={<ChannelVideos/>} />
                  <Route path='live' element={<ChannelLive/>} />
                  <Route path='playlists' element={<ChannelPlaylist/>} />
                  <Route path='community' element={<ChannelCommuntiy/>} />
                  <Route path='channels' element={<Channels/>} />
                  <Route path='about' element={<ChannelAbout/>} />
              </Route>
            </Routes>                    
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
