import {GoogleAuthProvider,signInWithPopup,getAuth} from "firebase/auth";

const auth= getAuth();
const providerGoogle = new GoogleAuthProvider();

export const loginGoogle = ()=> {

    signInWithPopup(auth, providerGoogle)
        .then((result) => {
            //onNavigate('/home');
            console.log('google sign in');
        })
        .catch((error) => {
            console.log(error);
        });
};

