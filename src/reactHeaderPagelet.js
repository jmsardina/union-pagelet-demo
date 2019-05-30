const React = require('react');
const ReactDOM = require('react-dom');
const HeaderNav = require('@xo-union/tk-component-header-nav/lib/remote').default;

ReactDOM.render(
  React.createElement(
    HeaderNav, {
      loggedIn: true,
      // ... other HeaderNav props
    }
  ), document.getElementById('header-root')
);
