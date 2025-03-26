import { useEffect } from 'react'
import { Post } from '../types/types'
import './../components/postcard/postcard.css'
import Button from './button/Button'
import PostCard from './postcard/PostCard'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, deletePost } from '../actions/postActions'
import { RootState } from '../store/store'

function PostGallery() {
  const dispatch = useDispatch()
  const posts = useSelector((state: RootState) => state.posts)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchPosts() as any)
  }, [dispatch])

  const handleDelete = (id: number) => {
    dispatch(deletePost(id) as any)
  }

  const goToEdit = (id: number) => {
    return navigate(`/edit/${id}`)
  }

  const printPosts = posts.map((post) => {
    return (
      <div key={post.id} className="post-card">
        <PostCard
          post={{
            id: post.id,
            title: post.title,
            body: post.body,
          }}
        />
        <div className="button-container">
          <Button text="Delete" onClick={() => handleDelete(post.id)} />
          <Button text="Edit" onClick={() => goToEdit(post.id)} />
        </div>
      </div>
    )
  })

  //Si printPost está vacio, mostramos Loading
  return (
    <div>
      {printPosts.length ? (
        <section className="post-container">{printPosts}</section>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  )
}
export default PostGallery
