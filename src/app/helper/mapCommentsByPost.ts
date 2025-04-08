import { Comment } from '../types/types'

/**
 * Mapea un array de comments y lo transforma en labels: postId, values: numbers
 * @returns
 */
export const mapCommentsByPost = (comments: Comment[]) => {
  const postCommentCount: Record<number, number> = {}
  comments.forEach((comment) => {
    postCommentCount[comment.postId] =
      (postCommentCount[comment.postId] || 0) + 1
  })

  return {
    labels: Object.keys(postCommentCount),
    values: Object.values(postCommentCount),
  }
}
