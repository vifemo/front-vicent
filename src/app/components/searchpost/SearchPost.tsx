import { useState } from 'react'
import { Post } from '../../types/types'
import { Link } from 'react-router-dom'

import './searchpost.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { useTranslation } from 'react-i18next'

function SearchPost() {
  const { t } = useTranslation()
  const [query, setQuery] = useState('')
  const [filtered, setFiltered] = useState<Post[]>([])
  const { posts } = useSelector((state: RootState) => state.posts_reducer)

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
        placeholder={t('APP.SEARCH.PLACEHOLDER')}
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
