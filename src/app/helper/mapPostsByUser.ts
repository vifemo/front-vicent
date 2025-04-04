import { Post } from '../types/types'

/**
 * Mapea un array de posts y lo transforma en labels: id, values: numbers
 * @returns
 */
export const mapPostsByUser = (posts: Post[]) => {
  const userPostCount: Record<number, number> = {}
  posts.forEach((post) => {
    userPostCount[post.userId] = (userPostCount[post.userId] || 0) + 1
  })

  return {
    labels: Object.keys(userPostCount),
    values: Object.values(userPostCount),
  }
}
