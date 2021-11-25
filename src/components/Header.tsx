import { FC, useState } from 'react';
import styled, { css, keyframes } from "styled-components";
import { Highlight } from '../theme/GlobalStyles';
import logo from '../assets/logo.png';
import { HiOutlineMenuAlt3, AiOutlineClose } from 'react-icons/all';


// Get a higher res version of the logo

interface Props {
  WorkRef: any;
  ProjectsRef: any;
  ContactRef: any;
}

interface ResponsiveMenuProps {
  open: boolean;
}

const Header: FC<Props> = ({ WorkRef, ProjectsRef, ContactRef }) => {
  const [buttonState, setButtonState] = useState(false);

  const scrollTo = (e: any) => {
    console.log(typeof e)
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
    <Head>
      <InnerHead>
        <Link>
          <Logo src={logo} />
        </Link>
        <Menu>
          <Link onClick={() => scrollTo(WorkRef.current)}>Work</Link>
          <Link onClick={() => scrollTo(ProjectsRef.current)}>
            Projects <Highlight>&</Highlight> Concepts
          </Link>
          <Link onClick={() => scrollTo(ContactRef.current)}>Contact</Link>
        </Menu>

        <ResponsiveMenuWrap>
          <ResponsiveMenuIcon onClick={openResponsiveMenu}>
            <HiOutlineMenuAlt3 />
          </ResponsiveMenuIcon>
          <ResponsiveMenu open={buttonState}>
            <ResponsiveMenuIcon onClick={openResponsiveMenu}>
              <AiOutlineClose />
            </ResponsiveMenuIcon>

            <Links>
              <Link onClick={() => responsiveScrollTo(WorkRef.current)}>Work</Link>
              <Link onClick={() => responsiveScrollTo(ProjectsRef.current)}>
                Projects <Highlight>&</Highlight> Concepts
              </Link>
              <Link onClick={() => responsiveScrollTo(ContactRef.current)}>Contact</Link>
            </Links>
          </ResponsiveMenu>
        </ResponsiveMenuWrap>
      </InnerHead>
    </Head>
  );
}

export default Header;

const Head = styled.header`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 1;
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
  color: ${(props) => props.theme.colors.textLight};
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
  margin: 40px 80px 0;

  @media only screen and (max-width: 750px) {
    ${Menu} {
      display: none;
    }
    ${ResponsiveMenuWrap} {
      display: flex;
    }
  }
`;