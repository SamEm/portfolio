import { forwardRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsGithub, GoLinkExternal } from 'react-icons/all';
import { Container, H1, H2, Highlight, Split } from "../theme/GlobalStyles";

const Projects = (props: any, ref: any) => {
  return (
    <Container mt="100px" ref={ref} {...props}>
      <H1>
        Notable <Split>Projects <Highlight>&</Highlight> Concepts<Highlight>.</Highlight></Split>
      </H1>
      <ProjectsWrap>
        <Project>
          <ProjectPadding>
            <ProjectTop>
              <GithubIcon>
                <BsGithub />
              </GithubIcon>
              <H2>Bug reporting website</H2>
              <ShortDesc>Short project description</ShortDesc>
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
        <Project>
          <ProjectPadding>
            <ProjectTop>
              <GithubIcon>
                <BsGithub />
              </GithubIcon>
              <H2>Twitch panels</H2>
              <ShortDesc>Short project description</ShortDesc>
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
                <BsGithub />
              </GithubIcon>
              <H2>1324 game</H2>
              <ShortDesc>Short project description</ShortDesc>
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
      </ProjectsWrap>
    </Container>
  );
};

export default forwardRef(Projects);

const ProjectsWrap = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(auto-fill, 350px);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  justify-content: center;

  width: 100%;
  margin-top: 50px;
  @media screen and (max-width: 1350px) {
    margin-top: 50px;
  }
`;

const Project = styled.div`
  width: 350px;
  height: 300px;
  display: flex;

  background-color: ${(props) => props.theme.colors.raisinBlack};
  border-radius: 5px;
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
