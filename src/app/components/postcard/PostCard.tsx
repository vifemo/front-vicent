import { Post } from '../../types/types'
import { Link, useNavigate } from 'react-router-dom'
import './postcard.css'
import Button from '../button/Button'
import { useDispatch } from 'react-redux'
import { deletePost } from '../../store/slices/slice'
import { useTranslation } from 'react-i18next'

interface PostCardProps {
  post: Post
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleDelete = (id: number) => {
    dispatch(deletePost(id))
    alert('Post deleted')
  }

  const goToEdit = (id: number) => {
    return navigate(`/edit/${id}`)
  }
  return (
    <div className="postcard">
      <h2>
        <Link to={`/posts/${post.id}`} className="postcard__link">
          {post.title}
        </Link>
      </h2>
      <h4>{post.body}</h4>
      <div className="postcard__button-container">
        <Button
          text={t('APP.BUTTON.DELETE')}
          onClick={() => handleDelete(post.id)}
        />
        <Button text={t('APP.BUTTON.EDIT')} onClick={() => goToEdit(post.id)} />
      </div>
    </div>
  )
}

export default PostCard
