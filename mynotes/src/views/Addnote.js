import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/config";
import "./Home.css";
import "./Addnote.css";
import { HandleSignOut } from "../components/buttons/Exit";

export default function Addnote() {
  //valor inicial de mi objeto
  const noteInit = {
    title: "",
    note: "",
  };
  //variable de estado
  const [user, setUser] = useState(noteInit);
  const navigate = useNavigate();

  //funcion capturar inputs
  const captInputs = (e) => {
    const { name, value } = e.target; //inputs
    setUser({ ...user, [name]: value });
  };

  const saveNote = async (e) => {
    e.preventDefault();
    //console.log(user);
    try {
      await addDoc(collection(db, "Notes"), {
        ...user,
      });
    } catch (error) {
      console.log(error);
    }
    navigate("/Home");
    setUser({ ...noteInit });
  };

  return (
    <div className="margin">
      <div className="background">
        <h1 className="titleHome">My Notes user@mail.com</h1>
        <button className="logout">Logout</button>
        <form className="note" onSubmit={saveNote}>
          <input
            type="text"
            name="title"
            className="noteTitle"
            placeholder="Title"
            onChange={captInputs}
            value={user.title}
          />
          <textarea
            name="note"
            className="noteText"
            placeholder="Note"
            onChange={captInputs}
            value={user.note}
          />
          <button className="buttonSave">Guardar</button>
        </form>
        <h3 className="insightHome">Creating a new note ...</h3>
        <HandleSignOut />
      </div>
    </div>
  );
}
