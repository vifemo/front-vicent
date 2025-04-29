import { Post } from '../../types/types'
import { Link, useNavigate } from 'react-router-dom'
import './postcard.css'
import Button from '../button/Button'
import { useDispatch } from 'react-redux'
import { deletePost } from '../../store/slices/slice'
import { useTranslation } from 'react-i18next'
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'

interface PostCardProps {
  post: Post
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const user = JSON.parse(sessionStorage.getItem('user')!)
  const canEdit = user && user.id === post.userId

  const handleDelete = (id: number) => {
    const user = JSON.parse(sessionStorage.getItem('user')!)
    if (!user) {
      return Swal.fire(t('APP.LOGIN.MESSAGE')), navigate('/login')
    }
    dispatch(deletePost(id))
    Swal.fire(t('APP.FORM.DELETE.ALERT'))
  }

  const goToEdit = (id: number) => {
    return navigate(`/edit/${id}`)
  }
  return (
    <div className="postcard no-theme">
      <h2>
        <Link to={`/posts/${post.id}`} className="postcard__link">
          {post.title}
        </Link>
      </h2>
      <h4>{post.body}</h4>
      {canEdit === true && (
        <div className="postcard__button-container">
          <Button
            text={t('APP.BUTTON.DELETE')}
            onClick={() => handleDelete(post.id)}
          />
          <Button
            text={t('APP.BUTTON.EDIT')}
            onClick={() => goToEdit(post.id)}
          />
        </div>
      )}
    </div>
  )
}

export default PostCard
