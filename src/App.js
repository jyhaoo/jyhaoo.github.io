import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Experience from "./components/Experience";
import Education from "./components/Education";
import { BrowserRouter as Router } from "react-router-dom";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%
  height: 100%
  overflow-x: hidden;
`;

const Wrapper = styled.div`
background: linear-gradient(
  38.73deg,
  rgba(69, 162, 158, 0.15) 0%, 
  rgba(31, 40, 51, 0) 50%
),
linear-gradient(
  141.27deg,
  rgba(69, 162, 158, 0) 50%,
  rgba(31, 40, 51, 0.15) 100%
);
width: 100%
clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Experience />
            <Education />
          </Wrapper>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
