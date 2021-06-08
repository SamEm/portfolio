import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Highlight } from '../theme/GlobalStyles';
import logo from '../assets/logo.png';

// Get a higher res version of the logo

export default function Header() {

  return (
    <Head>
      <InnerHead>
        <Link exact to="/">
          <Logo src={logo} />
        </Link>
        <Menu>
          <Link exact to="/">
            Home
          </Link>
          <Link to="/work">Work</Link>
          <Link to="/projects">
            Projects <Highlight>&</Highlight> Concepts
          </Link>
          <Link to="/contact">Contact</Link>
        </Menu>
      </InnerHead>
    </Head>
  );
}

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
  max-width: 1320px;
  width: 100%;
  margin: 0 30px;
  margin-top: 45px;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
`;

const Menu = styled.nav`
  display: flex;
  gap: 20px;
`;

const Link = styled(NavLink)`
  font-size: 18px;
  color: ${props => props.theme.colors.textLight};
  transition: color .2s ease;

  &.active {
    color: ${props => props.theme.colors.primary};
    transition: color .2s ease;
  };
  &:hover {
    color: ${props => props.theme.colors.primary};
  };
`;