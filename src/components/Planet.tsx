import styled, { keyframes } from 'styled-components';
import {MousePosition} from '../utils/mousePosition';
import svg1 from '../assets/1.svg';
import svg2 from '../assets/2.svg';
import svg3 from '../assets/3.svg';
import triangle from '../assets/triangle.svg';

export default function Planet() {
  const position = MousePosition();

  return (
    <Container>
      <SVG3 />
      <SVG2 />
      <SVG1 />

      <Dots>
        <Dot pos="1%" orientation={42}></Dot>
        <Dot pos="11%" size="small" orientation={6}></Dot>
        <Dot pos="2%" size="large" orientation={132}></Dot>
        <Dot pos="15%" size="mid" orientation={293}></Dot>
        <Dot pos="4%" orientation={133}></Dot>
        <Dot pos="12%" size="mid" orientation={205}></Dot>
        <Dot pos="2%" size="large" orientation={145}></Dot>
      </Dots>
      {/* <Div>
        {position.x}:{position.y}
      </Div> */}
    </Container>
  );
}
interface DotStyle {
  pos?: string;
  size?: string;
  orientation?: number;
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

const SVG1 = styled.div`
  position: absolute;
  background-image: url(${svg1});
  background-repeat: no-repeat;
  background-size: auto 350px;
  background-position: center top;

  top: 0;

  height: 100%;
  width: 100%;
`;

const SVG2 = styled.div`
  position: absolute;
  background-image: url(${svg2});
  background-repeat: no-repeat;
  background-size: auto 400px;
  background-position: center top;

  top: 0;

  height: 100%;
  width: 100%;
`;

const SVG3 = styled.div`
  position: absolute;
  background-image: url(${svg3});
  background-repeat: no-repeat;
  background-size: auto 450px;
  background-position: center top;

  top: 0;

  height: 100%;
  width: 100%;
`;

// const SVG3 = styled(SVG)`
//   @media screen and (max-width: 1400px) {
//     height: 430px;
//   }
// `;

  /* transform: rotateY(${props => props.position.y}deg); */

// const Div = styled.div`
//   position: absolute;
//   z-index: 4;
//   left: 40px;
//   top: 10px;
// `;

const Dots = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  position: absolute;
  margin: 0 auto;
  width: 50%;
  left: 50%;
  top: 6%;
  transform: translateX(-50%);
  overflow: hidden;
`;

const handleDotSizes = (size: string) => {
  switch(size) {
    case 'large': 
      return '80px';
    case 'mid':
      return '60px';
    case 'small':
      return '50px';
    default:
      return '70px';
  }
}

const rotate = (z: number) => keyframes`
  from {
    transform: rotateZ(${z}deg)
  }
  to {
    transform: rotateZ(${z - 360}deg);
  }
`;

const Dot = styled.div<DotStyle>`
  position: relative;
  width: ${({ size }) => handleDotSizes(size!)};
  height: ${({ size }) => handleDotSizes(size!)};
  background: url(${triangle}) no-repeat center transparent;
  transform: rotateZ(${(props) => props.orientation}deg);
  flex-shrink: 0;
  margin-top: ${props => props.pos || '0'};
  animation: ${props => rotate(props.orientation!)} 10s  linear infinite;
  transform-origin: center;
`;

/* transform: rotateX( ${props => props.position.x}deg) rotateY(${props => props.position.y}deg) */