import { forwardRef, useState, useEffect } from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import {
  BsGithub,
  GoLinkExternal,
  CgWebsite,
  BiExtension,
  GiBugNet,
  MdGppBad,
} from "react-icons/all";
import { Container, H1, H2, Highlight, Split } from "../theme/GlobalStyles";
import useIsVisible from "../utils/isVisible";
import Anime from "react-anime";

const Projects = (props: any, ref: any) => {
  const [autoplayState, setAutoplayState] = useState(false);

  const isElmVisible = useIsVisible(ref);

  let configAnimate = {
    duartion: 1000,
    translateY: ["5em", 0],
    opacity: [0, 1],
    autoplay: false,
  };

  useEffect(() => {
    if (isElmVisible) {
      setAutoplayState(true);
    }
  }, [isElmVisible]);

  const config = {
    tiltMaxAngleX: 5,
    tiltMaxAngleY: 5,
    tiltReverse: false,
  };

  return (
    <Container mt="50px" ref={ref} {...props}>
      <H1>
        Notable{" "}
        <Split>
          Projects <Highlight>&</Highlight> Concepts<Highlight>.</Highlight>
        </Split>
      </H1>

      <ProjectsWrap>
        <Anime
          delay={(el: Element, index: number) => 500}
          {...configAnimate}
          autoplay={autoplayState}
        >
          <Tilt {...config}>
            <Project target="_blank" href="https://github.com/SamEm/portfolio">
              <ProjectPadding>
                <ProjectTop>
                  <GithubIcon>
                    <BsGithub />
                  </GithubIcon>
                  <H2>Portfolio</H2>
                  <ShortDesc>
                    This personal portfolio website created with React.
                  </ShortDesc>
                </ProjectTop>
                <ProjectBottom>
                  <ProjectLangsWrap>
                    <ProjectLang>REACT</ProjectLang>
                    <ProjectLang>TS</ProjectLang>
                    <ProjectLang>HTML</ProjectLang>
                    <ProjectLang>CSS</ProjectLang>
                  </ProjectLangsWrap>

                  <ProjectLink>
                    <GoLinkExternal />
                  </ProjectLink>
                </ProjectBottom>
              </ProjectPadding>
            </Project>
          </Tilt>
          <Tilt {...config}>
            <Project
              target="_blank"
              href="https://github.com/SamEm/Censor-List-website"
            >
              <ProjectPadding>
                <ProjectTop>
                  <GithubIcon>
                    <MdGppBad />
                  </GithubIcon>
                  <H2>Censor list</H2>
                  <ShortDesc>
                    A tool to fortify Discord moderation bots' ability to censor
                    inappropriate phrases.
                  </ShortDesc>
                </ProjectTop>
                <ProjectBottom>
                  <ProjectLangsWrap>
                    <ProjectLang>REACT</ProjectLang>
                    <ProjectLang>JS</ProjectLang>
                    <ProjectLang>HTML</ProjectLang>
                    <ProjectLang>CSS</ProjectLang>
                  </ProjectLangsWrap>

                  <ProjectLink>
                    <GoLinkExternal />
                  </ProjectLink>
                </ProjectBottom>
              </ProjectPadding>
            </Project>
          </Tilt>
          <Tilt {...config}>
            <Project
              target="_blank"
              href="https://chrome.google.com/webstore/detail/week-number/lcdmdikpgdjoagalpngockiddgkbdaig?utm_source=chrome-app-launcher-info-dialog"
            >
              <ProjectPadding>
                <ProjectTop>
                  <GithubIcon>
                    <BiExtension />
                  </GithubIcon>
                  <H2>Week Number Extension</H2>
                  <ShortDesc>
                    A Chrome extension that displays the week number in the
                    Chrome taskbar.
                  </ShortDesc>
                </ProjectTop>
                <ProjectBottom>
                  <ProjectLangsWrap>
                    <ProjectLang>JS</ProjectLang>
                    <ProjectLang>HTML</ProjectLang>
                    <ProjectLang>CSS</ProjectLang>
                  </ProjectLangsWrap>

                  <ProjectLink>
                    <GoLinkExternal />
                  </ProjectLink>
                </ProjectBottom>
              </ProjectPadding>
            </Project>
          </Tilt>
          <Tilt {...config}>
            <Project target="_blank" href="https://logiz.net/panels/">
              <ProjectPadding>
                <ProjectTop>
                  <GithubIcon>
                    <CgWebsite />
                  </GithubIcon>
                  <H2>Twitch panels</H2>
                  <ShortDesc>
                    A set of custom made Twitch description panels free to use
                    for the community.
                  </ShortDesc>
                </ProjectTop>
                <ProjectBottom>
                  <ProjectLangsWrap>
                    <ProjectLang>JS</ProjectLang>
                    <ProjectLang>HTML</ProjectLang>
                    <ProjectLang>CSS</ProjectLang>
                  </ProjectLangsWrap>

                  <ProjectLink>
                    <GoLinkExternal />
                  </ProjectLink>
                </ProjectBottom>
              </ProjectPadding>
            </Project>
          </Tilt>
          <Tilt {...config}>
            <Project target="_blank" href="https://projects.logiz.net/1234/">
              <ProjectPadding>
                <ProjectTop>
                  <GithubIcon>
                    <CgWebsite />
                  </GithubIcon>
                  <H2>1234 game</H2>
                  <ShortDesc>
                    A short memory game created in Javascript where you have to
                    remember the previous number.
                  </ShortDesc>
                </ProjectTop>
                <ProjectBottom>
                  <ProjectLangsWrap>
                    <ProjectLang>JS</ProjectLang>
                    <ProjectLang>HTML</ProjectLang>
                    <ProjectLang>CSS</ProjectLang>
                  </ProjectLangsWrap>

                  <ProjectLink>
                    <GoLinkExternal />
                  </ProjectLink>
                </ProjectBottom>
              </ProjectPadding>
            </Project>
          </Tilt>
          <Tilt {...config}>
            <Project
              target="_blank"
              href="https://github.com/SamEm/bug-reporting-website"
            >
              <ProjectPadding>
                <ProjectTop>
                  <GithubIcon>
                    <GiBugNet />
                  </GithubIcon>
                  <H2>Bug reporting website</H2>
                  <ShortDesc>A bug reporting form proof of concept.</ShortDesc>
                </ProjectTop>
                <ProjectBottom>
                  <ProjectLangsWrap>
                    <ProjectLang>REACT</ProjectLang>
                    <ProjectLang>JS</ProjectLang>
                    <ProjectLang>HTML</ProjectLang>
                    <ProjectLang>CSS</ProjectLang>
                  </ProjectLangsWrap>

                  <ProjectLink>
                    <GoLinkExternal />
                  </ProjectLink>
                </ProjectBottom>
              </ProjectPadding>
            </Project>
          </Tilt>
        </Anime>
      </ProjectsWrap>
    </Container>
  );
};

