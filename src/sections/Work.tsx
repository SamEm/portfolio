import { forwardRef } from "react";
import styled from "styled-components";
import { Container, H1, H2, Highlight, Split } from "../theme/GlobalStyles";
import { GoLinkExternal } from 'react-icons/all';
import spaceXPic from "../assets/0T4LM.png";
import holidazePic from "../assets/1i3h0.jpg";

const Work = (props: any, ref: any) => {
  return (
    <Container ref={ref} {...props}>
      <H1>
        <Split>
          Highlighted Work<Highlight>.</Highlight>
        </Split>
      </H1>
      <ProjectsCont>
        <ProjectPos>
          <Project>
            <Img src={spaceXPic} />
            <ProjectInfoWrap>
              <ProjectInfo>
                <ProjectInfoTextWrap>
                  <ProjectInfoTextWrapInner>
                    <ProjectInfoPos>
                      <H2 work>Space X Launches</H2>
                      <ProjectInfoText>
                        A website that shows you the upcoming Space X space
                        launches.
                      </ProjectInfoText>
                    </ProjectInfoPos>
                    <ProjectLink
                      target="_blank"
                      href="https://github.com/TuttiFrooti/spacex-ts"
                    >
                      <GoLinkExternal />
                    </ProjectLink>
                  </ProjectInfoTextWrapInner>
                </ProjectInfoTextWrap>
              </ProjectInfo>
              <ProjectLangsWrap>
                <ProjectLang>JS</ProjectLang>
                <ProjectLang>HTML</ProjectLang>
                <ProjectLang>CSS</ProjectLang>
              </ProjectLangsWrap>
              <CloudPos></CloudPos>
            </ProjectInfoWrap>
          </Project>

          <Project inverted>
            <Img src={holidazePic} />
            <ProjectInfoWrap inverted>
              <ProjectInfo>
                <ProjectInfoTextWrap>
                  <ProjectInfoTextWrapInner>
                    <ProjectInfoPos>
                      <H2 work>Holidaze booking</H2>
                      <ProjectInfoText>
                        A rough mock of a accomodation booking website with
                        focus on Bergen, Norway
                      </ProjectInfoText>
                    </ProjectInfoPos>
                    <ProjectLink target="_blank" href="">
                      <GoLinkExternal />
                    </ProjectLink>
                  </ProjectInfoTextWrapInner>
                </ProjectInfoTextWrap>
              </ProjectInfo>
              <ProjectLangsWrap inverted>
                <ProjectLang>JS</ProjectLang>
                <ProjectLang>HTML</ProjectLang>
                <ProjectLang>CSS</ProjectLang>
              </ProjectLangsWrap>
            </ProjectInfoWrap>
          </Project>
        </ProjectPos>
      </ProjectsCont>
    </Container>
  );
}

export default forwardRef(Work);

const ProjectsCont = styled.div`
  margin-top: 50px;
  width: 100%;

  @media screen and (max-width: 1350px) {
    margin-top: 50px;
  }
`;

const ProjectPos = styled.div`
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

interface ProjectsStyle {
  readonly inverted?: boolean;
}

const Project = styled.div<ProjectsStyle>`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.inverted ? "row-reverse" : "row")};

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Img = styled.img`
  border-radius: 5px;
  max-width: 700px;
  width: 100%;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    border-radius: 5px 5px 0 0;
  }
`;

const ProjectInfoWrap = styled.div<ProjectsStyle>`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: ${(props) => (props.inverted ? "0" : "-80px")};
  margin-right: ${(props) => (props.inverted ? "-80px" : "0")};
  margin-top: 16px;
  position: relative;

  @media screen and (max-width: 1200px) {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    max-width: 700px;
    width: 100%;
  }
`;

const ProjectInfo = styled.div`
  width: 100%;
`;

const ProjectInfoTextWrap = styled.div`
  background-color: ${(props) => props.theme.colors.raisinBlack};
  height: 150px;
  border-radius: 5px;

  @media screen and (max-width: 1200px) {
    border-radius: 0 0 5px 5px;
  }
`;

const ProjectInfoTextWrapInner = styled.div`
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
`;

const ProjectInfoText = styled.p`
  max-width: 350px;
`;

const ProjectLink = styled.a`
  width: 30px;
  height: 30px;
  margin-top: 10px;
  color: ${(props) => props.theme.colors.textLight};
  font-size: 30px;
  cursor: pointer;
`;

const ProjectLangsWrap = styled.div<ProjectsStyle>`
  display: flex;
  gap: 15px;
  justify-content: ${(props) => (props.inverted ? "flex-start" : "flex-end")};
  height: 15px;

  @media screen and (max-width: 1200px) {
    justify-content: flex-end;
  }
`;

const ProjectLang = styled.div`
  color: ${(props) => props.theme.colors.textDim};
`;

const ProjectInfoPos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CloudPos = styled.div`
  position: absolute;
`;
