import { signOutAccount } from '../google'
import { useNavigate } from 'react-router-dom'
import '../no-auth/login.css'

export default function Welcome (props) {
  const navigate = useNavigate()
  const exit = props.exit
  const images = require.context('../../img', true)

  const signOutA = async () => {
    await signOutAccount()
    exit()
    navigate('/');
    console.log('ya me fui')
  }
const create= ()=>{
  navigate('/wall');
}

return (
    <div className='welcome'>
      <h2>NOTES TAKING</h2>
      <h5>Add your first post-it!</h5> 
   
      {/* <img src={images('./note1.png')} alt={''} id='note1' />
      <img src={images('./note2.png')} alt={''} id='note2' /> 
      <img src={images('./note3.png')} alt={''} id='note3' />
      <img src={images('./note4.png')} alt={''} id='note4' />
      {/* 
      <img src={images('./pencil.png')} alt={''} className='pencil' /> */}
      
      <img src={images('./USUARIO.png')} alt={''} className='user' />
      <img src={images('./logout.png')}alt={""}className="btn-goOut" onClick={()=>{signOutA()}}></img> 
      {/* <img src={images('./addn.png')}alt={""}className="pencil" onClick={()=>{create()}}></img> */}
      {/* <img src={images('./home3.png')}alt={""}className="header" />
      <img src={images('./create.png')}alt={""}className="creates" />  */}
      <img src={images('./home2.png')}alt={""}className="creates" onClick={()=>{create()}}></img>
    
                  
      
    </div>
  )
}
