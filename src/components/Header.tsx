import { FC, useState, useEffect } from 'react';
import styled, { css } from "styled-components";
import { Highlight } from '../theme/GlobalStyles';
import logo from '../assets/logo.png';
import { HiOutlineMenuAlt3, AiOutlineClose } from 'react-icons/all';
import Anime from "react-anime";

// Get a higher res version of the logo

interface Props {
  AboveTheFoldRef: any;
  WorkRef: any;
  ProjectsRef: any;
  ContactRef: any;
}

interface ResponsiveMenuProps {
  open: boolean;
}

const Header: FC<Props> = ({ AboveTheFoldRef, WorkRef, ProjectsRef, ContactRef }) => {
  const [buttonState, setButtonState] = useState(false);
  const [scrollTopOffset, setScrollTopOffset] = useState(false);
  
  const config = {
    duartion: 1000,
    translateY: ["-5em", 0],
    opacity: [0, 1],
  };

  useEffect(() => {
    window.onscroll = () => {
      setScrollTopOffset(window.pageYOffset > 40);
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  const scrollTo = (e: any) => {
    e.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const responsiveScrollTo = (e: any) => {
    setButtonState(!buttonState);
    e.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const openResponsiveMenu = () => { 
    setButtonState(!buttonState);
  }

  return (
    <Head scrolled={scrollTopOffset}>
      <InnerHead>
        <Link>
          <Logo src={logo} onClick={() => scrollToTop()} />
        </Link>

        <Anime delay={(el: Element, index: number) => 900} {...config}>
          <Menu>
            <Link onClick={() => scrollTo(WorkRef.current)}>Work</Link>
            <Link onClick={() => scrollTo(ProjectsRef.current)}>
              Projects <Highlight>&</Highlight> Concepts
            </Link>
            <Link onClick={() => scrollTo(ContactRef.current)}>Contact</Link>
          </Menu>
        </Anime>

        <ResponsiveMenuWrap>
          <ResponsiveMenuIcon onClick={openResponsiveMenu}>
            <HiOutlineMenuAlt3 />
          </ResponsiveMenuIcon>
          <ResponsiveMenu open={buttonState}>
            <ResponsiveMenuIcon onClick={openResponsiveMenu}>
              <AiOutlineClose />
            </ResponsiveMenuIcon>

            <Links>
              <Link onClick={() => responsiveScrollTo(WorkRef.current)}>
                Work
              </Link>
              <Link onClick={() => responsiveScrollTo(ProjectsRef.current)}>
                Projects <Highlight>&</Highlight> Concepts
              </Link>
              <Link onClick={() => responsiveScrollTo(ContactRef.current)}>
                Contact
              </Link>
            </Links>
          </ResponsiveMenu>
        </ResponsiveMenuWrap>
      </InnerHead>
    </Head>
  );
}

export default Header;

interface HeadProps {
  scrolled: boolean;
}

const Head = styled.header<HeadProps>`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  position: sticky;
  top: -10px;
  z-index: 1;
  @media only screen and (min-width: 751px) {
    ${({ scrolled }) =>
      scrolled &&
      css`
        background-color: ${({ theme }) => theme.colors.blobColor};
      `}
  }
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
`;

const Menu = styled.nav`
  display: flex;
  gap: 20px;
`;

const Link = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textLight};
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ResponsiveMenuWrap = styled.div`
  position: relative;
  z-index: 100;
  display: none;
`;

const ResponsiveMenuIcon = styled.div`
  font-size: 2em;
  cursor: pointer;
`;

const ResponsiveMenu = styled.div<ResponsiveMenuProps>`
  display: flex;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.colors.blobColor};
  left: 0;
  top: 0;
  clip-path: circle(0);
  transition: clip-path 1s;

  ${({ open }) =>
    open &&
    css`
      transition: clip-path 1s;
      clip-path: circle(100%);
    `}

  ${ResponsiveMenuIcon} {
    margin: 45px 90px 0;
    align-self: start;
    right: 0;
    position: absolute;
    font-size: 2em;
  }
`;

const Links = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${Link} {
    font-size: 5em;
    @media screen and (max-width: 800px) {
      font-size: 2em;
    }
  }
`;

const InnerHead = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 50px 10px;

  @media only screen and (max-width: 750px) {
    margin: 20px 30px 0;
    ${Menu} {
      display: none;
    }
    ${ResponsiveMenuWrap} {
      display: flex;
    }
  }
`;