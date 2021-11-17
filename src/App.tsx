import styled from 'styled-components';
import Header from './components/Header';
import Planet from './components/Planet';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './theme/GlobalStyles';
import AboveTheFold from "./sections/AboveTheFold";
import Work from "./sections/Work";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from './components/Footer';
import Stars from './components/Stars';
import BackgroundGlow from "./components/BackgroundGlow";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Planet />
      <BackgroundGlow />
      <Stars />
      <Page>
        <Header />
        <AboveTheFold />
        <Work />
        <Projects />
        <Contact />
        <Footer />
      </Page>
    </ThemeProvider>
  );
}

const Page = styled.main`
  display: flex;
  flex-direction: column;
`;

const Glow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -3;
  background-color: rgb(11, 23, 38);
  background: radial-gradient(
    farthest-corner at top,
    rgba(84, 61, 143, 0.5) -80%,
    rgba(17, 17, 31, 1) 70%
  );

  @media only screen and (max-width: 1600px) {
    background: radial-gradient(
      farthest-corner at top,
      rgba(101, 32, 99, 0.5) -100%,
      rgba(11, 23, 38, 1) 60%
    );
  }
`;