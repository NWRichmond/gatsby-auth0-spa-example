/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Auth0Provider } from './src/components/auth/auth0-wrapper';

const onRedirectCallback = appState => {
  // route the user to the right place after login
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

export const wrapRootElement = ({ element }) => (
  <Auth0Provider
    domain={process.env.AUTH0_DOMAIN}
    client_id={process.env.AUTH0_CLIENT_ID}
    redirect_uri={process.env.AUTH0_CALLBACK_URL}
    onRedirectCallback={onRedirectCallback}
  >
    {element}
  </Auth0Provider>
);

wrapRootElement.propTypes = {
  element: PropTypes.element.isRequired,
};
