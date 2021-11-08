module.exports = ({ contentPath = 'data', basePath = '/' }) => ({
  siteMetadata: {
    title: 'LINZ Engineering Blog',
    headline: '',
    basePath
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp', // Needed for dynamic images
    {
      resolve: 'gatsby-source-ghost',
      options: {
        apiUrl: 'https://gatsby.ghost.io',
        contentApiKey: '9cc5c67c358edfdd81455149d0'
      },
    },
    
  ]
});
  