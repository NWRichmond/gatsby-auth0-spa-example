import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Navigation } from '../components/nav-bar';

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <Navigation />
    <p>
      The{' '}
      <a href="https://auth0.com/docs/libraries/auth0-spa-js">
        Auth0 Single Page App SDK
      </a>{' '}
      is a new way to implement authentication into a single page application
      (SPA) using the Auth0 platform. Auth0 provides a{' '}
      <a href="https://auth0.com/docs/quickstart/spa/react/">
        Quick Start guide
      </a>{' '}
      for using the new SDK with React, but the guide uses the create-react-app
      (CRA) platform in the guide.
    </p>
    <p>
      If you're a Gatsby user, you might be wondering how the example CRA code
      translates to your Gatsby project. I was too! Hopefully this example site
      and its{' '}
      <a href="https://github.com/NWRichmond/gatsby-auth0-spa-example">
        GitHub repository
      </a>{' '}
      clears things up.
    </p>
    <p>
      I'd like to turn this topic into a blog post which explores how to
      implement the new Auth0 SDK in Gatsby, and why you might want to do so in
      the first place.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
