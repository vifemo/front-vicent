import { useEffect, useState } from "react";
import { Post } from "../types/types";
import "../../styles/postcard.css";
import { getPosts, deletePost } from "../services/postService";
import { Link } from "react-router-dom";
import Button from "./Button";

function PostCard() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const postsData = await getPosts();
            setPosts(postsData);
        };

        fetchPosts();
    }, []);

    
    const handleDelete = async (id: number) => {
        try {
            await deletePost(id);
            setPosts(posts.filter(post => post.id !== id));
        } catch (error) {
            console.error("Error at deleting:", error);
        }
    };


   const printPosts = posts.map((post) =>{
    return (
        <div key= {post.id} className="post-card">
            <h2><Link to={`/posts/${post.id}`}>Title: {post.title}</Link></h2>
            <h4>Content: {post.content}</h4>
           
            <Button text="Delete" onClick={()=>handleDelete(post.id)} />
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
