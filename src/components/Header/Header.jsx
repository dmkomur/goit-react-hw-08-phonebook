import styled from 'styled-components';
import PropTypes from 'prop-types';

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

StyledHeader.propTypes = {
  children: PropTypes.node,
};
