import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ title, children }) => (
  <div>
    <h1>{title}</h1>
    {children}
  </div>
);

Layout.propTypes = {
  title: PropTypes.string.isRequired
}

export default Layout;