import { useSelector } from 'react-redux';
import { tokenSelector } from 'Redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PublicRoute = ({ children, restricted }) => {
  const isLogedIn = useSelector(tokenSelector);
  const shouldRedirect = restricted && isLogedIn;
  return !shouldRedirect ? children : <Navigate to="/contacts" />;
};

PublicRoute.propTypes = {
  children: PropTypes.node,
  restricted: PropTypes.bool,
};
