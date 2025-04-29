import { ReactNode } from 'react'

export type Post = {
  id?: number
  title: string
  body: string
  userId: number | null
}

export type Comment = {
  userId: number
  postId: number
  id?: number
  name: string
  body: string
}

export type User = {
  id: number
  userName: string
  password: string
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
