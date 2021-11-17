import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { MousePosition } from "../utils/mousePosition";
import { MouseMove } from "../utils/mouseMove";

interface MouseMovePos {
  x: number;
  y: number;
}

interface DotStyle {
  pos: number;
  size?: string;
  orientation?: number;
}

export default function Planet() {
  const position = MousePosition();
  const mouseMove = MouseMove();

  useEffect(() => {
    const windowWidth = window.innerWidth;
  }, []);

  return (
    <Container>
      <SVG3 x={mouseMove.x} y={mouseMove.y} />
      <SVG2 x={mouseMove.x} y={mouseMove.y} />
      <SVG1 x={mouseMove.x} y={mouseMove.y} />

      <Dots x={mouseMove.x} y={mouseMove.y}>
        <Circle
          pos={5}
          size="small"
          orientation={6}
        />
        <Circle
          pos={10}
          size="large"
          orientation={132}
        />
        <Circle
          pos={18}
          size="mid"
          orientation={293}
        />
        <Circle 
          pos={10} 
          orientation={133} 
        />
      </Dots>
      {/* <Div>
        {position.x}:{position.y}
      </Div> */}
    </Container>
  );
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

const SVG1 = styled.div<MouseMovePos>`
  position: absolute;

  background-color: ${(props) => props.theme.colors.raisinBlack};
  border-radius: 100%;
  max-width: 1300px;
  height: 1200px;

  top: -900px;
  left: 0;
  right: 0;
  margin: 0 auto;

  box-shadow: inset 0 -10px 0 #312e4f;
  transform: translate3d(-${(props) => props.x}%, -${(props) => props.y}%, 0);

  @media only screen and (max-width: 1400px) {
    height: 1100px;
  }
  @media only screen and (max-width: 800px) {
    height: 600px;
    top: -400px;
  }
  @media only screen and (max-width: 500px) {
    height: 400px;
    top: -250px;
  }
`;

const SVG2 = styled.div<MouseMovePos>`
  position: absolute;
  background-color: ${(props) => props.theme.colors.raisinBlackShade1};
  border-radius: 100%;

  max-width: ${1300 * 1.04}px;
  height: ${1200 * 1.04}px;
  top: -900px;
  left: 0;
  right: 0;
  margin: 0 auto;
  transform: translate3d(-${(props) => props.x}%, -${(props) => props.y}%, 0);

  @media only screen and (max-width: 1400px) {
    height: ${1100 * 1.04}px;
  }
  @media only screen and (max-width: 800px) {
    height: ${600 * 1.04}px;
    top: -400px;
  }
  @media only screen and (max-width: 500px) {
    height: ${400 * 1.04}px;
    top: -250px;
  }
`;

const SVG3 = styled.div<MouseMovePos>`
  position: absolute;
  background-color: ${(props) => props.theme.colors.raisinBlackShade2};
  border-radius: 100%;

  max-width: ${1300 * 1.08}px;
  height: ${1200 * 1.08}px;
  top: -900px;
  left: 0;
  right: 0;
  margin: 0 auto;
  transform: translate3d(-${(props) => props.x}%, -${(props) => props.y}%, 0);
  @media only screen and (max-width: 1400px) {
    height: ${1100 * 1.08}px;
  }
  @media only screen and (max-width: 800px) {
    height: ${600 * 1.08}px;
    top: -400px;
  }
  @media only screen and (max-width: 500px) {
    height: ${400 * 1.08}px;
    top: -250px;
  }
`;

const Dots = styled.div<MouseMovePos>`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  position: absolute;
  margin: 0 auto;
  max-width: 700px;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 3%;
  overflow: hidden;
  transform: translate3d(-${(props) => props.x}%, -${(props) => props.y}%, 0);

  @media only screen and (max-width: 1400px) {
    top: 0;
    gap: 20px;
  }
  @media only screen and (max-width: 800px) {
    /* height: ${600 * 1.08}px;
    top: -400px; */
    top: 1%;
  }
  @media only screen and (max-width: 500px) {
    /* height: ${400 * 1.08}px;
    top: -250px; */
  }
  border: 1px solid red;
`;

const handleDotSizes = (size: string) => {
  switch (size) {
    case "large":
      return "80px";
    case "mid":
      return "60px";
    case "small":
      return "50px";
    default:
      return "70px";
  }
};

const Circle = styled.div<DotStyle>`
  background-color: ${(props) => props.theme.colors.blobColor};
  border-radius: 100%;

  /* max-width: ${({ size }) => handleDotSizes(size!)};
  max-height: ${({ size }) => handleDotSizes(size!)}; */
  width: 80px;
  height: 80px;
  margin-top: ${(props) => props.pos}%;
  flex-shrink: 0;

  box-shadow: inset 0 -10px 0 ${(props) => props.theme.colors.raisinBlackShade1};
  /* border: 5px solid ${(props) => props.theme.colors.raisinBlackShade1}; */
  @media only screen and (max-width: 1400px) {
    margin-top: ${(props) => props.pos - 10}%;
  }
  @media only screen and (max-width: 800px) {
    /* height: ${600 * 1.08}px;
    top: -400px; */
    top: 0;
  }
  @media only screen and (max-width: 500px) {
    /* height: ${400 * 1.08}px;
    top: -250px; */
  }
`;
