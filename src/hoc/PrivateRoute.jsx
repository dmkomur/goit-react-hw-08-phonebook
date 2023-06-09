import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginSelector, tokenSelector } from 'Redux/auth/authSelectors';

export const PrivateRoute = ({ children }) => {
  const isLogin = useSelector(loginSelector);
  const isToken = useSelector(tokenSelector);
  if (isToken && !isLogin) {
    return <p>Loading...</p>;
  }
  return isLogin && isToken ? children : <Navigate to="/login" />;
};
