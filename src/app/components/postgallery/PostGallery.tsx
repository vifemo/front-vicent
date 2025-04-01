import { useState } from 'react'
import './postgallery.css'
import PostCard from './../postcard/PostCard'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import Pagination from './../pagination/Pagination'
import { Post } from '../../types/types'

interface PostGalleryProps {
  numberOfItems?: number
}

function PostGallery({ numberOfItems = 12 }: PostGalleryProps) {
  const { posts } = useSelector((state: RootState) => state.posts_reducer)

  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = numberOfItems

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(posts.length / postsPerPage)

  console.log('asdasd', posts)

  const printPosts = currentPosts.map((post: Post) => (
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
