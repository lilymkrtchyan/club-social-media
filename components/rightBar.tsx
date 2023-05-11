import { signInWithGoogle } from '../util/firebase';

const RightBar = () => {
  return (
    <div className="rightBar">
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  )
}

export default RightBar