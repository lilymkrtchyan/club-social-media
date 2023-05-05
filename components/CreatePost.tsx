import AddIcon from '@mui/icons-material/Add';

const CreatePost = () => {
  return (
    <div className="createpost">
      <textarea className = "createposttext" placeholder="What's happening?"></textarea>
      <br></br>
      <button className = "createpostbutton">Create</button>
    </div>
  )
}

export default CreatePost