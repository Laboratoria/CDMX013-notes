import './Login.css'
import logo from '../images/mynoteslogo.png'
export default function Login(){

    return (
        <div className="margin">
            <div className="background"> 
            <h1 className="titleApp">MyNotes</h1>
            <img src={logo} className = "logo" alt= "imagen logo app "/>
            <button className="google">Login with Google</button>
            <h3 className="insight">Need to remember?, add notes and lists</h3>
            </div>
            </div>
    )
}