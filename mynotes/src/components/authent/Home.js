import './Home.css'
import idea from '../images/ideahome.png'
import logout from '../images/iconlogout.png'
import add from '../images/iconadd.png'

export default function Home(){
    
    return (
        <div className="margin">
            <div className="background"> 
            <button className="logout">Logout</button>
            <h1 className="titleHome">My Notes user@mail.com</h1>
            <img src={idea} className = "idea" alt= "imagen idea home "/>
            <img src={logout} className = "iconlogout" alt= "icon exit "/>
            <img src={add} className = "iconadd" alt= "icon add "/>
            <h3 className="insightHome">Las notas que agregues aparecerán aquì</h3>
            </div>
            </div>
    )
    }