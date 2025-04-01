import { useEffect, useState } from 'react'
import { Post } from '../types/types'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

const useFetchPost = (): Post | null => {
  const { id } = useParams()
  const { posts } = useSelector((state: RootState) => state.posts_reducer)
  const [post, setPost] = useState<Post | null>(null)

  useEffect(() => {
    if (id) {
      const postToUpdate = posts.find(
        (post: { id: number }) => post.id === Number(id)
      )
      setPost(postToUpdate || null)
    }
  }, [id, posts])

  return post
}

export default useFetchPost
