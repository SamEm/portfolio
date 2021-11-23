import { useRef } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Planet from "./components/Planet";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./theme/GlobalStyles";
import AboveTheFold from "./sections/AboveTheFold";
import Work from "./sections/Work";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Stars from "./components/Stars";
import BackgroundGlow from "./components/BackgroundGlow";

export default function App() {
  const AboveTheFoldRef = useRef<HTMLDivElement>();
  const WorkRef = useRef<HTMLDivElement>();
  const ProjectsRef = useRef<HTMLDivElement>();
  const ContactRef = useRef<HTMLDivElement>();



  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Planet />
      <BackgroundGlow />
      <Stars />
      <Page>
        <Header />
        <AboveTheFold ref={AboveTheFoldRef} />
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