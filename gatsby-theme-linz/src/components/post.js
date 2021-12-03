import React from "react";
import { Link } from "gatsby";
import * as theme from "../styles/theme.css"
import "./post.scss";

/*
HTML formatted blog post body string needs to be sanitised and rendered correctly for safety, have just dumped to the page for now. 
*/

const Post = ({ title, created_at, feature_image, html, published_at }) => (
    <article class="PostShadow">
        <h2>{title}</h2>
        <img  src={feature_image} />
        <p>
          {published_at}
        </p>
        <section class="PostsBody" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
  );

export default Post;