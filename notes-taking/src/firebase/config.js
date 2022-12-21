import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZuQILF1yrYMNYe3Dy9OtLf874GlHIMTU",
  authDomain: "notes-taking-d4e9f.firebaseapp.com",
  projectId: "notes-taking-d4e9f",
  storageBucket: "notes-taking-d4e9f.appspot.com",
  messagingSenderId: "399617989537",
  appId: "1:399617989537:web:ac003a0d76c91f4e67c9e0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
