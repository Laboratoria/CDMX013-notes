import "./Login.css";
import logo from "../components/images/mynoteslogo.png";
import { googleAuth } from "../firebase/google";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const navigate = useNavigate();

  const { setUser } = props;

  const googleEvent = () => {
    const userPromise = googleAuth();
    userPromise
      .then((user) => {
        setUser(user);
        navigate("/Home");
      })
      .catch((error) => {
        console.log("error");
      });
  };

  return (
    <div className="margin">
      <div className="background">
        <h1 className="titleApp">MyNotes</h1>
        <img src={logo} className="logo" alt="imagen logo app " />
        <button className="google" onClick={() => googleEvent()}>
          Login with Google
        </button>
        <h3 className="insight">Need to remember?, add notes and lists</h3>
      </div>
    </div>
  );
}
