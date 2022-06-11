interface PostMeta {
  title: string
  preview: string
  date: string
  updated?: string
  excerpt: string
}

export default interface Post {
  meta: PostMeta
  path: string
}