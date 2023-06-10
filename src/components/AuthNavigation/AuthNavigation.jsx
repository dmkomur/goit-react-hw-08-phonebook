import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const AuthNavigation = () => {
  return (
    <ul style={{ display: 'flex', gap: '8px' }}>
      <li>
        <StyledAuthLink to="/register">Sign up</StyledAuthLink>
      </li>
      <li>
        <StyledAuthLink to="/login">Login</StyledAuthLink>
      </li>
    </ul>
  );
};
export const StyledAuthLink = styled(Link)`
  background-color: #fff;
  padding: 4px;
  border-radius: 4px;
  display: block;
  color: #7b1fa2;
  transition: background-color 250ms linear, color 250ms linear;
  &:hover {
    background-color: #e1bee7;
    color: #fff;
  }
`;
