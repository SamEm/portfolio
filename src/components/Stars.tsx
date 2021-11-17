import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Particles from "react-tsparticles";
import ParticlesConfig from "../utils/particlesjs-config.json";

interface starStyle {
  height: string;
  width: string;
  top: string;
  marginLeft: string;
  scaleNumb: number;
}

export default function Planet() {
  const [allStars, setAllStars] = useState<starStyle[]>([]);

  // useEffect(() => {

  //   const StarCount = 20;
  //   const ConstructStars = () => {
  //     for(let i = 0; i < StarCount; i++) {
  //       // console.log(i)
  //       const Size = Math.floor(5 * Math.random()) + 7;
  //       const Top = Math.floor(document.body.scrollHeight * Math.random());
  //       // console.log(document.body.scrollHeight);
  //       // const Top = Math.floor(Math.random() * 100);
  //       // const Left = Math.floor(window.innerWidth * Math.random());
  //       const Left = Math.floor(Math.random() * 100);
  //       if(Left > window.innerWidth) {

  //       }
  //       setAllStars((stars) => [
  //         {
  //           height: Size + "px",
  //           width: Size + "px",
  //           top: Top + "px",
  //           marginLeft: Left + "vw",
  //           scaleNumb: Size,
  //         },
  //         ...stars,
  //       ]);
  //     }
  //   };
  //   ConstructStars();
  // }, []);

  return (
    <Container>
      <Div>
        <TestParticle
          options={{
            particles: {
              number: {
                value: 43,
                density: {
                  enable: false,
                  value_area: 800,
                },
              },
              color: {
                value: "#919ba8",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 1,
                random: true,
                anim: {
                  enable: true,
                  speed: 0.3,
                  opacity_min: 0.3,
                  sync: false,
                },
              },
              size: {
                value: 2,
                random: true,
                anim: {
                  enable: false,
                  speed: 4,
                  size_min: 0.3,
                  sync: false,
                },
              },
              line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 600,
                },
              },
            },
            fullscreen: {
              enable: true,
              zIndex: -2,
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                  mode: "bubble",
                },
                onclick: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 250,
                  size: 0,
                  duration: 2,
                  opacity: 0,
                },
                repulse: {
                  distance: 400,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </Div>
      <Div>
        <TestParticle
          options={{
            particles: {
              number: {
                value: 43,
                density: {
                  enable: false,
                  value_area: 800,
                },
              },
              color: {
                value: "#919ba8",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 1,
                random: true,
                anim: {
                  enable: true,
                  speed: 0.24362316369040352,
                  opacity_min: 0.162415442460269,
                  sync: false,
                },
              },
              size: {
                value: 2,
                random: true,
                anim: {
                  enable: false,
                  speed: 4,
                  size_min: 0.3,
                  sync: false,
                },
              },
              line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 600,
                },
              },
            },
            fullscreen: {
              enable: true,
              zIndex: -2,
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                  mode: "bubble",
                },
                onclick: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 250,
                  size: 0,
                  duration: 2,
                  opacity: 0,
                },
                repulse: {
                  distance: 400,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </Div>
      {/* {allStars &&
        allStars.map((e: starStyle, i: number) => {
          return (
            <Star
              key={i}
              height={e.height}
              width={e.width}
              top={e.top}
              marginLeft={e.marginLeft}
              scaleNumb={e.scaleNumb}
            />
          );
        })} */}
    </Container>
  );
}

const TestParticle = styled(Particles)`
`;

const Container = styled.div`
  position: absolute;
  z-index: -2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Div = styled.div`
`;

const pulse = (scaleNumb: number) => keyframes`
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
	}
	
	70% {
		transform: scale(1);
		box-shadow: 0 0 0 5px rgba(255, 255, 255, 0);
	}
	
	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
	}
`;

const Star = styled.div<starStyle>`
  position: relative;
  background-color: ${(props) => props.theme.colors.textDim};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  top: ${(props) => props.top};
  margin-left: ${(props) => props.marginLeft};
  border-radius: 10px;
  box-shadow: 0 0 0 0 ${(props) => props.theme.colors.textDim};
  animation: ${(props) => pulse(props.scaleNumb)} 4s infinite;
`;