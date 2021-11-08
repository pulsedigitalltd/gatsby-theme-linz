import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import PostList from '../components/post-list';

const PostsTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allGhostPost {
        edges {
          node {
            slug
            ghostId
            feature_image
            created_at(formatString: "MMMM DD YYYY")
            id
            meta_title
            meta_description
            title
            url
            updated_at(formatString: "MMMM DD YYYY")
            reading_time
            html
            plaintext
            published_at(formatString: "MMMM DD YYYY")
            primary_author {
              name
              bio
              slug
              profile_image
            }
          }
        }
      }
    }  
  `);

  const posts = data.allGhostPost.edges;

  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  );
};

export default PostsTemplate;