import { FaGoogle } from "react-icons/fa6"
import { signUpWithGoogleAccount, signOutFromAkkount } from "../firebase/firebaseConfig"
import { userSetting } from "../redux/features/likedSlice"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.liked)
    const loginSignup = () => {
        signUpWithGoogleAccount()
            .then((result) => {
                dispatch(userSetting(result.user));
                navigate('/')
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            {!user && <h1 className="text-4xl my-10">Login / Signup with Google</h1>}
            {user && (
                <div className="flex gap-10 flex-col items-center">
                    <h1 className="text-4xl my-10">{user.displayName}</h1>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    </div>
                </div>
            )}
            <button onClick={loginSignup} className="btn btn-neutral">
                <span>
                    <FaGoogle />
                </span>
                <span>SignUp</span>
            </button>
            <button onClick={signOutFromAkkount} className="btn btn-neutral">
                <span>
                    <FaGoogle />
                </span>
                <span>Logout</span>
            </button>
        </div>
    )


}

export default Login