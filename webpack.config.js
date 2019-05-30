module.exports = {
  mode: 'development',
  resolve: {
    /*
     * This is necessary only if using our packages to mount the pagelets (instead of
     * creating your own implementation of the remote pagelet) as we need to tell webpack
     * what extensions to resolve to.  `.cssm` is being used by the Union components for
     * the CSS modules, but the JS modules are not specifying the extension.
     */
    extensions: ['.js', '.cssm'],
  }
}
