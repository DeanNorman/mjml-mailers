/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "22seven",
    description: "Manage your money",
    author: "@ilove22seven",
    data: ["item1", "item2"],
  },
  plugins: [
   {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-XXXXXXXXX-X",
      },
    },
    {
      resolve: 'gatsby-plugin-zendesk-chat',
      options: {
        zendeskKey: '2PHAosPEgH4M1GJs0dYKQzKz8ilTtAbL',
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
  ],
}
