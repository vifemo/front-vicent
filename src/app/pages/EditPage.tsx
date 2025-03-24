import PostForm from "../components/PostForm";
import { useState } from "react";
import { Post } from "../types/types";
import Header from "../components/header/Header";
import useFetchPost from "../hooks/useFetchPost";
import { updatePost } from "../services/postService";
import Subheader from "../components/subheader/Subheader";

function EditPage() {
   const post = useFetchPost();
   const [error, setError] = useState<string | null>(null);
 
    const handleUpdateSubmit = async (post : Post) => {
     try {
           const updatedPost = await updatePost(post.id, post);
           console.log("Updated post:", updatedPost);
           setError(null);
         } catch (error) {
           setError('Error creating post. Please try again.');
         }
       };


    return (
        <>
        <Header />
        <Subheader/>
        <PostForm
        initialPost={post} 
        onSubmit={handleUpdateSubmit} 
        buttonText="Edit"
      />
       {error && <p style={{ color: 'red' }}>{error}</p>}
       </>
    )
}

export default EditPage
