import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes} from "react-router-dom";
import { Header, Home, SearchVideos, WatchVideos} from './utilis/components'
import { ThemeProvider } from 'styled-components';
import { Theme } from './utilis/Themes';
import ChannelDetails from './Pages/Channel';

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
              <Route path='/channel/:channelId' element={<ChannelDetails/>} />
            </Routes>                    
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
