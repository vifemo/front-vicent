import { useState } from "react";
import Header from "../components/header/Header";
import PostForm from "../components/PostForm";
import { Post } from "../types/types";


function CreatePage() {
  const [newPost, setNewPost] = useState<Post | null>(null);

  const handleCreateSubmit = (post) => {
    setNewPost(post);
  };

  return (
    <div>
       <Header />
      <h1>Create a new Post</h1>
      <PostForm onSubmit={handleCreateSubmit} />
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

