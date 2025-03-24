import { useEffect, useState } from "react";
import { Post } from "../types/types";
import "../../styles/postcard.css";
import { getPosts, deletePost } from "../services/postService";
import Button from "./Button";
import PostCard from "./PostCard";
import { useNavigate } from "react-router-dom";


function PostGallery() {
    const [posts, setPosts] = useState<Post[]>([]);
    const navigate = useNavigate();

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

    
    const goToEdit = (id: number) => {
       return navigate(`/edit/${id}`);
    } 
   

   const printPosts = posts.map((post) =>{
    return (
        <div key={post.id} className="post-card">
        <PostCard post={{
            id: post.id,
            title: post.title,
            body: post.body
        }} />
        <Button text="Delete" onClick={() => handleDelete(post.id)} />
        <Button text= "Edit" onClick={() => goToEdit(post.id)}/>
        </div>
    )
   })
   
   
//Si printPost está vacio, mostramos Loading
 return (
   <div>
    {printPosts.length ? 
    <section className="post-container">{printPosts}
    </section> : <h2>Loading...</h2>}
   </div>
  )
}
export default PostGallery
