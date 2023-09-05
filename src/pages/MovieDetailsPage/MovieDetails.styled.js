import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const GoBackBtn = styled(Link)`
  display: block;
  margin-bottom: 10px;
  color: black;
  text-decoration: none;
  svg {
    vertical-align: bottom;
  }
`;

export const MovieDetailsWrap = styled.div`
  display: flex;
  gap: 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid #d6c8c8;
`;
