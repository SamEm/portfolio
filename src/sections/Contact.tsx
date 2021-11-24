import { forwardRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, H1, H2, Highlight } from "../theme/GlobalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

const Contact = (props: any, ref: any) => {
  return (
    <Container mt="100px" ref={ref} {...props}>
      <H1>
        Where to find me<Highlight>.</Highlight>
      </H1>
      <InnerCont>
        <LinkStyle href="mailto:hello@logiz.net">
          <H2>hello@logiz.net</H2>
        </LinkStyle>

        <SocialWrap>
          <Social href="">
            <FontAwesomeIcon icon={faGithub} />
          </Social>
          <Social href="">
            <FontAwesomeIcon icon={faGithub} />
          </Social>
          <Social href="">
            <FontAwesomeIcon icon={faTwitter} />
          </Social>
          <Social href="">
            <FontAwesomeIcon icon={faTwitch} />
          </Social>
        </SocialWrap>
      </InnerCont>
    </Container>
  );
};

export default forwardRef(Contact);

const InnerCont = styled.div`
  margin-top: 50px;
  @media screen and (max-width: 1350px) {
    margin-top: 50px;
  }
`;

const LinkStyle = styled.a`
  ${H2} {
    transition: color 0.2s ease;
    &:hover {
      color: ${(props: any) => props.theme.colors.primary};
    }
  }
`;

const SocialWrap = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 20px;
`;

const Social = styled.a`
  font-size: 30px;
  color: ${(props) => props.theme.colors.textLight};
  transition: color 0.2s ease;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;
