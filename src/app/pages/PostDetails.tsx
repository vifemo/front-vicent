import Header from '../components/header/Header'
import '../../styles/pages/postdetails.css'
import { Post, User } from '../types/types'
import useFetchPost from '../hooks/useFetchPost'
import Subheader from '../components/subheader/Subheader'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost } from '../store/slices/slice'
import Button from '../components/button/Button'
import { useTranslation } from 'react-i18next'
import Swal from 'sweetalert2'
import CommentCard from '../components/commentcard/CommentCard'
import { Comment } from '../types/types'
import Commentform from '../components/commentform/Commentform'
import { UserState } from '../store/store'

function PostDetails() {
  const { t } = useTranslation()

  const { comments } = useSelector((state: RootState) => state.comments_reducer)
  const post = useFetchPost()

  const { users } = useSelector((state: UserState) => state.users_reducer)
  const user = post ? users.find((u: User) => u.id == post.userId) : undefined

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userLogged = JSON.parse(sessionStorage.getItem('user')!)
  const canEdit = userLogged && userLogged.id === post?.userId

  const handleDelete = (id: number) => {
    dispatch(deletePost(id))
    Swal.fire(t('APP.FORM.DELETE.ALERT'))
    return navigate(`/posts`)
  }

  const goToEdit = (id: number) => {
    return navigate(`/edit/${id}`)
  }

  const printDetails = (post: Post | null, user?: User) => {
    return post ? (
      <section className="post-details no-theme">
        <h2 className="post-details__userid">
          {t('APP.DETAILS_PAGE.USER')} {user.userName}
        </h2>
        <h1 className="post-details__title">{post.title}</h1>
        <p className="post-details__body">{post.body}</p>
        {canEdit === true && (
          <div className="postdetails__button-container">
            <Button
              text={t('APP.BUTTON.DELETE')}
              onClick={() => handleDelete(post.id!)}
            />
            <Button
              text={t('APP.BUTTON.EDIT')}
              onClick={() => goToEdit(post.id!)}
            />
          </div>
        )}
      </section>
    ) : (
      <h2>Loading...</h2>
    )
  }

  const printComment = () => {
    if (!post) return null

    const filteredComments = comments.filter(
      (comment: Comment) => comment.postId === post.id
    )

    return filteredComments.map((comment: Comment) => (
      <CommentCard key={comment.id} comment={comment} />
    ))
  }
  return (
    <>
      <Header />
      <Subheader />
      <div className="post-details-container">
        <div>{printDetails(post, user)}</div>
        <div>{post && <Commentform postId={post.id} />}</div>
        <div>{printComment()}</div>
      </div>
    </>
  )
}

export default PostDetails
