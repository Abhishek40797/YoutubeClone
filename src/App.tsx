import React from 'react';
import './App.css';
import { BrowserRouter,Routes} from "react-router-dom";
import { Header } from './utilis/components'
import { ThemeProvider } from 'styled-components';

const Theme = {
  responsive : {
    mobile : "450px",
    tablet : "768px"
  }
}

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Header/>
            <Routes>
              
            </Routes>
                    
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
