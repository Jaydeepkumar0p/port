import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import StartCanvas from "./components/canvas/Stars";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

const Body = styled(motion.div)`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled(motion.div)`
  padding-bottom: 100px;
  background: linear-gradient(
      45deg,
      rgba(204, 0, 187, 0.1) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      135deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.1) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 35% 98%, 0 100%);
`;

const motionSettings = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
  exit: { opacity: 0, y: 50, transition: { duration: 0.5, ease: "easeIn" } },
};

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body {...motionSettings}>
          <StartCanvas />
          <motion.div {...motionSettings}>
            <Hero />
            <Wrapper {...motionSettings}>
              <Skills />
              <Experience />
            </Wrapper>
            <Projects />
            <Wrapper {...motionSettings}>
              <Education />
              <Contact />
            </Wrapper>
            <Footer />
          </motion.div>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
