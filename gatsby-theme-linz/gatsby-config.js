module.exports = ({ contentPath = "data", basePath = "" }) => ({
  siteMetadata: {
    title: "LINZ Engineering Blog",
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
        contentApiKey: "7d76f0275cc26ac3df1d84e97a",
      },
    },
  ],
});
