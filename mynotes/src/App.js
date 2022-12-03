
import {useState, useEffect} from 'react';
import {collection, getDocs} from 'firebase/firetore';
import db from './firebase/config';
import './App.css';
import Login from './components/authent/Login.js';
import Home from './components/authent/Home.js';


function App() {
  useEffect(()=> {
    const getData = async ()=> {
      const saveData = await getDocs (collection (db, "users"));
      console.log(saveData);
    }
    getData();
  },[]);
  const [user,setUser] = useState ({user: undefined})
  return (
    <>
     
      {user?
      <Home/> : <Login/>}
    
    </>
  );
}

export default App;

// {user: "ale@me.com"}
