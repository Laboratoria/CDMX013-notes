
import {useState, useEffect} from 'react';
import {collection, getDocs} from 'firebase/firestore';
import { Route, Routes } from "react-router-dom";
import db from './components/firebase/config';
import Login from './views/Login';
import Home from './views/Home';


function App() {
  useEffect(()=> {
    const getData = async ()=> {
      const saveData = await getDocs (collection (db, "users"));
      console.log(saveData);
    }
    
    getData();
  },[]);
  
  
  const [user, setUser] = useState();
  if (!user){
      return <Login setUser={setUser}/>;
  }
  return (
    <Routes>
     <Route path= '/home' element = {<Home/>} />
     
     {/* { user?<Route path="/" element={<Home />} />: <Route path="/" element={<Login  setUser={setUser}/>} />

    } */}
    
  </Routes>
  );
}

export default App;

// {user: "ale@me.com"}
