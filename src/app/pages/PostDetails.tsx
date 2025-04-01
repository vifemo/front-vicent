import Header from '../components/header/Header'
import '../../styles/pages/postdetails.css'
import { Post } from '../types/types'
import useFetchPost from '../hooks/useFetchPost'
import Subheader from '../components/subheader/Subheader'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deletePost } from '../actions/postActions'
import Button from '../components/button/Button'

function PostDetails() {
  const post = useFetchPost()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleDelete = (id: number) => {
    dispatch(deletePost(id))
    alert('Post deleted')
    return navigate(`/posts`)
  }

  const goToEdit = (id: number) => {
    return navigate(`/edit/${id}`)
  }

  const printDetails = (post: Post | null) => {
    return post ? (
      <section className="post-details">
        <h1 className="post-details__title">{post.title}</h1>
        <p className="post-details__body">{post.body}</p>
        <div className="postdetails__button-container">
          <Button text="Delete" onClick={() => handleDelete(post.id)} />
          <Button text="Edit" onClick={() => goToEdit(post.id)} />
        </div>
      </section>
    ) : (
      <h2>Loading...</h2>
    )
  }

  return (
    <>
      <Header />
      <Subheader />
      <div className="post-details-container">
        <div>{printDetails(post)}</div>
      </div>
    </>
  )
}

export default PostDetails
