module.exports = ({ contentPath = 'data', basePath = '/' }) => ({
  siteMetadata: {
    title: 'LINZ Engineering Blog',
    headline: '',
    basePath
  },
  plugins: [
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: `https://gatsby.ghost.io`,
        contentApiKey: `9cc5c67c358edfdd81455149d0`,
      },
    }
  ]
});
  