import DisplayPost from "./DisplayPost";
import { Post_Data } from "@/data/data";

const Feed = () => {
  return (
    <div className="feed">
      <h2>Explore</h2>
      {Post_Data.map((post) => (<DisplayPost key={post.name} post={post} />))}
    </div>
  )
}

export default Feed