// import { signOutUser } from "../firebase/google";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { HandleSignOut } from "../components/buttons/Exit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import "./Home.css";
import idea from "../components/images/ideahome.png";
import add from "../components/images/iconadd.png";

export default function Home(props) {
  const navigate = useNavigate();

  const buttonAdd = () => {
    navigate("/Add");
  };

  const [list, setList] = useState([]);
  useEffect(() => {
    const getList = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Notes"));
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setList(docs);
      } catch (error) {
        console.log(error);
      }
    };
    getList();
  }, []);

  return (
    <div className="margin">
      <div className="background">
        <HandleSignOut />
        <h1 className="titleHome">My Notes user@mail.com</h1>
        <img src={idea} className="idea" alt="imagen idea home " />
        <img
          src={add}
          onClick={() => buttonAdd()}
          className="iconadd"
          alt="icon add "
        />
        <h3 className="insightHome">Las notas que agregues aparecerán aquì</h3>
        <div className="containerPost">
          {list.map((list) => (
            <div key={list.id}>
              <p>{list.title}</p>
              <p>{list.note}</p>
              <button className="delete">Delete</button>
              <button className="edit">Edit</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
