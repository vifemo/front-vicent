
import { useEffect, useState } from "react";
import { Post } from "../types/types";
import "../../styles/postcard.css";
import { getPosts } from "../services/postService";

function PostCard() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const postsData = await getPosts();
            setPosts(postsData);
        };

        fetchPosts();
    }, []);

   const printPosts = posts.map((post) =>{
    return (
        <div key= {post.id} className="post-card">
            <h2>Title: {post.title}</h2>
            <h4>Content: {post.content}</h4>
        </div>
    )
   })
//Si printPost está vacio, mostramos Loading
 return (
   <div>
    {printPosts.length ? <section className="post-container">{printPosts}</section> : <h2>Loading...</h2>}
   </div>
  )
}
export default PostCard
