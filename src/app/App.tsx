import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import './App.css'
import CreatePage from './pages/CreatePage'
import PostDetails from './pages/PostDetails'
import EditPage from './pages/EditPage'
import Header from './components/header/Header'
import Subheader from './components/subheader/Subheader'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </>
  )
}

export default App
