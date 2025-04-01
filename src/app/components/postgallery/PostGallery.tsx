import { useState, useEffect } from 'react'
import './postgallery.css'
import PostCard from './../postcard/PostCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllPosts } from '../../store/slices/slice'
import { RootState } from '../../store/store'
import Pagination from './../pagination/Pagination'
import { getPosts } from '../../services/postService'

interface PostGalleryProps {
  numberOfItems?: number
}

function PostGallery({ numberOfItems = 12 }: PostGalleryProps) {
  const dispatch = useDispatch()
  const posts = useSelector((state: RootState) => state.posts)
  const postss = useSelector((state: RootState) => state)
  console.log('3', postss)

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getPosts()
      console.log('1', postsData)
      dispatch(fetchAllPosts(postsData))
    }
    console.log('HOLA')
    fetchPosts()
  }, [dispatch])

  useEffect(() => {
    console.log('INI')
  })

  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = numberOfItems
  console.log('2', posts)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(posts.length / postsPerPage)

  const printPosts = currentPosts.map((post) => (
    <div key={post.id}>
      <PostCard
        post={{
          id: post.id,
          title: post.title,
          body: post.body,
        }}
      />
    </div>
  ))

  // Si printPost está vacío, mostramos Loading
  return (
    <div>
      {printPosts.length ? (
        <>
          <section className="postgallery">{printPosts}</section>
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
