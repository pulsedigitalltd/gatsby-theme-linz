import React from "react";
import { Link } from "gatsby";
import * as theme from "../styles/theme.css"

const PostList = ({ posts }) => {
    return (
        <>
            <div class="g-flex-container">
                <div class="g-flex-row">
                    {posts.map(({ node }) => (
                        <div key={node.id} class="g-flex-col g-flex-col-xs-4 g-flex-col-sm-4 g-flex-col-md-4 g-flex-col-lg-4">
                            <article class="postCard">
                                <Link to={node.slug}>
                                    <img class="postCardImage" src={node.feature_image} width="100%" height="200"/>
                                    {node.title}
                                </Link>
                                <p>Published: {node.created_at}</p>
                                <p>Reading time: {node.reading_time} minute(s)</p>
                                <p>Author: <strong>{node.primary_author.name} </strong></p>
                                
                            </article>
                        </div>  
                    ))}                     
                </div>
            </div>
        </>
    )
};

export default PostList;