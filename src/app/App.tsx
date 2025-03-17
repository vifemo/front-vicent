import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import './App.css'
import CreatePage from './pages/CreatePage'

function App() {
 

  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/posts" element={<PostPage />}></Route>
      <Route path="/create" element={<CreatePage/>}></Route>
     </Routes>
    </>
  )
}

export default App
