import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes} from "react-router-dom";
import { Header,Hero } from './utilis/components'
import { ThemeProvider } from 'styled-components';
import { Theme } from './utilis/Themes';

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Header/>
            <Routes>
              <Route path='/' element={<Hero />} />
            </Routes>
                    
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
