import Button from "./Button";
import "../../styles/postform.css";
import { useState, useEffect } from "react";
import { Post } from "../types/types";

interface PostFormProps {
  initialPost?: Post | null;
  onSubmit: (post: Post) => void;
  buttonText: string; 
}

//De momento creamos con id=0
function PostForm({ initialPost, onSubmit, buttonText }: PostFormProps) {
  const [post, setPost] = useState<Post>({
    id: initialPost?.id || 0,
    title: initialPost?.title || "",
    content: initialPost?.content || ""
  });

  useEffect(() => {
    if (initialPost) {
      setPost(initialPost);
    }
  }, [initialPost]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(post);
    onSubmit(post);
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, title: e.target.value });
  };

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost({ ...post, content: e.target.value });
  };

  return (
    <div className="post-container">
      <form className="form-container" >
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={post.title} placeholder="Set Title" onChange={handleTitle} />
        <label htmlFor="content">Content</label>
        <textarea id="content" value={post.content} placeholder="Set Content" onChange={handleContent}></textarea>
        <Button text={buttonText} onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default PostForm;