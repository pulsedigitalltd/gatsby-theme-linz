import React from "react";
import { Link } from "gatsby";
import * as theme from "../styles/theme.css"
import "./post-list.scss";

const PostList = ({ posts }) => {
    return (
        <>
            <section data-testid={"Posts Page"} className={"PostsPage"}>

                {posts.map(({ node }) => (
                    <article class="postCard PostsShadow">
                        <Link to={node.slug}>
                            <div><img class="blogImage" src={node.feature_image} /></div>
                            <h4>{node.title}</h4>
                        </Link>
                        <div class="PostsBody">{node.custom_excerpt}</div>
                        <div class="postTags">
                        {node.tags.map(({ tags }, index) => {
                            return <small class="postTag">{node.tags[index].name} </small>
                        })} 
                        </div> 
                        <hr/> 
                        <div class="PostsAuthor">
                            <img class="profileImage" src={node.primary_author.profile_image} /> 
                            <div class="PostsAuthorName">By <strong>{node.primary_author.name}</strong>
                            <div class="PostsAuthorPublished"><small>On {node.created_at}</small></div></div>
                        </div>                        
                    </article>
                ))}                     
            </section>
        </>
    )
};

export default PostList;