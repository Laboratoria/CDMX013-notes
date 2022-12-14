import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../no-auth/login.css";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { signOutAccount } from "../google";
import Welcome from "../Welcome/welcome";
import { getAuth } from "firebase/auth";
import { app } from "../../firebase/config";

const db = getFirestore(app);
const auth = getAuth(app);

export default function AllNotes(props, { userEmail }) {
  const navigate = useNavigate();
  const exit = props.exit;
  const images = require.context("../../img", true);

  const signOutA = async () => {
    await signOutAccount();
    exit();

    navigate("/");
    console.log("ya me fui");
  };

  const back = () => {
    navigate("/wall");
  };

  const [lista, setLista] = useState(null);

  useEffect(() => {
    const getLista = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "usuarios"));
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setLista(docs);
      } catch (error) {
        console.log(error);
      }
    };
    getLista();
  }, []);

  //función para delete
  // if (auth.currentUser.id === doc.id) {
  const deletePost = async (id) => {
    await deleteDoc(doc(db, "usuarios", id));
  };

  // deletePost.addEventListener('click', async () => {
  //   await deletePost(doc.id);
  // });

  if (!lista) {
    return <h3>Cargando...</h3>;
  }

  return (
    <div className="allNotes">
      {/* <p>
        <strong>{userEmail}</strong>
      </p> */}
      <h4>NOTES TAKING</h4>
      <h6>All your notes!</h6>

      <img
        src={images("./logout.png")}
        alt={""}
        className="btn-goOut"
        onClick={() => {
          signOutA();
        }}
      ></img>

      <img
        src={images("./back.png")}
        alt={""}
        className="back"
        onClick={() => {
          back();
        }}
      ></img>

      <div className="card-body">
        {lista.length === 0 && <Welcome />}
        {lista.map((list) => (
          <article className="card" key={list.id}>
            <p>{list.title}</p>
            <p>{list.body}</p>
            <button
              className="delete"
              onClick={() => {
                deletePost(list.id);
              }}
            >
              Delete
            </button>

            <button className="edit">Edit</button>
          </article>
        ))}

      </div>
    </div>
  );
}
