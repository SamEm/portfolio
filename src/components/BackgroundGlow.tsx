import styled from "styled-components";

export default function BackgroundGlow() {
  return (
    <GlowWrap>
      <Glow></Glow>
    </GlowWrap>
  );
}

const GlowWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Glow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -3;
  background-color: rgb(11, 23, 38);
  background: radial-gradient(
    farthest-corner at top,
    rgba(84, 61, 143, 0.5) -80%,
    rgba(17, 17, 31, 1) 70%
  );

  @media only screen and (max-width: 1600px) {
    height: 80%;
    width: 150%;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(
      farthest-corner at top,
      rgba(84, 61, 143, 0.5) -100%,
      rgba(17, 17, 31, 1) 50%
    );
  }
`;