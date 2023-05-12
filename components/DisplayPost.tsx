import { PostWithId } from "@/types";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import Image from 'next/image'
import {doc, deleteDoc, collection } from "firebase/firestore"
import { db } from "@/util/firebase"


type Props = {
  readonly post: PostWithId
}

const DisplayPost = ({ post }: Props) => {
  const deletePost = () => {
    const task = doc(db, "posts", post.id)
    deleteDoc(task)
  }

  return (
    <div className="post">
      <AccountCircleIcon className="profile" />
      <div className="postBody">
        <div className="postHeader">
          <h3>{post.name} {post.username}</h3>
          <DeleteIcon className="deletepost" onClick={deletePost}/>
        </div>
        <p className="text">
          {post.text}
        </p>
        <Image className="image" src="/placeholder.jpg" alt="" width={200} height={200} />
      </div>
    </div>
  )
}

export default DisplayPost