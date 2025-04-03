import Button from '../button/Button'
import './postform.css'
import { useState, useEffect } from 'react'
import { Post } from '../../types/types'
import { useFakeId } from '../../helper/idHelper'
import { useTranslation } from 'react-i18next'

interface PostFormProps {
  initialPost?: Post | null
  onSubmit: (post: Post) => void
  buttonText: string
}

function PostForm({ initialPost, onSubmit, buttonText }: PostFormProps) {
  const { t } = useTranslation()
  const newPostId = useFakeId()
  const [post, setPost] = useState<Post>({
    id: initialPost?.id || newPostId,
    title: initialPost?.title || '',
    body: initialPost?.body || '',
    //genera un userId de prueba
    userId: initialPost?.userId || newPostId - 90,
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
      setTitleError(t('APP.FORM.TITLE.ERROR'))
    }
    if (!post.body.trim()) {
      setBodyError(t('APP.FORM.CONTENT.ERROR'))
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
      setTitleError(t('APP.FORM.TITLE.ERROR'))
    } else {
      setTitleError('')
    }
  }

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newBody = e.target.value
    setPost({ ...post, body: newBody })
    if (!newBody.trim()) {
      setBodyError(t('APP.FORM.CONTENT.ERROR'))
    } else {
      setBodyError('')
    }
  }

  return (
    <div className="post-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="title" className="form-container__label">
          {t('APP.FORM.TITLE')}
        </label>
        <input
          type="text"
          id="title"
          value={post.title}
          placeholder={t('APP.FORM.TITLE.PLACEHOLDER')}
          onChange={handleTitle}
          className="form-container__input"
        />
        {titleError && <p style={{ color: 'red' }}>{titleError}</p>}
        <label htmlFor="content" className="form-container__label">
          {t('APP.FORM.CONTENT')}
        </label>
        <textarea
          id="content"
          value={post.body}
          placeholder={t('APP.FORM.CONTENT.PLACEHOLDER')}
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
