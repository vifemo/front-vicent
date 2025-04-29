import Button from '../button/Button'
import { useState } from 'react'
import { Comment } from '../../types/types'
import { useDispatch } from 'react-redux'
import { addComment } from '../../store/slices/commentsSlice'
import './commentform.css'
import { useTranslation } from 'react-i18next'

interface CommentFormProp {
  postId: number
}

function Commentform({ postId }: CommentFormProp) {
  const { t } = useTranslation()
  const storedUser = sessionStorage.getItem('user')
  const currentUser = JSON.parse(storedUser!)
  const currentUserId = currentUser.id
  const dispatch = useDispatch()

  //arreglar id de comentarios, o dejar en ? en types
  //arreglar css para que no dependa de postform
  const [comment, setComment] = useState<Comment>({
    postId: postId,
    userId: currentUserId,
    name: '',
    body: '',
  })

  const handleBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newBody = e.target.value
    setComment({ ...comment, body: newBody })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (comment.body.trim()) {
      console.log(comment)
      dispatch(addComment(comment))
    }
  }

  return (
    <div className="commentform-container">
      <form action="" className="form-container no-theme">
        <label htmlFor="comment" className="form-container__label">
          {t('APP.COMMENT.FORM.TITLE')}
        </label>
        <textarea
          id="body"
          value={comment.body}
          placeholder={t('APP.COMMENT.FORM.BODY')}
          onChange={handleBody}
          className="form-container__textarea"
        />
        <div className="form-container__button">
          <Button
            text={t('APP.COMMENT.FORM.BUTTON')}
            onClick={(e: React.FormEvent) => handleSubmit(e)}
          />
        </div>
      </form>
    </div>
  )
}

export default Commentform
