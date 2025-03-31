import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

/**
 * Genera un id con el número siguiente al id del último post
 * @returns number
 */
export const useFakeId = (): number => {
  const posts = useSelector((state: RootState) => state.posts)
  const lastPost = posts[posts.length - 1]
  return lastPost ? lastPost.id + 1 : 1
}
