import "./Home.css";
import idea from "../components/images/ideahome.png";
import logout from "../components/images/iconlogout.png";
import add from "../components/images/iconadd.png";
import { signOutUser } from "../firebase/google";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
  const exit = props.logOut;
  const navigate = useNavigate();
  const handleSignOut = async () => {
    await signOutUser();
    exit();
    navigate("/");
    console.log("byyyyyeee");
  };

  return (
    <div className="margin">
      <div className="background">
        <button className="logout" onClick={() => handleSignOut()}>
          Logout
        </button>
        <h1 className="titleHome">My Notes user@mail.com</h1>
        <img src={idea} className="idea" alt="imagen idea home " />
        <img src={logout} className="iconlogout" alt="icon exit " />
        <img src={add} className="iconadd" alt="icon add " />
        <h3 className="insightHome">Las notas que agregues aparecerán aquì</h3>
      </div>
    </div>
  );
}
