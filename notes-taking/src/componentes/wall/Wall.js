import { signOutAccount } from '../google'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../no-auth/login.css'
import{getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const auth=getAuth()
const db= getFirestore()

export default function Wall (props) {
  const navigate = useNavigate()
  const exit = props.exit
  const images = require.context('../../img', true)

  const signOutA = async () => {
    await signOutAccount(auth)
    exit()

    navigate('/')
    console.log('ya me fui')
  }
  const back = () => {
    navigate('/welcome')
  }

  const valorInicial = {
    title: '',
    body: '',
  }

  const [user, setUser] = useState(valorInicial)
  const capturarInputs = (e) =>{
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const guardarDatos = async (e) => {
    e.preventDefault();
    console.log(user);
try{ 
  await addDoc(collection(db,'usuarios'),{
  ...user
} )
} catch(error){

  console.log(error)
}
 setUser({ ...valorInicial }); 
  }

  return (
    <div className='wall'>
      <h3>NOTES TAKING</h3>
      <h6>Create your note!</h6>
      <img src={images('./nota 1.png')} alt={''} id='note7' />

      <img
        src={images('./logout.png')}
        alt={''}
        className='btn-goOut'
        onClick={() => {
          signOutA()
        }}
      ></img>
      <img
        src={images('./back.png')}
        alt={''}
        className='back'
        onClick={() => {
          back()
        }}
      ></img>
      <form onSubmit={guardarDatos}>
        <input
          type='text'
          name='title'
          className='title'
          placeholder='Do you want put any title?'
          onChange={capturarInputs}
          value={user.title}
        />
        <input
          type='text'
          name='body'
          className='body'
          placeholder='Hey, write your note!'
          onChange={capturarInputs}
          value={user.body}
        />
        <button><img
        src={images('./save.png')} alt={''} className='save'></img>
      </button>

      </form>

      
    </div>
  )
}