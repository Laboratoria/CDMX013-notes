import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  getAuth,
} from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();

export const googleAuth = () => {
  const promiseFirebase = signInWithPopup(auth, provider);
  return promiseFirebase
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // eslint-disable-next-line
      const token = credential.accessToken;
      const user = result.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      return error;
    });
};

export const signOutUser = () => signOut(auth);
