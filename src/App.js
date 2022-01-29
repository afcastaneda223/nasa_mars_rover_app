import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { themes } from './styles/themes.style';
import { Themebtn } from './styles/styles.style';
import GlobalStyle from './styles/global.style';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Spirit from './components/Spirit';
import Opportunity from './components/Opportunity';
import Curiosity from './components/Curiosity';

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');
  const getOppositeTheme = () => ((currentTheme === 'light') ? 'dark' : 'light');

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Themebtn onClick={() => setCurrentTheme(getOppositeTheme())}>
          <h1>
            {(currentTheme === 'light') ? <i className="fas fa-sun" /> : <i className="fas fa-moon" />}
          </h1>
        </Themebtn>
        <Routes>
          <Route exact path="/" element={Home} />
          <Route path="/curiosity" element={Curiosity} />
          <Route path="/opportunity" element={Opportunity} />
          <Route path="/spirit" element={Spirit} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
