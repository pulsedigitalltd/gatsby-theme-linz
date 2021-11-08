import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Post from '../components/post';

export const query = graphql`
  query($postID: String!) {
    ghostPost(id: { eq: $postID }) {
      id
      title
      url
      html
      reading_time
      feature_image
      created_at(formatString: "MMMM D YYYY")
      updated_at(formatString: "MMMM D YYYY")
      slug
      published_at(formatString: "MMMM D YYYY")
      visibility
      primary_author {
        name
        bio
        profile_image
        postCount
        slug
      }
    }
  }
`;

const PostTemplate = ({ data: { ghostPost } }) => (
  <Layout>
    <Post {...ghostPost} />
  </Layout>
);

export default PostTemplate;
