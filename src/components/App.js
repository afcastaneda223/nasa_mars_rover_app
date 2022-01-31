import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { themes } from '../styles/themes.style';
import { Container, Themebtn } from '../styles/styles.style';
import GlobalStyle from '../styles/global.style';
import Navbar from './elements/Navbar';
import Home from './landings/Home';
import Spirit from './landings/Spirit';
import Opportunity from './landings/Opportunity';
import Curiosity from './landings/Curiosity';

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
            {(currentTheme === 'light') ? <i className="fas fa-moon" /> : <i className="fas fa-sun" />}
          </h1>
        </Themebtn>
        <Container>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/curiosity" element={<Curiosity />} />
            <Route path="/opportunity" element={<Opportunity />} />
            <Route path="/spirit" element={<Spirit />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
