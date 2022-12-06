import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBftQRuVt5RU-_VMRCWw4kmDQNOQaooQsQ",
  authDomain: "mynotes-b67fa.firebaseapp.com",
  projectId: "mynotes-b67fa",
  storageBucket: "mynotes-b67fa.appspot.com",
  messagingSenderId: "700890702169",
  appId: "1:700890702169:web:d786969b2f05417957ac48",
  measurementId: "G-RFCC9HCPGN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default db;
