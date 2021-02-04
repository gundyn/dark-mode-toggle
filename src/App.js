import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/theme';
import { GlobalStyles } from './global';

// Search Bar
import SearchPage from './components/SearchPage'
// import SearchBar from './components/SearchBar'

function App() {
  // Toggle funcionality
  const [theme, setTheme] = useState('light')
  

  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark 
    if (theme === 'light') {
      setTheme('dark')
    // Otherwise, it should be light
    } else {
      setTheme('light')
    }
  }
  
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div>
        <GlobalStyles />
        <button onClick={toggleTheme}>Toggle theme</button>
        <h1>It's a light theme!</h1>
        <div>
          <SearchPage />
          <h3>SearchBar in progress</h3>
          <SearchPage />
        </div>
        
        <footer>
        
        </footer>
        
      </div>
    </ThemeProvider>
  );
}

export default App;


