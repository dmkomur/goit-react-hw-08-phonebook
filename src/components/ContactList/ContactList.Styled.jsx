import styled from 'styled-components';

export const StyledContact = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 4px;
  padding: 4px 16px;
  transition: background-color 250ms ease-out;

  &:hover {
    background-color: #f4f5eb;
  }
`;
export const StyledBtnDel = styled.button`
  border: none;
  border-radius: 4px;
  background-color: #e1bee7;
  padding: 4px 8px;
  color: white;
  transition: background-color 250ms ease-in;

  &:hover {
    background-color: #9c27b0;
  }
`;
export const StyledContactList = styled.ul`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  margin: 0 auto;
  gap: 8px;
`;
