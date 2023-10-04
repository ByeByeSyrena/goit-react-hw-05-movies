import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import css from './SharedLayout.module.css';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: red;
  }
`;

export function SharedLayout() {
  return (
    <div className={css.box}>
      <header className={css.header}>
        <nav className={css.navigation}>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
