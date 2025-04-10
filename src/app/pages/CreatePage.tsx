import { useState } from 'react'
import Header from '../components/header/Header'
import PostForm from '../components/postform/PostForm'
import { Post } from '../types/types'
import Subheader from '../components/subheader/Subheader'
import { useDispatch } from 'react-redux'
import { addPost } from '../store/slices/slice'
import '../../styles/pages/formpage.css'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Swal from 'sweetalert2'

function CreatePage() {
  const { t } = useTranslation()
  const [error, setError] = useState<string | null>(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleCreateSubmit = (post: Post) => {
    try {
      dispatch(addPost(post))
      Swal.fire(t('APP.FORM.CREATE.ALERT'))
      setError(null)
      return navigate(`/posts`)
    } catch (error) {
      setError(t('APP.FORM.CREATE.ERROR'))
    }
  }

  return (
    <div>
      <Header />
      <Subheader />
      <div className="form-page">
        <h1 className="title-change">{t('APP.PAGE.FORM.CREATE.TITLE')}</h1>
        <PostForm
          onSubmit={handleCreateSubmit}
          buttonText={t('APP.BUTTON.CREATE')}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  )
}

export default CreatePage
