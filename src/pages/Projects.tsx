import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Container, H1, H2, Highlight } from "../theme/GlobalStyles";

export default function Projects() {
  return (
    <Container mt="100px">
      <H1>
        Notable projects & concepts<Highlight>.</Highlight>
      </H1>
      <ProjectsWrap>
        <Project>
          <ProjectPadding>
            <ProjectTop>
              <GithubIcon>
                <FontAwesomeIcon icon={faGithub} />
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
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </ProjectLink>
            </ProjectBottom>
          </ProjectPadding>
        </Project>
        <Project>
          <ProjectPadding>
            <ProjectTop>
              <GithubIcon>
                <FontAwesomeIcon icon={faGithub} />
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
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </ProjectLink>
            </ProjectBottom>
          </ProjectPadding>
        </Project>
        <Project>
          <ProjectPadding>
            <ProjectTop>
              <GithubIcon>
                <FontAwesomeIcon icon={faGithub} />
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
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </ProjectLink>
            </ProjectBottom>
          </ProjectPadding>
        </Project>
      </ProjectsWrap>
    </Container>
  );
}

const ProjectsWrap = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(auto-fill, 350px);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  justify-content: center;

  width: 100%;
  margin-top: 200px;
  @media screen and (max-width: 1350px) {
    margin-top: 50px;
  }
`;

const Project = styled.div`
  width: 350px;
  height: 300px;
  display: flex;

  background-color: ${(props) => props.theme.colors.raisinBlackShade1};
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