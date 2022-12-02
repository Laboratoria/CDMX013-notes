//import { GoogleAuthProvider } from 'firebase/auth';
import '../no-auth/login.css';
import { signOutAccount} from '../google';




export default function Wall () {
  const images = require.context('../../img', true)
  const out=()=>{
    signOutAccount()
    console.log ("estás fuera")
}

  return (
    <div className='wall'>
      <h2>NOTES TAKING</h2>
      <h4>CREATE YOUR NOTE</h4>
      <img src={images('./back.png')} alt={''} className='back' />
      <img src={images('./logout.png')} alt={''} className='logout' />
      <img src={images('./noteOne.png')} alt={''} className='create' />
      <button className="btn-goOut" onClick={()=>{out()}}>Exit</button>

     
    </div>

    
  )
}
