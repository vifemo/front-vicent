import { useSelector } from 'react-redux'
import { RootState, ComState } from '../store/store'

/**
 * Genera un id con el número siguiente al id del último post
 * @returns number
 */
export const useFakeId = (): number => {
  const { posts } = useSelector((state: RootState) => state.posts_reducer)
  const lastPost = posts[posts.length - 1]
  return lastPost ? lastPost.id + 1 : 1
}

export const useFakeCommentId = (): number => {
  const { comments } = useSelector((state: ComState) => state.comments_reducer)
  const lastComment = comments[comments.length - 1]
  return lastComment ? lastComment.id + 1 : 1
}
