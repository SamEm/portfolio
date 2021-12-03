import { forwardRef } from "react";
import styled from "styled-components";
import { Highlight, Container } from "../theme/GlobalStyles";
import Cloud from "../components/Cloud";
import Anime from "react-anime";

const Home = (props: any, ref: any) => {
  const config = {
    duartion: 1000,
    translateX: ["-5em", 0],
    opacity: [0, 1],
  };

  return (
    <FoldDivider ref={ref} {...props}>
      <OuterDiv>
        <Div>
          <Anime delay={(el: Element, index: number) => 500} {...config}>
            <H1>
              Ohey there! I am <Highlight>Sam</Highlight>.
            </H1>
          </Anime>
          <Anime delay={(el: Element, index: number) => 1000} {...config}>
            <H2>
              A <Highlight>full stack developer</Highlight> from Norway.
            </H2>
          </Anime>
          <Anime delay={(el: Element, index: number) => 1500} {...config}>
            <SubText>
              I create experiences that make people's lives easier.
            </SubText>
          </Anime>
        </Div>
        <CloudPos>
          <Cloud />
        </CloudPos>
      </OuterDiv>
    </FoldDivider>
  );
}

export default forwardRef(Home);

interface ColorStyle {
  readonly dim?: boolean;
}

const FoldDivider = styled(Container)`
  min-height: 100vh;
  z-index: -1;
`;

const OuterDiv = styled.div<ColorStyle>`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 200px;

  @media only screen and (max-width: 700px) {
    margin-bottom: 0;
    margin-top: 150px;
  }
  @media only screen and (max-width: 500px) {
    margin-bottom: 0;
    margin-top: 50px;
  }
`;

const Div = styled.div<ColorStyle>`
  padding: 0 30px;
`;

const H1 = styled.h1`
  font-size: 48px;
`;

const H2 = styled.h2`
  font-size: 36px;
`;

const SubText = styled.div`
  color: ${(props) => props.theme.colors.textDim};
  font-size: 24px;
`;

const CloudPos = styled.div`
  margin: 100px auto 0 auto;
  width: 100%;
  height: 230px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
