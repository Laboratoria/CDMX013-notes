
import './Login.css'
import logo from '../components/images/mynoteslogo.png'
import { googleAuth } from '../components/firebase/google'

export default function Login(props){
    const {setUser} = props;
    
function googleEvent () {

    setUser(googleAuth);   
   
} 

    return (
        <div className="margin">
            <div className="background"> 
            <h1 className="titleApp">MyNotes</h1>
            <img src={logo} className = "logo" alt= "imagen logo app "/>
            <button className="google" onClick={()=>{googleEvent()}} >Login with Google</button>
            <h3 className="insight">Need to remember?, add notes and lists</h3>
            </div>
            </div>
    )
}

