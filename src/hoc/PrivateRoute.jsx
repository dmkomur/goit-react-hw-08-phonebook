import { useSelector } from 'react-redux';
import { tokenSelector } from 'Redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const isLogedIn = useSelector(tokenSelector);
  return isLogedIn ? children : <Navigate to="/login" />;
};
