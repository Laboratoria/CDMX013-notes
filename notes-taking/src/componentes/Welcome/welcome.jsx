import { signOutAccount } from "../google";
import { useNavigate } from "react-router-dom";
import "../no-auth/login.css";

export default function Welcome(props) {
  const navigate = useNavigate();
  const exit = props.exit;
  const images = require.context("../../img", true);

  const create = async () => {
    await navigate();
    navigate("/wall");
  };

  const signOutA = async () => {
    await signOutAccount();
    exit();
    navigate("/");
    console.log("ya me fui");
  };

  return (
    <div className="welcome">
      <h1>NOTES TAKING</h1>
      <h5>Add your first post-it!</h5>
      <img src={images("./USUARIO.png")} alt={""} className="user" />
      <img
        src={images("./logout.png")}
        alt={""}
        className="btn-goOut"
        onClick={() => {
          signOutA();
        }}
      ></img>
      <img
        src={images("./home2.png")}
        alt={""}
        className="creates"
        onClick={() => {
          create();
        }}
      ></img>
    </div>
  );
}
