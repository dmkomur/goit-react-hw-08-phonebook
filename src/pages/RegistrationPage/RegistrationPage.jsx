import { useDispatch } from 'react-redux';
import { registerThunk } from 'Redux/auth/authOperations';
import { StyledAuthForm } from 'pages/LoginPage/LoginPage';
import { StyledBtnDel } from 'components/ContactList/ContactList.Styled';
export const RegistrationPage = () => {
  const dispatch = useDispatch();
  const handleForm = e => {
    e.preventDefault();
    const user = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    dispatch(registerThunk(user));
  };
  return (
    <StyledAuthForm onSubmit={handleForm}>
      <label>
        name
        <input type="text" name="name" />
      </label>
      <label>
        email
        <input type="email" name="email" />
      </label>
      <label>
        password
        <input type="text" name="password" />
      </label>
      <StyledBtnDel>Registrate</StyledBtnDel>
    </StyledAuthForm>
  );
};
