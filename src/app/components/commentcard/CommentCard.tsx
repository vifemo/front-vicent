import React from 'react'
import { Comment } from '../../types/types'
import './commentcard.css'

interface CommentsCardProps {
  comment: Comment
}

const CommentCard: React.FC<CommentsCardProps> = ({ comment }) => {
  return (
    <div className="commentcard">
      <h3>{comment.userId}</h3>
      <p>{comment.comment}</p>
    </div>
  )
}

export default CommentCard
