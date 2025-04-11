import React from 'react'
import { Comment } from '../../types/types'

interface CommentsCardProps {
  comment: Comment
  postId: number
}

const CommentCard: React.FC<CommentsCardProps> = ({ comment, postId }) => {
  return (
    <div className="commentcard">
      <h3>{comment.name}</h3>
      <h4>{comment.email}</h4>
      <h4>{comment.body}</h4>
    </div>
  )
}

export default CommentCard
