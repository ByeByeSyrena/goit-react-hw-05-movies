import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export function SharedLayout() {
  return (
    <>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Outlet />
    </>
  );
}
