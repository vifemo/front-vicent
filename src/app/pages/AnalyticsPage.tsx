import { useSelector } from 'react-redux'
import HighchartsComp from '../components/highcharts/HighchartsComp'
import {
  mapCommentsByPost,
  mapCommentsByUser,
} from '../helper/mapCommentsByPost'
import { mapPostsByUser } from '../helper/mapPostsByUser'
import Header from '../components/header/Header'
import Subheader from '../components/subheader/Subheader'
import '../../styles/pages/analyticspage.css'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { User } from '../types/types'

function AnalyticsPage() {
  const { t } = useTranslation()
  const { posts } = useSelector((state: RootState) => state.posts_reducer)
  const { comments } = useSelector((state: ComState) => state.comments_reducer)
  const { users } = useSelector((state: UserState) => state.users_reducer)

  const commentsByPost = mapCommentsByPost(comments)
  const commentsByUser = mapCommentsByUser(comments)
  const postsByUser = mapPostsByUser(posts)

  const postsByUserWithName = {
    labels: postsByUser.labels.map((userId) => {
      const user = users.find((u: User) => u.id === Number(userId))
      return user ? user.userName : `User ${userId}`
    }),
  }

  const commentsByUserWithName = {
    labels: commentsByUser.labels.map((userId) => {
      const user = users.find((u: User) => u.id === Number(userId))
      return user ? user.userName : `User ${userId}`
    }),
  }

  return (
    <div>
      <Header />
      <Subheader />
      <div className="highcharts-page">
        <h1>{t('APP.PAGE.ANALYTICS.TITLE')}</h1>
        <div className="home_highcharts">
          <HighchartsComp
            labels={postsByUserWithName.labels}
            values={postsByUser.values}
            title={t('APP.ANALYTICS.USER.TITLE')}
            categories={t('APP.ANALYTICS.USER.CATEGORIES')}
          />
        </div>
        <div className="home_highcharts">
          <HighchartsComp
            labels={commentsByPost.labels}
            values={commentsByPost.values}
            title={t('APP.ANALYTICS.COMMENTS.TITLE')}
            categories={t('APP.ANALYTICS.COMMENTS.CATEGORIES')}
          />
        </div>
        <div className="home_highcharts">
          <HighchartsComp
            labels={commentsByUserWithName.labels}
            values={commentsByUser.values}
            title={t('APP.ANALYTICS.COMMENTS-USER.TITLE')}
            categories={t('APP.ANALYTICS.COMMENTS.CATEGORIES')}
          />
        </div>
      </div>
    </div>
  )
}

export default AnalyticsPage
