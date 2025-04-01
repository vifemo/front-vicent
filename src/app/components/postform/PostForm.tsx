import Button from '../button/Button'
import './postform.css'
import { useState, useEffect } from 'react'
import { Post } from '../../types/types'
import { useFakeId } from '../../helper/idHelper'

interface PostFormProps {
  initialPost?: Post | null
  onSubmit: (post: Post) => void
  buttonText: string
}

function PostForm({ initialPost, onSubmit, buttonText }: PostFormProps) {
  const newPostId = useFakeId()
  const [post, setPost] = useState<Post>({
    id: initialPost?.id || newPostId,
    title: initialPost?.title || '',
    body: initialPost?.body || '',
  })
  const [titleError, setTitleError] = useState('')
  const [bodyError, setBodyError] = useState('')

  useEffect(() => {
    if (initialPost) {
      setPost(initialPost)
    }
  }, [initialPost])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!post.title.trim()) {
      setTitleError('Title is mandatory')
    }
    if (!post.body.trim()) {
      setBodyError('Body must be filled')
    }
    if (!titleError && !bodyError && post.title.trim() && post.body.trim()) {
      console.log(post)
      onSubmit(post)
    }
  }

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value
    setPost({ ...post, title: newTitle })
    if (!newTitle.trim()) {
      setTitleError('Title is mandatory')
    } else {
      setTitleError('')
    }
  }

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newBody = e.target.value
    setPost({ ...post, body: newBody })
    if (!newBody.trim()) {
      setBodyError('Body must be filled')
    } else {
      setBodyError('')
    }
  }

  return (
    <div className="post-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="title" className="form-container__label">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={post.title}
          placeholder="Set Title"
          onChange={handleTitle}
          className="form-container__input"
        />
        {titleError && <p style={{ color: 'red' }}>{titleError}</p>}
        <label htmlFor="content" className="form-container__label">
          Content
        </label>
        <textarea
          id="content"
          value={post.body}
          placeholder="Set Content"
          onChange={handleContent}
          className="form-container__textarea"
        ></textarea>
        {bodyError && <p style={{ color: 'red' }}>{bodyError}</p>}
        <div className="form-container__button">
          <Button
            text={buttonText}
            onClick={(e: React.FormEvent) => handleSubmit(e)}
          />
        </div>
      </form>
    </div>
  )
}

export default PostForm
