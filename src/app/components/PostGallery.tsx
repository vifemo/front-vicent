import { useEffect, useState } from 'react'
import { Post } from '../types/types'
import '../../styles/postcard.css'

import Button from './Button'
import PostCard from './PostCard'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, deletePost } from '../actions/postActions'

function PostGallery() {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const handleDelete = (id: number) => {
    dispatch(deletePost(id))
  }

  const goToEdit = (id: number) => {
    return navigate(`/edit/${id}`)
  }

  const printPosts = posts.map((post) => {
    return (
      <div key={post.id} className="post-card">
        <PostCard
          post={{
            id: post.id,
            title: post.title,
            body: post.body,
          }}
        />
        <Button text="Delete" onClick={() => handleDelete(post.id)} />
        <Button text="Edit" onClick={() => goToEdit(post.id)} />
      </div>
    )
  })

  //Si printPost está vacio, mostramos Loading
  return (
    <div>
      {printPosts.length ? (
        <section className="post-container">{printPosts}</section>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  )
}
export default PostGallery
