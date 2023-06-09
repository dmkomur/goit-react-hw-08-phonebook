import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logoutThunk } from 'Redux/auth/authOperations';
import { authSelector } from 'Redux/auth/authSelectors';
import { RxExit } from 'react-icons/rx';
import styled from 'styled-components';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelector);
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <p>{`${userName}`}</p>
      <StyledButton
        onClick={() => dispatch(logoutThunk())}
        style={{ display: 'flex', gap: '8px' }}
      >
        logout <RxExit />
      </StyledButton>
    </div>
  );
};
const StyledButton = styled.button`
  font-weight: 500;
  border: none;
  background-color: #fff;
  padding: 4px;
  border-radius: 4px;
  display: block;
  display: flex;
  gap: 4px;
  padding: 8px;
  color: #7b1fa2;
  transition: background-color 250ms linear, color 250ms linear;
  &:hover {
    background-color: #e1bee7;
    color: #fff;
  }
`;
