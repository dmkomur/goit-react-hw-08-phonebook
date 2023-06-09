import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background-color: #e1bee7;
  align-items: center;
  padding: 8px 16px;
  border-radius: 4px;
`;
export const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};
