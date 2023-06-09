import React from "react"
import Link from "next/link"
import ExploreIcon from '@mui/icons-material/Explore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreatePost from "./CreatePost"
import AddIcon from '@mui/icons-material/Add';
import { useAuth } from "./AuthUserProvider" 

const createPost = () => {
  var x = document.getElementById("cp");
  if (x!.style.display === "none") {
    x!.style.display = "block";
  }
}

const Sidebar = () => {
  const { user } = useAuth()

  return (
    <div className="sidebar">
      <h1>Cornell Connect</h1>
      <ul >
        <li>
            <ExploreIcon />
            <Link href="/" className="Link">Explore</Link>
        </li>
        <li>
          <AccountCircleIcon />
          <Link href="/account" className="Link">Account</Link>
        </li>
        {user != null
        ? 
        <li>
          <AddIcon /><span className="createpost" onClick={createPost}>Create Post</span>
        </li>
        : <></>}
      </ul>
      <CreatePost />
    </div>
  )
}

export default Sidebar