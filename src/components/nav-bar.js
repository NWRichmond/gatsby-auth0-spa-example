import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavBar = styled.nav`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(9em, 1fr));
  justify-items: center;
  align-items: center;
  margin: 2em auto;
  padding: 1em 0;
  border-radius: 8px;
  background-color: #f0f3ff;
  a {
    text-decoration: none;
    color: black;
  }
  .private {
    color: green;
  }
`;

const Navigation = () => (
  <NavBar>
    <Link to="/" className="public">
      Home
    </Link>
    <Link to="/about" className="public">
      About
    </Link>
    <Link to="/account" className="private">
      My Account
    </Link>
    <Link to="/account/settings/" className="private">
      Settings
    </Link>
    <Link to="/account/billing/" className="private">
      Billing
    </Link>
  </NavBar>
);

export { Navigation };
