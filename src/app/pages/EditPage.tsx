import PostForm from '../components/postform/PostForm'
import { useState } from 'react'
import { Post } from '../types/types'
import Header from '../components/header/Header'
import useFetchPost from '../hooks/useFetchPost'
import Subheader from '../components/subheader/Subheader'
import { editPost } from '../store/slices/slice'
import { useDispatch } from 'react-redux'
import '../../styles/pages/formpage.css'
import { useNavigate } from 'react-router-dom'

function EditPage() {
  const dispatch = useDispatch()
  const post = useFetchPost()
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleUpdateSubmit = (post: Post) => {
    try {
      dispatch(editPost({ id: post.id, updatedPost: post }))
      alert('Post updated')
      setError(null)
      return navigate(`/posts`)
    } catch (error) {
      setError('Error creating post. Please try again.')
    }
  }

  return (
    <>
      <Header />
      <Subheader />
      <div className="form-page">
        <h1>Edit post</h1>
        <PostForm
          initialPost={post}
          onSubmit={handleUpdateSubmit}
          buttonText="Edit"
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </>
  )
}

export default EditPage
