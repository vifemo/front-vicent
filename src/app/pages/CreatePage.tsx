import { useState } from 'react'
import Header from '../components/header/Header'
import PostForm from '../components/postform/PostForm'
import { Post } from '../types/types'
import { createPost } from '../services/postService'
import Subheader from '../components/subheader/Subheader'
import { useDispatch } from 'react-redux'
import { addPost } from '../actions/postActions'

function CreatePage() {
  const [newPost, setNewPost] = useState<Post | null>(null)
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
      <h1>Create a new Post</h1>
      <PostForm onSubmit={handleCreateSubmit} buttonText="Create" />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {newPost && (
        <div>
          <h2>{newPost.id}</h2>
          <h2>{newPost.title}</h2>
          <h2>{newPost.body}</h2>
        </div>
      )}
    </div>
  )
}

export default CreatePage
