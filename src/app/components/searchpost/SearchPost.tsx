import { useState, useEffect } from 'react'
import { getPosts } from '../../services/postService'
import { Post } from '../../types/types'
import { Link } from 'react-router-dom'

function SearchPost() {
  const [query, setQuery] = useState('')
  const [filtered, setFiltered] = useState<Post[]>([])
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts()
      setPosts(data)
    }
    fetchPosts()
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
