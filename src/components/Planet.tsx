import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { MousePosition } from "../utils/mousePosition";
import Anime from "react-anime";

interface MouseMovePos {
  x: number;
  y: number;
}

interface DotStyle {
  pos: number;
  opacity: number;
  shadow: boolean;
}

export default function Planet() {
  const mouseMove = MousePosition();

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
          <Circle pos={8} opacity={0.9} shadow={true} />
          <Circle pos={18} opacity={0.8} shadow={false} />
          <Circle pos={18} opacity={1} shadow={false} />
          <Circle pos={5} opacity={0.9} shadow={true} />
        </Dots>
      </Anime>

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

  box-shadow: inset 0 -5px 0 #312e4f, inset 20px 20px 100px 0px #3c3961;
  /* transform: translate3d(-${(props) => props.x}%, -${(props) =>
    props.y}%, 0); */

  @media only screen and (max-width: 1400px) {
    height: 1100px;
  }
  @media only screen and (max-width: 820px) {
    height: 600px;
    top: -400px;
  }
  @media only screen and (max-width: 520px) {
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

  @media only screen and (max-width: 1400px) {
    height: ${1100 * 1.04}px;
  }
  @media only screen and (max-width: 820px) {
    height: ${600 * 1.04}px;
    top: -400px;
  }
  @media only screen and (max-width: 520px) {
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

  @media only screen and (max-width: 1400px) {
    height: ${1100 * 1.08}px;
  }
  @media only screen and (max-width: 820px) {
    height: ${600 * 1.08}px;
    top: -400px;
  }
  @media only screen and (max-width: 520px) {
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
  opacity: ${({ opacity }) => opacity};

  box-shadow: inset 0 -10px 0 #2c2a47;
  ${({ shadow }) =>
    shadow
      ? css`
          box-shadow: inset 0 -5px 0 #24223a;
        `
      : css`
          box-shadow: inset 0 -7px 0 #222138;
        `}
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
