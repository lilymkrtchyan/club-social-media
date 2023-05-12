import AddIcon from '@mui/icons-material/Add';
import { MouseEventHandler, FormEventHandler, useState } from 'react';
import { Post } from "@/types"
import {addDoc, collection } from "firebase/firestore"
import { db } from "@/util/firebase"
import { useAuth } from "./AuthUserProvider" 

const cancel = () => {
  var x = document.getElementById("cp");
  if (x!.style.display === "none") {
    x!.style.display = "block";
  }
  else {
    x!.style.display = "none";
  }

  document.getElementById("text").value = ""
}

const CreatePost = () => {
  const [input, setInput] = useState("")
  const { user } = useAuth()

  const newPost: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    if (input === "") return

    const post: Post = {
      name: user!.displayName!,
      username: user!.email!,
      text: input,
      date: Date()
    }

    addDoc(collection(db, "posts"), post)

    setInput("")

    var x = document.getElementById("cp");
    if (x!.style.display === "none") {
      x!.style.display = "block";
    }
    else {
      x!.style.display = "none";
    }

    document.getElementById("text").value = ""
  }

  
  return (
    <div id="cp" className="createpost" style={{display:"none"}}>
      <textarea id="text" className = "createposttext" placeholder="What's happening?" onChange={(e) => setInput(e.target.value)}></textarea>
      <br></br>
      <button className = "cancelbutton" onClick={cancel}>Cancel</button>
      <button className = "createpostbutton" onClick={newPost}>Create</button>
    </div>
  )
}

export default CreatePost