const fs = require('fs');



  exports.createPages = async ({ actions, graphql, reporter }, options) => {
    const basePath = options.basePath || '/';
    actions.createPage({
      path: basePath,
      component: require.resolve('./src/templates/posts.js')
    });
  
    const result = await graphql(`
      {
        allGhostPost(sort: { order: ASC, fields: published_at }) {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `)
    
    if (result.errors) {
      reporter.panic('error loading posts', result.errors);
      return;
    }
    
    const posts = result.data.allGhostPost.edges;

    // Create post pages
    posts.forEach(({ node })  => {
      // This part here defines, that our posts will use
      actions.createPage({
        path: node.slug,
        component: require.resolve('./src/templates/post.js'),
        context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            postID: node.id
        },
      })
    })    
  };
