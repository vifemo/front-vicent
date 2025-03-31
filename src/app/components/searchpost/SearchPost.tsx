import { useState, useEffect } from 'react'
import { Post } from '../../types/types'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { fetchAllPosts } from '../../actions/postActions'
import './searchpost.css'

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
        className="search-container__input"
      />
      {filtered.length > 0 && (
        <ul className="search-container__list">
          {filtered.map((post) => (
            <li key={post.id} className="search-container__item">
              <Link to={`/posts/${post.id}`} className="search-container__link">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchPost
