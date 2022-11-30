
import {useState} from 'react';
import './App.css';
import Login from './components/authent/Login.js';
import Home from './components/authent/Home.js';


function App() {
  const [user,setUser] = useState (undefined)
  return (
    <>
     
      {user?
      <Home/> : <Login/>}
    
    </>
  );
}

export default App;
