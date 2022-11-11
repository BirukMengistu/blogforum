import React  from 'react'
import { useSelector} from 'react-redux'

import  { selectAllPosts, getPostsStatus , getPostsError } from "./postsSlice";
import PostCard from './PostCard'
export const PostView = () => {
   
    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);



  /*  const uniquePost = [...new Map(posts.map((post, id) => [item[id], item])).values()]
   console.log(uniquePost) */
    let content;
   
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>; 
    } else if (postStatus === 'succeeded') {
      const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
       /*  const filterUniquePost =  [...new Map(orderedPosts.map((post, id) => [post[post.id],post])).values()] */
       
        content = orderedPosts.map( (post,index) => 
                    <PostCard key = {index} post={post} />
                    )
               
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }
    
  return (
    <section>
        <h2>Posts</h2>
        {content}
    </section>
  )
}

export default PostView