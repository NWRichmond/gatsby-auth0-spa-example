import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Navigation } from '../components/nav-bar';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <Navigation />
    <p>
      Check out the private routes (My Account, Settings, and Billing - shown in{' '}
      <span style={{ color: `green` }}>green</span>) to test the{' '}
      <code>auth0-spa-js</code> SDK with Gatsby!
    </p>
  </Layout>
);

export default IndexPage;
