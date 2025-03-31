import { useState } from 'react'
import Header from '../components/header/Header'
import PostForm from '../components/postform/PostForm'
import { Post } from '../types/types'
import Subheader from '../components/subheader/Subheader'
import { useDispatch } from 'react-redux'
import { addPost } from '../actions/postActions'
import '../../styles/pages/formpage.css'

function CreatePage() {
  const [error, setError] = useState<string | null>(null)
  const dispatch = useDispatch()

  const handleCreateSubmit = (post: Post) => {
    try {
      dispatch(addPost(post))
      setError(null)
    } catch (error) {
      setError('Error creating post. Please try again.')
    }
  }

  //No me está renderizando newPost
  return (
    <div>
      <Header />
      <Subheader />
      <div className="form-page">
        <h1>Create a new Post</h1>
        <PostForm onSubmit={handleCreateSubmit} buttonText="Create" />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  )
}

export default CreatePage
