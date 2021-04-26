module.exports = {
  pathPrefix: "",
  siteMetadata: {
    siteTitle: `Devildev`,
    siteTitleAlt: `Minimal Blog by @devildev98`,
    siteHeadline: `Minimal Blog by @devildev98`,
    siteUrl: `https://minimal-blog.lekoarts.de`,
    siteDescription: ``,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@devildev98`,
  },
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
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog-core`,
      options: {
        basePath: `/`,
        // url for the blog post overview page
        blogPath: `/blog`,
        // url for tag overview page
        tagsPath: `/tags`,
        // Location of posts
        postsPath: `content/posts`,
        // Prefix for all individual blog posts
        postsPrefix: `/`,
        mdx: true,
        // Configure the date format for Date fields
        formatString: `DD.MM.YYYY`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    // `gatsby-plugin-image`,
    // `gatsby-plugin-sharp`,
    // `gatsby-transformer-sharp`, // Needed for dynamic images
  ],
}
