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

  useEffect(() => {
    if (initialPost) {
      setPost(initialPost)
    }
  }, [initialPost])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Mejorar validación
    if (post.title.trim() === '') {
      post.title = "Title it's mandatory"
    }
    if (post.body.trim() === '') {
      post.body = 'Content must be field'
    }
    console.log(post)
    onSubmit(post)
  }

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, title: e.target.value })
  }

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost({ ...post, body: e.target.value })
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
