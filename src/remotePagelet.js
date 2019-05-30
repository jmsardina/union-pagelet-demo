/*
 * React & ReactDOM are normally not dependencies of the pagelets. However, the TK
 * header and footer packages currently have a dependency on these libraries.
 * As an optimization, these packages do not come with their own version of React
 * and ReactDOM, so it is the responsibility of the consumer to install these
 * libraries as peer dependencies.
 */
const React = require('react').default;
const ReactDOM = require('react-dom').default;

const { RemotePagelet, PageletContainer } = require('@xo-union/pagelet');

const Pagelet = require('./pagelet.js').default;

/*
 * This would not be necessary if you were to use our Header and Footer packages
 * as React and ReactDOM have already been "defined" for you within the AMD ecosystem,
 * using your versions of React and ReactDOM.
 */
if (typeof UNION_INTERNAL_MODULE_SYSTEM !== 'undefined') {
  UNION_INTERNAL_MODULE_SYSTEM.define('react', () => React);
  UNION_INTERNAL_MODULE_SYSTEM.define('react-dom', () => ReactDOM);
}

/*
 * This class is used to create a remove pagelet and will be displayed upon successful
 * resolution of the assets.  accepts an object with links to the remote assets
 * (js, css, html (for server-side rendering)).
 * If an error occurs when requesting the JS, then we will display the "error pagelet".
 * If the request for styles fails, then we would still render the remote pagelet, but
 * it will be unstyled.
 */
const successHeader = new RemotePagelet({
  // Links to resources.
  // Currently only supports a single js and css link
  links: {
    js: 'https://docs.union.theknot.com/assets/tk-pagelet-header-nav/latest/main.js',
    css: 'https://docs.union.theknot.com/assets/tk-pagelet-header-nav/latest/styles.css'
    // js: 'https://deploy-preview-1539--union.netlify.com/assets/tk-pagelet-footer-nav/latest/main.js',
    // css: 'https://deploy-preview-1539--union.netlify.com/assets/tk-pagelet-footer-nav/latest/styles.css'
  }
});

/*
 * The error pagelet will be displayed upon a non-successful response when requesting the
 * remote JS.
 */
const errorEl = document.createElement('h1');
errorEl.innerHTML = 'Error loading pagelet.';
errorEl.style = 'color: red;';

const errorPagelet = new Pagelet(errorEl);

/*
 * The first argument of PageletContainer is a pagelet-container-id.  If you take a look
 * at the HTML file, then you will see an element with `data-pagelet-container-id`
 * corresponding to the pagelet container id that's being provided here.  This is where
 * the pagelet will be mounted.
 */
const myContainer = new PageletContainer('remote-union-header', {
  /*
   * Points to the error pagelet created above. This will be rendered if the pagelet
   * is unable to load.
   */
  errorPagelet: errorPagelet,
  /*
   * These are the props that will be passed into your pagelet component. In this case,
   * we're passing a prop of `loggIn: true` to the header component
   */
  props: {
    loggedIn: true,
  }
});

myContainer.mount(successHeader);
