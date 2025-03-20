import { useState } from "react";
import Header from "../components/header/Header";
import PostForm from "../components/PostForm";
import { Post } from "../types/types";
import { createPost } from "../services/postService";



function CreatePage() {
  const [newPost, setNewPost] = useState<Post | null>(null);
  //const [error, setError] = useState<string | null>(null);

  const handleCreateSubmit = (post: Post) => {
    setNewPost(post);
    //para llamar a la función de crear el post en el servicio
   // createPost(post);
  };

  /**

   const handleCreateSubmit = async (post: Post) => {
    try {
      const createdPost = await createPost(post);
      setNewPost(createdPost);
      setError(null); // Limpiar el error si la creación es exitosa
    } catch (error) {
      setError('Error creating post. Please try again.');
    }
  };

  insertamos esto debajo de <PostForm onsubmit=....
  {error && <p style={{ color: 'red' }}>{error}</p>}
*/

  

  return (
    <div>
       <Header />
      <h1>Create a new Post</h1>
      <PostForm 
        onSubmit={handleCreateSubmit}
        buttonText="Create"  
        />
      
      {newPost && (
        <div>
          <h2>{newPost.id}</h2>
          <h2>{newPost.title}</h2>
          <h2>{newPost.content}</h2>
        </div>
      )

      }
    </div>
  )
}

export default CreatePage

