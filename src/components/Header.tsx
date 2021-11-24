import {FC} from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Highlight } from '../theme/GlobalStyles';
import logo from '../assets/logo.png';

// Get a higher res version of the logo

interface Props {
  WorkRef: any;
  ProjectsRef: any;
  ContactRef: any;
}

const Header: FC<Props> = ({ WorkRef, ProjectsRef, ContactRef }) => {
  const scrollTo = (e: any) => {
    console.log(e)
    e.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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
      </InnerHead>
    </Head>
  );
}

export default Header

const Head = styled.header`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const InnerHead = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 80px;
  margin-top: 40px;
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
  color: ${props => props.theme.colors.textLight};
  transition: color .2s ease;
  cursor: pointer;

  /* &.active {
    color: ${props => props.theme.colors.primary};
    transition: color .2s ease;
  }; */
  &:hover {
    color: ${props => props.theme.colors.primary};
  };
`;