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

  return (
    <div className='wall'>
      <h2>NOTES TAKING</h2>

      <img src={images('./back.png')} alt={''} className='back' />
      <img src={images('./logout.png')} alt={''} className='logout' />
      <img src={images('./note1.png')} alt={''} id='notes' />
      <img src={images('./note2.png')} alt={''} id='notes' />
      <img src={images('./note3.png')} alt={''} id='notes' />
      <img src={images('./note4.png')} alt={''} id='notes' />
      <button
        className='btn-goOut'
        onClick={() => {
          signOutA()
        }}
      >
        Exit
      </button>
    </div>
  )
}
