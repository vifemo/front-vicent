import { ReactNode } from 'react'

export type Post = {
  id: number
  title: string
  body: string
  userId: number
}

export type Comment = {
  userId: number
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export type TranslationType = {
  language: string
  values: unknown
}

export type I18nType = {
  language: string
  values: TranslationType[]
}

export type ProtectedRouteProps = {
  children: ReactNode
}
