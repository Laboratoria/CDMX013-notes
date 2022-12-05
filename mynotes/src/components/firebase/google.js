import { GoogleAuthProvider, signInWithPopup, getAuth, signOut } from "firebase/auth"

const auth = getAuth ();

const provider = new GoogleAuthProvider();

export const googleAuth = () => {
  
  signInWithPopup(auth, provider)
    .then((result) => {
     console.log ("Im in")

    })
    .catch((error) => {
      console.log(error);
    });
};

export const logOut = () => signOut(auth);
