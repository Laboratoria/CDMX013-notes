import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Route, Routes } from "react-router-dom"

import Login from './componentes/no-auth/Login';
import Wall from './componentes/wall/Wall';

// import db from './firebase/config';
import AllNotes from './componentes/AllNotes/AllNotes'

function App() {

  const [user, setUser] = useState(undefined)

  const auth = getAuth();

  onAuthStateChanged(auth, (userAuth) => {
    if (userAuth) {
      setUser(userAuth)
    } else {
      setUser(undefined)
    }
  });

  function userNull() {
    setUser(null)
  }

  return (
    <Routes>
      <Route path="/" element={<Login setUser={setUser} />} />
      <Route path="/welcome" element={user ? <AllNotes exit={userNull} /> : <Login setUser={setUser} />} />
      <Route path="/wall" element={user?<Wall exit={userNull}/>:<Login setUser={setUser}/>}/>
      <Route path="/allNotes" element={user?<AllNotes exit={userNull}/>:<Login setUser={setUser}/>}/>
    </Routes>

  )
};

export default App;
