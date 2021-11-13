import React from "react";
import * as theme from "../styles/theme.css";

/*
HTML formatted blog post body string needs to be sanitised and rendered correctly for safety, have just dumped to the page for now. 
*/

const Post = ({ title, created_at, feature_image, html, published_at }) => (
  <div class="g-flex-container">
    <div class="g-flex-row">
      <div class="g-flex-col">
        <h3>{title}</h3>
        <p>
          <img src={feature_image} />
        </p>
        <p>
          {published_at}
        </p>
        <p>{html}</p>  
      </div>
    </div>
  </div>
  );

export default Post;