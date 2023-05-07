import DisplayPost from "./DisplayPost";
import { Post_Data } from "@/data/data";
import { collection, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "@/util/firebase"
import { Post, PostWithId } from "@/types";

const Feed = () => {
  const postQuery = query(collection(db, "posts"))

  const [posts, setPosts] = useState<PostWithId[] | null>(null)

  useEffect(() => {
    const unsubscribe = onSnapshot(postQuery, (querySnapshot) => {
      const posts: PostWithId[] = querySnapshot.docs.map((doc) => {
        const post = doc.data() as Post
        return {...post, id: doc.id}
      })

      setPosts(posts)
    })
    return unsubscribe
  }, [])

  return (
    <div className="feed">
      <h2>Explore</h2>
      {posts ? posts.map((post) => (<DisplayPost key={post.id} post={post} />)) : <h2>No Posts Yet</h2>}
    </div>
  )
}

export default Feed