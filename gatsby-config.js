module.exports = {
  siteMetadata: {
    title: `Sommelier: The New CoProcessor for Ethereum`,
    description: `Sommelier is a bet that Ethereum will be a dominant player in the global economy.`,
    author: `@sommfinance`,
    baseUrl: ``, // used to create absolute URLs for
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`
    },
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: 'CxAlDYFKsGS79I2blgQSAgtt',
        homeSlug: 'home',
        version: 'published',
        mixpanel: 'd45380c80aa29b6a63f1eb4820717a6d'
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/etherium.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
