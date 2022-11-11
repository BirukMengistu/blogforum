import PostAuthor from "./postAuthor";
 import TimeAgo from "./TimeAgo";  
 import ReactionButtons from "./ReactionButtons";
 import React from 'react'
 
 const PostCard = ({post}) => {

   return (
    <article >
                <h3>{post.title}</h3>
                <p>{post.body.substring(0, 100)}</p>
                <p className="postCredit">
                        <PostAuthor userId={post.userId} />
                        <TimeAgo timestamp={post.date} /> 
                </p>
                <ReactionButtons key={post.id} post = {post} />
   </article>
   )
 }
 
 export default PostCard