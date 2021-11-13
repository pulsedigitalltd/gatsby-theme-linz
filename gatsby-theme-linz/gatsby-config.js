module.exports = ({ contentPath = 'data', basePath = '' }) => ({
  siteMetadata: {
    title: 'LINZ Engineering Blog',
    headline: '',
    basePath: ''
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp', // Needed for dynamic images
    {
      resolve: 'gatsby-source-ghost',
      options: {
        apiUrl: 'http://localhost:3001',
        contentApiKey: '1e515c847528ba1b8861f334c3'
      },
    },
    
  ]
});
  