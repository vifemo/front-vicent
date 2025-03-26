import { Post } from '../../types/types'
import { Link } from 'react-router-dom'
import './postcard.css'

interface PostCardProps {
  post: Post
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div key={post.id}>
      <h2>
        <Link to={`/posts/${post.id}`} className="post-link">
          {post.title}
        </Link>
      </h2>
      <h4>{post.body}</h4>
    </div>
  )
}

export default PostCard
