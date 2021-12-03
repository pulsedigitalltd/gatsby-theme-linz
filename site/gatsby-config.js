module.exports = {
    plugins: [
      {
        resolve: 'gatsby-theme-linz',
        options: {
          contentPath: 'data',
          basePath: ''
        }
      }
    ]
};


require("dotenv").config({
  path: '.env.${process.env.NODE_ENV}',
});