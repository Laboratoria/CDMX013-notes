import './Home.css'
import idea from '../components/images/ideahome.png'
import logout from '../components/images/iconlogout.png'
import add from '../components/images/iconadd.png'
import { logOut } from '../components/firebase/google'


export default function Home(){
const exit= () => {
    logOut();
    console.log ("ya me sali")
}    
    return (
        <div className="margin">
            <div className="background"> 
            <button className="logout" onClick={()=>{exit()}}>Logout</button>
            <h1 className="titleHome">My Notes user@mail.com</h1>
            <img src={idea} className = "idea" alt= "imagen idea home "/>
            <img src={logout} className = "iconlogout" alt= "icon exit "/>
            <img src={add} className = "iconadd" alt= "icon add "/>
            <h3 className="insightHome">Las notas que agregues aparecerán aquì</h3>
            </div>
            </div>
    )
    }