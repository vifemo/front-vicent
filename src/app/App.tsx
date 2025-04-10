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
import ProtectedRoute from './components/login/ProtectedRoute'
import LoginPage from './pages/LoginPage'
import ScrollToTop from './pages/ScrollToTop'

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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/posts"
          element={
            <ProtectedRoute>
              <PostPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <CreatePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/posts/:id"
          element={
            <ProtectedRoute>
              <PostDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <ProtectedRoute>
              <EditPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="analytics"
          element={
            <ProtectedRoute>
              <AnalyticsPage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
