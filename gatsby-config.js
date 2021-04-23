/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        // if false, this plugin will not use `<CSSReset />
        resetCSS: true,
        //if false, this plugin will not use <ColorModeProvider />
        isUsingColorMode: true,
      },
    },
  ],
}
