import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth} from "./config"

const provider = new GoogleAuthProvider();
export const googleAuth = () => {
  
  signInWithPopup(auth, provider)
    .then((result) => {
     console.log ("Ikkk in")

    })
    .catch((error) => {
      console.log(error);
    });
};