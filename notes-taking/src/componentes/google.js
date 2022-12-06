import {GoogleAuthProvider, signInWithPopup, getAuth, signOut} from "firebase/auth";

const auth= getAuth();
const providerGoogle = new GoogleAuthProvider();

export const loginGoogle = ()=> {

 const loginPromise= signInWithPopup(auth, providerGoogle)
 
   const userPromise= loginPromise.then((result) => {
            //onNavigate('/home');
          return(result);
        })
    .catch((error) => {
            console.log(error);
            
        });
        return (userPromise)
};

export const signOutAccount = () => signOut(auth);
