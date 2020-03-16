module.exports = {
  siteMetadata: {
    author: `Romain Campech`,
    title: `Romain Campech | Software Engineer`,
    description: `Romain Campech is a software engineer based in London, UK with extensive experience in cloud infrastructures and full-stack technologies.`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RomainCampech`,
        short_name: `RomainCampech`,
        start_url: `/`,
        background_color: `#020019`,
        theme_color: `#23CE6B`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Josefin Sans\:200,400,600`],
        display: "block",
      },
    },
    // `gatsby-plugin-offline`,
  ],
}
