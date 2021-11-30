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
        "apiUrl": "https://gatsby.ghost.io",
        "contentApiKey": "9cc5c67c358edfdd81455149d0"
      },
    },
  ],
});
