import styled from 'styled-components';

export const StyledInput = styled.input`
  border: 2px solid #e1bee7;
  margin-left: 8px;
  border-radius: 4px;
  font-size: 16px;
`;

export const StyledBtn = styled.button`
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-family: inherit;
  font-weight: 500;
  background-color: #e1bee7;
  color: #ffffff;
  transition: background-color 250ms ease-in;
  &:hover {
    background-color: #9c27b0;
  }
`;
export const StyledForm = styled.form`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  width: 320px;
  gap: 16px;
  padding: 32px 24px;
  background-color: #ffffff;
  border-radius: 4px;
  border: solid 2px #e1bee7;
`;
