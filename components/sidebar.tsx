import React from "react"
import Link from "next/link"
import ExploreIcon from '@mui/icons-material/Explore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Sidebar = () => {
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
      </ul>
    </div>
  )
}

export default Sidebar