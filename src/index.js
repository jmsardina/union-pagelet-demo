/*
 * This is the preferred way to integrate with the header and footer pagelets
 * (as opposed to the creating your own remote pagelet) due to the simplicity
 * and because this component already has the necessary error handling, so you
 * don't need to create your own version of the error pagelet.
 *
 * Also -- due to the dependency on React and ReactDOM, you will need to install
 * these libraries, so you might as well use it to render the component.
 */
require('./reactHeaderPagelet.js');

/*
 * This approach is a lot more involved because the RemotePagelet because your're
 * essentially recreating the header pagelet experience that's already handled by
 * the existing React abstraction
 */
require('./remotePagelet.js');
