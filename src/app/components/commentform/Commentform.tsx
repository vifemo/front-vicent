import Button from '../button/Button'
import { useState } from 'react'
import { Comment } from '../../types/types'
import { useFakeId, useFakeCommentId } from '../../helper/idHelper'
import { useDispatch } from 'react-redux'
import { addComment } from '../../store/slices/commentsSlice'
import './commentform.css'

interface CommentFormProp {
  postId: number
}

function Commentform({ postId }: CommentFormProp) {
  const newPostId = useFakeId()
  const fakeUserId = newPostId - 90
  const fakeCommentId = useFakeCommentId()
  const dispatch = useDispatch()

  //arreglar id de comentarios, o dejar en ? en types
  //arreglar css para que no dependa de postform
  const [comment, setComment] = useState<Comment>({
    id: fakeCommentId,
    postId: postId,
    userId: fakeUserId,
    name: '',
    comment: '',
  })

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value
    setComment({ ...comment, name: newName })
  }

  const handleBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newBody = e.target.value
    setComment({ ...comment, comment: newBody })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (comment.name.trim() && comment.comment.trim()) {
      console.log(comment)
      dispatch(addComment(comment))
    }
  }

  return (
    <div className="commentform-container">
      <form action="" className="form-container no-theme">
        <label htmlFor="name" className="form-container__label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={comment.name}
          placeholder="Name"
          onChange={handleName}
          className="form-container__input"
        />

        <label htmlFor="comment" className="form-container__label">
          Comment:
        </label>
        <textarea
          id="body"
          value={comment.comment}
          placeholder="Comment here..."
          onChange={handleBody}
          className="form-container__textarea"
        />
        <div className="form-container__button">
          <Button
            text="Send comment"
            onClick={(e: React.FormEvent) => handleSubmit(e)}
          />
        </div>
      </form>
    </div>
  )
}

export default Commentform
