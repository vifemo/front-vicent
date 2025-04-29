import React from 'react'
import { Comment, User } from '../../types/types'
import './commentcard.css'
import { useSelector } from 'react-redux'
import { UserState } from '../../store/store'

interface CommentsCardProps {
  comment: Comment
}

const CommentCard: React.FC<CommentsCardProps> = ({ comment }) => {
  const { users } = useSelector((state: UserState) => state.users_reducer)
  const user = users.find((u: User) => u.id == comment.userId)
  return (
    <div className="commentcard">
      <h3>{user.userName}</h3>
      <p>{comment.body}</p>
    </div>
  )
}

export default CommentCard
