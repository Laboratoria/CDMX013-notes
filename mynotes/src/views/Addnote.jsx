import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import "./Home.css";
import "./Addnote.css";
import logout from "../components/images/iconlogout.png";
import { HandleSignOut } from "../components/buttons/Exit";
export default function Addnote() {
  const noteInit = {
    title: "",
    note: "",
  };
  //variables de estado
  const [user, setUser] = useState(noteInit);

  //funcion capturar inputs

  const captInputs = (e) => {
    const { name, value } = e.target;
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
    setUser({ ...noteInit });
  };

  return (
    <div className="margin">
      <div className="background">
        <h1 className="titleHome">My Notes user@mail.com</h1>
        <HandleSignOut />
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
        <img src={logout} className="iconlogout" alt="icon exit " />
        <h3 className="insightHome">Creating a new note ...</h3>
      </div>
    </div>
  );
}
