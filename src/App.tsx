import styled from 'styled-components';
import Header from './components/Header';
import Planet from './components/Planet';
import PageRouting from './PageRouting';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './theme/GlobalStyles';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Planet />
      <Page>
        <Header />
        <PageRouting />
        <Footer />
      </Page>
    </ThemeProvider>
  );
}

const Page = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;