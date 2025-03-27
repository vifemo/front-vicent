import { useState, useEffect } from 'react'
import './../components/postcard/postcard.css'
import Button from './button/Button'
import PostCard from './postcard/PostCard'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, fetchAllPosts } from '../actions/postActions'
import { RootState } from '../store/store'
import Pagination from './pagination/Pagination'
import { getPosts } from '../services/postService'
import { Post } from '../types/types'

function PostGallery() {
  const [allPosts, setAllPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getPosts()
      setAllPosts(postsData)
    }

    fetchPosts()
  }, [])

  const dispatch = useDispatch()
  const posts = useSelector((state: RootState) => state.posts)

  const navigate = useNavigate()

  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 10

  useEffect(() => {
    dispatch(fetchAllPosts())
  }, [dispatch])

  const handleDelete = (id: number) => {
    dispatch(deletePost(id))
  }

  const goToEdit = (id: number) => {
    return navigate(`/edit/${id}`)
  }

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(posts.length / postsPerPage)

  const printPosts = currentPosts.map((post) => {
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
        <>
          <section className="post-container">{printPosts}</section>
          <div className="pagination-container">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  )
}
export default PostGallery
