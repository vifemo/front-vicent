import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import './App.css'
import CreatePage from './pages/CreatePage'
import PostDetails from './pages/PostDetails'
import EditPage from './pages/EditPage'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store/store'
import { fetchAllPosts } from './store/slices/slice'
import { getPosts } from './services/postService'
import { useEffect } from 'react'
import AnalyticsPage from './pages/AnalyticsPage'
import Login from './components/login/login'
import ProtectedRoute from './components/login/ProtectedRoute'

function App() {
  const { posts } = useSelector((state: RootState) => state.posts_reducer)
  const dispatch = useDispatch()

  useEffect(() => {
    if (posts.length === 0) {
      const fetchPosts = async () => {
        const postsData = await getPosts()
        dispatch(fetchAllPosts(postsData))
      }
      fetchPosts()
    }
  }, [dispatch, posts.length])

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostPage />} />
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              {' '}
              <CreatePage />{' '}
            </ProtectedRoute>
          }
        />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
