import React from 'react'
import { Comment } from '../../types/types'
import './commentcard.css'

interface CommentsCardProps {
  comment: Comment
}

const CommentCard: React.FC<CommentsCardProps> = ({ comment }) => {
  return (
    <div className="commentcard">
      <h3>{comment.name}</h3>
      <h4>{comment.email}</h4>
      <p>{comment.body}</p>
    </div>
  )
}

export default CommentCard
