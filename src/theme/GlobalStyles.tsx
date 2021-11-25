import styled, { DefaultTheme, createGlobalStyle } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: "#FC5D86",
    primaryHover: "",
    primaryActive: "",
    secondary: "",
    secondaryHover: "",
    secondaryActive: "",
    textLight: "#E6F1FF",
    textDim: "#919BA8",
    blobColor: "#312e4f",
    textDark: "",
    background: "#0b1726",
    raisinBlack: "#2b2745", // Foreground circle
    raisinBlackShade1: "rgba(44, 39, 69, .3)", // Shade 1
    raisinBlackShade2: "rgba(53, 39, 69, .1)", // Shade 2
  },
  shading: {
    soft: 'box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);',
    hard: 'box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.4);'
  }
};

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: rgb(17, 17, 31);
    height: 100%;
    color: #E6F1FF;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #919BA8; 
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #E6F1FF; 
  }
`;

interface HighlightProps {
  dark?: true;
}

export const Highlight = styled.span<HighlightProps>`
  transition: color 0.2s ease;
  color: ${(props) =>
    props.dark ? props.theme.colors.raisinBlack : props.theme.colors.primary};
`;

interface MarginTop {
  readonly mt?: string;
}

export const Container = styled.div<MarginTop>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1320px;
  width: 100%;
  margin: 50px auto 0;
  margin-top: ${(props) => props.mt || "0"};
  z-index: -1;

  /* @media screen and (max-width: 1550px) {
    margin-top: ${(props) => `calc(${props.mt}/2)` || "50px"};
  } */
`;

export const H1 = styled.h1`
  font-size: 48px;
  letter-spacing: .2px;
`;

interface PaddingPos {
  readonly work?: boolean;
  readonly hover?: boolean;
}

export const H2 = styled.h2<PaddingPos>`
  font-size: 36px;
  letter-spacing: 0.2px;
  text-decoration: underline;
  text-decoration-color: ${(props) => props.theme.colors.primary};
  text-decoration-thickness: 4px;
  text-underline-offset: 2px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.colors.textLight};

  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

export { theme };