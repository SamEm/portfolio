import { forwardRef } from "react";
import styled from "styled-components";
import {
  BsGithub,
  GoLinkExternal,
  CgWebsite,
  BiExtension,
} from "react-icons/all";
import { Container, H1, H2, Highlight, Split } from "../theme/GlobalStyles";

const Projects = (props: any, ref: any) => {
  return (
    <Container mt="100px" ref={ref} {...props}>
      <H1>
        Notable{" "}
        <Split>
          Projects <Highlight>&</Highlight> Concepts<Highlight>.</Highlight>
        </Split>
      </H1>
      <ProjectsWrap>
        <Project>
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
                <ProjectLang>JS</ProjectLang>
                <ProjectLang>HTML</ProjectLang>
                <ProjectLang>CSS</ProjectLang>
              </ProjectLangsWrap>

              <ProjectLink
                target="_blank"
                href="https://github.com/SamEm/portfolio"
              >
                <GoLinkExternal />
              </ProjectLink>
            </ProjectBottom>
          </ProjectPadding>
        </Project>
        <Project>
          <ProjectPadding>
            <ProjectTop>
              <GithubIcon>
                <BsGithub />
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

              <ProjectLink
                target="_blank"
                href="https://github.com/SamEm/Censor-List-website"
              >
                <GoLinkExternal />
              </ProjectLink>
            </ProjectBottom>
          </ProjectPadding>
        </Project>
        <Project>
          <ProjectPadding>
            <ProjectTop>
              <GithubIcon>
                <BiExtension />
              </GithubIcon>
              <H2>Week Number Extension</H2>
              <ShortDesc>
                A Chrome extension that displays the week number in the Chrome
                taskbar.
              </ShortDesc>
            </ProjectTop>
            <ProjectBottom>
              <ProjectLangsWrap>
                <ProjectLang>JS</ProjectLang>
                <ProjectLang>HTML</ProjectLang>
                <ProjectLang>CSS</ProjectLang>
              </ProjectLangsWrap>

              <ProjectLink
                target="_blank"
                href="https://chrome.google.com/webstore/detail/week-number/lcdmdikpgdjoagalpngockiddgkbdaig?utm_source=chrome-app-launcher-info-dialog"
              >
                <GoLinkExternal />
              </ProjectLink>
            </ProjectBottom>
          </ProjectPadding>
        </Project>
        <Project>
          <ProjectPadding>
            <ProjectTop>
              <GithubIcon>
                <CgWebsite />
              </GithubIcon>
              <H2>Twitch panels</H2>
              <ShortDesc>
                A set of custom made Twitch description panels free to use for
                the community.
              </ShortDesc>
            </ProjectTop>
            <ProjectBottom>
              <ProjectLangsWrap>
                <ProjectLang>JS</ProjectLang>
                <ProjectLang>HTML</ProjectLang>
                <ProjectLang>CSS</ProjectLang>
              </ProjectLangsWrap>

              <ProjectLink target="_blank" href="https://logiz.net/panels/">
                <GoLinkExternal />
              </ProjectLink>
            </ProjectBottom>
          </ProjectPadding>
        </Project>
        <Project>
          <ProjectPadding>
            <ProjectTop>
              <GithubIcon>
                <CgWebsite />
              </GithubIcon>
              <H2>1234 game</H2>
              <ShortDesc>A short memory game created in Javascript where you have to remember the previous number.</ShortDesc>
            </ProjectTop>
            <ProjectBottom>
              <ProjectLangsWrap>
                <ProjectLang>JS</ProjectLang>
                <ProjectLang>HTML</ProjectLang>
                <ProjectLang>CSS</ProjectLang>
              </ProjectLangsWrap>

              <ProjectLink
                target="_blank"
                href="https://projects.logiz.net/1234/"
              >
                <GoLinkExternal />
              </ProjectLink>
            </ProjectBottom>
          </ProjectPadding>
        </Project>
        <Project>
          <ProjectPadding>
            <ProjectTop>
              <GithubIcon>
                <BsGithub />
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

              <ProjectLink
                target="_blank"
                href="https://github.com/SamEm/bug-reporting-website"
              >
                <GoLinkExternal />
              </ProjectLink>
            </ProjectBottom>
          </ProjectPadding>
        </Project>
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

const Project = styled.div`
  width: 350px;
  height: 300px;
  display: flex;

  background-color: ${(props) => props.theme.colors.raisinBlack};
  border-radius: 5px;

  @media screen and (max-width: 600px) {
    width: 300px;
    height: 280px;
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
  @media screen and (max-width: 410px) {
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

const ProjectLink = styled.a`
  width: 30px;
  height: 30px;
  color: ${(props) => props.theme.colors.textLight};
  font-size: 30px;
  margin-top: -10px;
`;
