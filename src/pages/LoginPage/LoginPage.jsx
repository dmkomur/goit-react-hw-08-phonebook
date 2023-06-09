import { useDispatch } from 'react-redux';
import { loginThunk } from 'Redux/auth/authOperations';
import styled from 'styled-components';
import { StyledBtnDel } from 'components/ContactList/ContactList.Styled';
export const LoginPage = () => {
  const dispatch = useDispatch();
  const handleForm = e => {
    e.preventDefault();
    const user = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    dispatch(loginThunk(user));
  };
  return (
    <StyledAuthForm onSubmit={handleForm}>
      <label>
        email
        <input type="email" name="email" />
      </label>
      <label>
        password
        <input type="text" name="password" />
      </label>
      <StyledBtnDel>Login</StyledBtnDel>
    </StyledAuthForm>
  );
};

export const StyledAuthForm = styled.form`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
  width: 320px;
  margin-top: 24px;
  border-radius: 4px;
  border: solid 2px #e1bee7;
`;
