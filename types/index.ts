
export type Post = {
  name: string
  username: string
  text: string
  date: string
}

export type PostWithId = Post & {
  id: string
}