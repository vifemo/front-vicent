import PostForm from '../components/postform/PostForm'
import { useState } from 'react'
import { Post } from '../types/types'
import Header from '../components/header/Header'
import useFetchPost from '../hooks/useFetchPost'
import Subheader from '../components/subheader/Subheader'
import { editPost } from '../actions/postActions'
import { useDispatch } from 'react-redux'

function EditPage() {
  const dispatch = useDispatch()
  const post = useFetchPost()
  const [error, setError] = useState<string | null>(null)

  const handleUpdateSubmit = (post: Post) => {
    try {
      dispatch(editPost(post.id, post))
      setError(null)
    } catch (error) {
      setError('Error creating post. Please try again.')
    }
  }

  return (
    <>
      <Header />
      <Subheader />
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
