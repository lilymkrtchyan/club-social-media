import { signInWithGoogle, signOut } from '../util/firebase';
import { useAuth } from './AuthUserProvider';

const RightBar = () => {
  const { user } = useAuth()
  return (
    <div className="rightBar">
      <button onClick={user ? signOut : signInWithGoogle}>
        {user ? "Sign Out" : "Sign In With Google"}
      </button>
    </div>
  )
}

export default RightBar