export default forwardRef(Projects);

const ProjectsWrap = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(auto-fill, 350px);
  gap: 40px;
  justify-content: center;

  width: 100%;
  margin-top: 60px;
  @media screen and (max-width: 1350px) {
    margin-top: 50px;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, 300px);
  }
`;

const Project = styled.a`
  width: 350px;
  height: 300px;
  display: flex;

  background-color: ${(props) => props.theme.colors.raisinBlack};
  color: ${({ theme }) => theme.colors.textLight};
  border-radius: 5px;

  @media screen and (max-width: 600px) {
    width: 300px;
    height: 100%;
  }

  :hover {
    ${H2} {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const ProjectPadding = styled.div`
  padding: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProjectTop = styled.div``;

const ProjectBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
`;

const GithubIcon = styled.div`
  font-size: 50px;
`;

const ShortDesc = styled.div`
  margin-top: 10px;
  line-height: 1.4;
  @media screen and (max-width: 600px) {
    margin: 20px 0;
  }
`;

const ProjectLangsWrap = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  position: relative;
`;

const ProjectLang = styled.div`
  color: ${(props) => props.theme.colors.textDim};
`;

const ProjectLink = styled.div`
  width: 30px;
  height: 30px;
  color: ${(props) => props.theme.colors.primary};
  font-size: 30px;
  margin-top: -10px;
`;
