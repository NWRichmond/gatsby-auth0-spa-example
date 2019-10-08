import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useAuth0 } from './auth0-wrapper';

const ProtectedRoute = ({ children }) => {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();
  useEffect(() => {
    if (loading || isAuthenticated) {
      return undefined;
    }
    const asyncLogin = async () => {
      await loginWithRedirect({
        appState: { targetUrl: window.location.pathname },
      });
    };
    asyncLogin();
  }, [loading, isAuthenticated, loginWithRedirect]);
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { ProtectedRoute };
