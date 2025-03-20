import { Post } from "../types/types"
import { Link } from "react-router-dom";
import "../../styles/postcard.css";

interface PostCardProps {
    post: Post;
}

const PostCard: React.FC<PostCardProps> = ({post}) => {
  return (
    <div key= {post.id} >
        <h2><Link to={`/posts/${post.id}`} className="post-link">Title: {post.title}</Link></h2>
        <h4>Content: {post.content}</h4>
        
    </div>
  )
}

export default PostCard


