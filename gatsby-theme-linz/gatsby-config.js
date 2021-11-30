module.exports = ({ contentPath = "data", basePath = "" }) => ({
  siteMetadata: {
    title: "Toitū Te Whenua Engineering Blog",
    headline: "",
    basePath: "",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-ghost",
      options: {
        apiUrl: "http://localhost:2368",
        contentApiKey: "ed06699835a1e224f5e54c41ab",
      },
    },
  ],
});
