import { useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Planet from "./components/Planet";
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sam's Portfolio</title>
      </Helmet>
      <GlobalStyle />
      <Planet />
      <BackgroundGlow />
      <Stars />
      <Header
        AboveTheFoldRef={AboveTheFoldRef}
        WorkRef={WorkRef}
        ProjectsRef={ProjectsRef}
        ContactRef={ContactRef}
      />
      <Page>
        <AboveTheFold ref={AboveTheFoldRef} />
        <Work ref={WorkRef} />
        <Projects ref={ProjectsRef} />
        <Contact ref={ContactRef} />
        <Footer />
      </Page>
    </ThemeProvider>
  );
}

const Page = styled.main`
  display: flex;
  flex-direction: column;
`;