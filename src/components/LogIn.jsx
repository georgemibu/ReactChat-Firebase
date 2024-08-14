import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";
import { useAuthState} from "react-firebase-hooks/auth";

const LogIn = () =>{
    const [user] = useAuthState(auth);
    console.log(user)
    
    const googleLogin = () =>{
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }
    
    return (
        <button
            className="btn-login"
            onClick={googleLogin }
        
        >
            <i className="fa-brands fa-google"></i>
            Sign in with Google
        </button>
    );
}
export default LogIn; 