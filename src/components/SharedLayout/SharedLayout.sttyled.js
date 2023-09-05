import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  margin: 0;
  padding: 20px 15px;
  display: flex;
  gap: 15px;
  list-style-type: none;
  border-bottom: 3px solid #d6c8c8;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-weight: 600;
  color: black;
  &.active {
    color: red;
  }
`;
