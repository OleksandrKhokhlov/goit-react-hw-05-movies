import { PacmanLoader } from 'react-spinners';

import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { NavLinkStyled, NavList } from './SharedLayout.sttyled';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavList>
            <li>
              <NavLinkStyled to="/">Home</NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/movies">Movies</NavLinkStyled>
            </li>
          </NavList>
        </nav>
      </header>
      <Suspense
        fallback={
          <PacmanLoader
            color="#4d9ded"
            cssOverride={{
              position: 'fixed',
              top: '50%',
              left: '50%',
            }}
          />
        }
      >
        <Outlet />
      </Suspense>
      <Toaster />
    </>
  );
};
