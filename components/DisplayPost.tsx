import { Post } from "@/types";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Image from 'next/image'
type Props = {
  readonly post: Post
}

const DisplayPost = ({ post }: Props) => {
  return (
    <div className="post">
      <AccountCircleIcon className="profile" />
      <div className="postBody">
        <div className="postHeader">
          <h3>{post.name} {post.username}</h3>
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