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
   data: ["item1", "item2"],
   plugins: [`gatsby-plugin-styled-components`,
   `gatsby-plugin-react-helmet`],
 }