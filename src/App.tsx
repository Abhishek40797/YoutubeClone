import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes} from "react-router-dom";
import { Header, Home, SearchVideos, WatchVideos} from './utilis/components'
import { ThemeProvider } from 'styled-components';
import { Theme } from './utilis/Themes';
import ChannelDetails from './Pages/Channel';
import { ChannelHome } from './Components/ChannelTabs.tsx/Home';
import { ChannelVideos } from './Components/ChannelTabs.tsx/Videos';
import { ChannelPlaylist } from './Components/ChannelTabs.tsx/Playlists';
import { ChannelCommuntiy } from './Components/ChannelTabs.tsx/Communtiy';
import { ChannelAbout } from './Components/ChannelTabs.tsx/About';
import { Channels } from './Components/ChannelTabs.tsx/Channels';
import { ChannelLive } from './Components/ChannelTabs.tsx/Live';

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
