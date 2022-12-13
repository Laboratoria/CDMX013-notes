import {useState} from "react";
import {Route, Routes} from "react-router-dom"
import Login from './componentes/no-auth/Login';
import Wall from './componentes/wall/Wall';
//import Welcome from './componentes/Welcome/welcome';
import AllNotes from './componentes/AllNotes/AllNotes'


function App () {
    const [user, setUser] = useState(undefined)

function userNull(){
setUser(null)
}

    return (
<Routes>
  <Route path="/" element={<Login setUser={setUser}/>}/>
  <Route path="/welcome" element={user?<AllNotes exit={userNull}/>:<Login setUser={setUser}/>}/>
  <Route path="/wall" element={user?<Wall exit={userNull}/>:<Login setUser={setUser}/>}/>
  <Route path="/allNotes" element={user?<AllNotes exit={userNull}/>:<Login setUser={setUser}/>}/> 

  
 </Routes>

  )
};

export default App;
