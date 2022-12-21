import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../no-auth/login.css'
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'
import { signOutAccount } from '../google'
import Welcome from '../Welcome/welcome'
import { getAuth } from 'firebase/auth'
import { app } from '../../firebase/config'
import { editableInputTypes } from '@testing-library/user-event/dist/utils'

const db = getFirestore(app)
const auth = getAuth(app)

export default function AllNotes (props) {
  const navigate = useNavigate()
  const exit = props.exit
  const images = require.context('../../img', true)

  const signOutA = async () => {
    await signOutAccount()
    exit()

    navigate('/')
    console.log('ya me fui')
  }

  const back = () => {
    navigate('/wall')
  }

  const [lista, setLista] = useState(null)

  useEffect(() => {
    const getLista = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'usuarios'))
        const docs = []
        querySnapshot.forEach(doc => {
          docs.push({ ...doc.data(), id: doc.id })
        })
        setLista(docs)
      } catch (error) {
        console.log(error)
      }
    }
    getLista()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //función para delete
  // if (auth.currentUser.id === doc.id) {
  const deleteNote = async id => {
    await deleteDoc(doc(db, 'usuarios', id))
    const newNoteList = [...lista.filter(item => item.id !== id)]
    setLista(newNoteList)
  }
  const editBtn = async id => {
    navigate('/editNotes/' + id)
  }

  if (!lista) {
    return <h3>Cargando...</h3>
  }

  return (
    <div className='allNotes'>

      <h2>ALL YOUR NOTES!</h2>

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

      <div className='card-body'>
        {lista.length === 0 && <Welcome />}
        {lista.map(list => (
          <div className='card' key={list.id}>
            {list.title}
            {list.body}
            <button
              className='delete'
              onClick={() => {
                deleteNote(list.id)
              }}
            >
              Delete
            </button>

            <button
              className='edit'
              onClick={() => {
                editBtn(list.id)
              }}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
