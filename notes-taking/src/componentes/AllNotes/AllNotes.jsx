// import { Wall } from '../wall/Wall'
// import { useNavigate } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import '../no-auth/login.css'
// import{getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'
// import { getAuth } from 'firebase/auth'

// const db= getFirestore()

// const [lista,setLista]=useState([useEffect])
// useEffect(()=>{
// const getLista= async()=>{
//     try{
// const querySnapshot= await getDocs(collection(db, 'ususarios'))
// const docs=[]
// querySnapshot.forEach((doc)=>{
// docs.push({...doc.data(), id:doc.id})
// }) 
// setLista(docs)
//     }catch (error){
//         console.log(error)
//     }
// }
// getLista()
// },[lista])

// const images = require.context('../../img', true)

// const signOutA = async () => {
// await signOutAccount(auth)
// exit()

// navigate('/')
// console.log('ya me fui')
// }
// const back = () => {
// navigate('/welcome')
// }
//    return (
//      <div className='allNotes'>
//        <h3>NOTES TAKING</h3>
//       {/* <h6>Create your note!</h6> */}
//      <img src={images('./nota 1.png')} alt={''} id='note7' />
//        <img
//          src={images('./logout.png')}
//          alt={''}
//          className='btn-goOut'
//          onClick={() => {
//            signOutA()
//          }}
//        ></img>
//        <img
//          src={images('./back.png')}
//          alt={''}
//          className='back'
//          onClick={() => {
//            back()
//          }}
//        ></img>

//        <div className='containerCard>
//        <div className= 'cardBody'>

//        {
        
//                lista.map(list=>(
//             <div key={list.id}>
//                 <p>{list.title}</p>
//                 <p>{list.body}</p>
//                 <button className='delete'>Delete</button>
//                 <button className='edit'>Edit</button>
//                 </div>
//                 </div>
//                 </div>
//         )) }
//     )    
//     {
        
//     }

         
        
                
 