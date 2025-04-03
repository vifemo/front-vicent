export type Post = {
  id: number
  title: string
  body: string
  userId: number
}
export type TranslationType = {
  language: string
  values: unknown
}

export type I18nType = {
  language: string
  values: TranslationType[]
}
