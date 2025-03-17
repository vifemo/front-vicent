import Button from "./Button"
import "../../styles/postform.css";
import { useState } from "react";
import { Post } from "../types/types";

interface PostFormProps {
  initialPost?: Post;
  onSubmit: (post: Post) => void;
}

function PostForm({ initialPost, onSubmit }: PostFormProps){

  const [post, setPost] = useState<Post>({
    id: initialPost?.id || 0,
    title: initialPost?.title || "",
    content: initialPost?.content || ""
  });


  const handleSubmit = (e : React.FormEvent) => {
    e.preventDefault();
    console.log(post)
    onSubmit(post);
  }

  const handleTitle = (e: React.FormEvent) => {
    setPost({...post, title: e.target.value})
  }

  const handleContent = (e: React.FormEvent) => {
    setPost({...post, content: e.target.value})
  }


  return (
    <div className="post-container">
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" value={post.title} placeholder="Set Title" onChange={handleTitle} />
      <label htmlFor="content">Content</label>
      <textarea  id="content" value={post.content} placeholder="Set Content" onChange={handleContent}></textarea>
      <Button text="Create" onClick={() => handleSubmit}  />
    </form>
    </div>
  );
};

export default PostForm;
