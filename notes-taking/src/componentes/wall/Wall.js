import { signOutAccount } from '../google'
import { useNavigate } from 'react-router-dom'
import '../no-auth/login.css'

export default function Wall (props) {
  const navigate = useNavigate()
  const images = require.context('../../img', true)

  const signOutA = async () => {
    await signOutAccount()
    
    navigate('/');
    console.log('ya me fui')
  }
const back= ()=>{
  navigate('/welcome');
}

return (
    <div className='wall'>
      <h3>NOTES TAKING</h3>
      <h6>Create your note!</h6>
      <img src={images('./nota 1.png')} alt={''} id='note7' />

      <img src={images('./logout.png')}alt={""}className="btn-goOut" onClick={()=>{signOutA()}}></img>
      <img src={images('./back.png')} alt={""} className='back' onClick={()=>{back()}}></img>
                  
      
    </div>
  )
}





  

