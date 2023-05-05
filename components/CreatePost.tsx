import AddIcon from '@mui/icons-material/Add';

const createPost = () => {
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
  return (
    <div id = "cp" className="createpost">
      <textarea id="text" className = "createposttext" placeholder="What's happening?"></textarea>
      <br></br>
      <button className = "cancelbutton" onClick={createPost}>Cancel</button>
      <button className = "createpostbutton" onClick={createPost}>Create</button>
    </div>
  )
}

export default CreatePost