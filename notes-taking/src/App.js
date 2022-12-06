import {useState, useEffect} from "react";
import {Route, Routes} from "react-router-dom"
import { collection, getDocs } from 'firebase/firestore';
import db from './firebase/config';
import Login from './componentes/no-auth/Login';
//import Wall from './componentes/wall/Wall';
import Welcome from './componentes/Welcome/welcome'

function App () {
  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collection(db, 'usuarios'))
      console.log(data)
    }
    getData()
    
    }, [])
    const [user, setUser] = useState(undefined)

function userNull(){
setUser(null)

}

    return (
<Routes>
  
  <Route path="/" element={user?<Welcome exit={userNull}/>:<Login setUser={setUser}/>}/>
 </Routes>

  )
};

export default App;



/*import {Route, Routes} from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css';
import About from './views/About';
import Feed from './views/Feed';
import NotFound from "./views/NotFound";
import Login from './views/Login';

function App(){
  const [user, setUser] = useState(null);
 
  if (!user) {
    return( 
<Routes>
<Route path='/' element={<Login setUser={setUser}/>} />
 <Route path='/' element={<Feed/>}/>
 <Route path='/about' element={<About/>}/>
 <Route path='*' element={<NotFound/>}/>
</Routes>

)}

return (
<Routes>
 <Route path='/' element={<Feed/>}/>
 <Route path='/about' element={<About/>}/>
 <Route path='*' element={<NotFound/>}/>

</Routes>
)
};
*/

