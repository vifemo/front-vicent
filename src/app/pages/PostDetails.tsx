import Header from '../components/header/Header'
import '../../styles/postdetails.css'
import { Post } from '../types/types'
import useFetchPost from '../hooks/useFetchPost'
import Subheader from '../components/subheader/Subheader'

function PostDetails() {
  const post = useFetchPost()

  const printDetails = (post: Post | null) => {
    return post ? (
      <section className="post-details">
        <h1 className="post-title">{post.title}</h1>
        <p className="post-body">{post.body}</p>
      </section>
    ) : (
      <h2>Loading...</h2>
    )
  }

  return (
    <>
      <Header />
      <Subheader />
      <div>{printDetails(post)}</div>
    </>
  )
}

export default PostDetails
