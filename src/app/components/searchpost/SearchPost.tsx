import { useState, useEffect } from 'react'
import { Post } from '../../types/types'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { fetchAllPosts } from '../../actions/postActions'

function SearchPost() {
  const [query, setQuery] = useState('')
  const [filtered, setFiltered] = useState<Post[]>([])
  const posts = useSelector((state: RootState) => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPosts = fetchAllPosts(posts)
    dispatch(fetchPosts)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    if (value.trim() === '') {
      setFiltered([])
    } else {
      const filt = posts.filter((post: Post) =>
        post.title.toLowerCase().includes(value.toLowerCase())
      )
      setFiltered(filt)
    }
  }

  return (
    <div className="search-container">
      <input
        type="search"
        placeholder="Search post by title"
        value={query}
        onChange={handleChange}
      />
      {filtered.length > 0 && (
        <ul>
          {filtered.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchPost
