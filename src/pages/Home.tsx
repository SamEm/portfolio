import styled from 'styled-components';
import { Highlight, Container } from '../theme/GlobalStyles';
import Cloud from '../components/Cloud';

export default function Home() {

  return (
    <Container>
      <Div>
        <H1>
          Ohey there. I am <Highlight>Sam</Highlight>.
        </H1>
        <H2>
          A <Highlight>full stack developer</Highlight> from Norway.
        </H2>
        <SubText>I create experiences that make people's lives easier.</SubText>
        <CloudPos>
          <Cloud />
        </CloudPos>
      </Div>
    </Container>
  );
}

interface ColorStyle {
  readonly dim?: boolean;
}

const Div = styled.div<ColorStyle>`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 0 30px;
`;

const H1 = styled.h1`
  font-size: 48px;
`;

const H2 = styled.h2`
  font-size: 36px;
`;

const SubText = styled.div`
  color: ${props => props.theme.colors.textDim};
  font-size: 24px;
`;

const CloudPos = styled.div`
  margin: 100px auto 0 auto;
`;