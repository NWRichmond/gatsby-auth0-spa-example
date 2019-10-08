import React from 'react';
import PropTypes from 'prop-types';
import { Router } from '@reach/router';
import Layout from '../components/layout';
import { useAuth0 } from '../components/auth/auth0-wrapper';
import { ProtectedRoute } from '../components/auth/protected-route';
import { Navigation } from '../components/nav-bar';
import { Button } from '../components/button';

const MyAccount = () => <h2>Main Account Page</h2>;

const Settings = () => (
  <>
    <h2>Account Settings</h2>
    <p>
      Why not add in some options for logged-in users to adjust their settings?
    </p>
  </>
);

const Billing = () => (
  <>
    <h2>Account Billing</h2>
    <p>It's always nice when your users can pay you for all your hard work.</p>
  </>
);

const Profile = ({ children }) => {
  // This component waits for Auth0 to finish loading
  // before rendering sensitive content
  const { loading, user } = useAuth0();
  return loading || !user ? <p>Loading...</p> : <>{children}</>;
};

Profile.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const Account = () => {
  const { logout, isAuthenticated, user } = useAuth0();
  return (
    <Layout>
      <ProtectedRoute>
        <h1>Account</h1>
        <Navigation />
        <Profile>
          <Button
            type="button"
            onClick={() =>
              logout({
                returnTo:
                  process.env.AUTH0_LOGOUT_URL ||
                  process.env.GATSBY_AUTH0_LOGOUT_URL,
              })
            }
          >
            Logout
          </Button>
          <Router>
            <MyAccount path="/account/" />
            <Settings path="/account/settings" />
            <Billing path="/account/billing" />
          </Router>
          <p>Check out the user data supplied by Auth0, below:</p>
          <pre>{isAuthenticated && JSON.stringify(user, null, 2)}</pre>
        </Profile>
      </ProtectedRoute>
    </Layout>
  );
};

export default Account;
