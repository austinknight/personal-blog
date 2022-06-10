interface PostMeta {
  title: string
  date: string
  updated?: string
  excerpt: string
}

export default interface Post {
  meta: PostMeta
  path: string
}