import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { MousePosition } from "../utils/mousePosition";
import { MouseMove } from "../utils/mouseMove";
import Anime from "react-anime";

interface MouseMovePos {
  x: number;
  y: number;
}

interface DotStyle {
  pos: number;
}

export default function Planet() {
  const position = MousePosition();
  const mouseMove = MouseMove();
  const config = {
    duartion: 1000,
    translateY: ["-5em", 0],
    opacity: [0, 1],
  };


  useEffect(() => {
    const windowWidth = window.innerWidth;
  }, []);

  return (
    <Container>
      <Anime delay={(el: Element, index: number) => 1000} {...config}>
        <SVG3 x={mouseMove.x} y={mouseMove.y} />
      </Anime>
      <Anime delay={(el: Element, index: number) => 800} {...config}>
        <SVG2 x={mouseMove.x} y={mouseMove.y} />
      </Anime>
      <Anime delay={(el: Element, index: number) => 500} {...config}>
        <SVG1 x={mouseMove.x} y={mouseMove.y} />
        <Dots x={mouseMove.x} y={mouseMove.y}>
          <Circle pos={8} />
          <Circle pos={18} />
          <Circle pos={18} />
          <Circle pos={8} />
        </Dots>
      </Anime>

      <SVGShadow x={mouseMove.x} y={mouseMove.y} />

      <div>
        {position.x}:{position.y}
      </div>
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

const SVGShadow = styled.div<MouseMovePos>`
  position: absolute;

  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 100%;
  max-width: 800px;
  height: 800px;

  top: -800px;
  left: 0;
  right: 0;
  margin: 0 auto;

  /* background: radial-gradient(
    farthest-corner at top,
    rgba(84, 61, 143, 0.4) -80%,
    rgba(43, 39, 69, 0.4) 70%
  ); */
  /* box-shadow: 20px 20px 50px 0px rgba(0, 0, 0, 0.3); */
  /* transform: translate3d(-${(props) => props.x}%, -${(props) =>
    props.y}%, 0); */

  /* @media only screen and (max-width: 1400px) {
    height: 1100px;
  }
  @media only screen and (max-width: 800px) {
    height: 600px;
    top: -400px;
  }
  @media only screen and (max-width: 500px) {
    height: 400px;
    top: -250px;
  } */
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

  box-shadow: inset 0 -5px 0 #312e4f, inset 20px 20px 100px 0px #312e4f;
  /* transform: translate3d(-${(props) => props.x}%, -${(props) =>
    props.y}%, 0); */

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
  /* transform: translate3d(-${(props) => props.x}%, -${(props) => props.y}%, 0); */

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
  /* transform: translate3d(-${(props) => props.x}%, -${(props) => props.y}%, 0); */

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
  justify-content: space-evenly;
  gap: 30px;
  position: absolute;
  margin: 0 auto;
  max-width: 700px;
  left: 0;
  right: 0;
  margin: 0 auto;
  overflow: hidden;
  /* transform: translate3d(-${(props) => props.x}%, -${(props) => props.y}%, 0); */

  @media only screen and (max-width: 1400px) {
    gap: 0;
  }
  @media only screen and (max-width: 810px) {
    max-width: 550px;
  }
`;

const Circle = styled.div<DotStyle>`
  background-color: ${({ theme }) => theme.colors.blobColor};
  border-radius: 100%;

  width: 80px;
  height: 80px;
  margin-top: ${({ pos }) => pos}%;
  flex-shrink: 0;

  box-shadow: inset 0 -10px 0 ${({ theme }) => theme.colors.raisinBlackShade1};
  @media only screen and (max-width: 1400px) {
    margin-top: ${({ pos }) => pos - 7}%;
  }
  @media only screen and (max-width: 950px) {
    width: 70px;
    height: 70px;
    top: 0;
  }
  @media only screen and (max-width: 500px) {
    width: 50px;
    height: 50px;
  }
`;
