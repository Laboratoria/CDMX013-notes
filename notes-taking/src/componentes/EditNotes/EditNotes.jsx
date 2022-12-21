import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../no-auth/login.css'
import { getFirestore, doc, getDoc,setDoc } from 'firebase/firestore'
import { app } from '../../firebase/config'
import { useParams } from 'react-router-dom'

const db = getFirestore(app)
const images = require.context('../../img', true)

export default function EditNotes ({ lista, exit }) {
  const navigate = useNavigate()
  const [note, setNote] = useState({
    title: '',
    body: ''
  })
  let { id } = useParams()

  const capturarInputs = (e) => {
    const { name, value } = e.target
    setNote({ ...note, [name]: value })
  }

  useEffect(() => {
    const getDocToEdit = () => {
      //petición al servidor

      const docRef = doc(db, 'usuarios', id)
      return getDoc(docRef)
    }
    getDocToEdit().then(result => {
      setNote(result.data())
    })
  }, [id])
  console.log(note)
  const saveNote = async (e) => {
    e.preventDefault()

    if (note.title !== '' || note.body !== '') {
      try {
        await setDoc(doc(db, 'usuarios', id), {
          ...note
        })
        setNote({ 
          title:"",
          body:"",
        })
            } catch (error) {
        console.log(error)
      }

   navigate('/allNotes')
      
    } else {
      alert('No puedes guardar notas vacías')
    }
  }

  return (
    <div className='allNotes'>
  
      <h2>ALL YOUR NOTES!</h2>

      <div className='card-body'>
      <form onSubmit={saveNote}>
        <input
          type='text'
          name='title'
          className='title'
          placeholder='Do you want put any title?'
          onChange={capturarInputs}
          value={note.title}
        />
        <input
          type='text'
          name='body'
          className='body'
          placeholder='Hey, write your note!'
          onChange={capturarInputs}
          value={note.body}
        />
        <button>
          <img src={images('./save.png')} alt={''} className='save'></img>
        </button>
      </form>
        {/* <input
          type='text'
          name='title'
          className='title'
          placeholder='Do you want put any title?'
          onChange={capturarInputs}
          value={note.title}
        />
        <input
          type='text'
          name='body'
          className='body'
          placeholder='Hey, write your note!'
          onChange={capturarInputs}
          value={note.body}
        />
        <button className='edit' onClick={() => setNote(lista.id)}>
          Edit
        </button> */}
      </div>
    </div>
  )
}
