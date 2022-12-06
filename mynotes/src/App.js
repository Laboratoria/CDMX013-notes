import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Route, Routes } from "react-router-dom";
import db from "./firebase/config";
import Login from "./views/Login";
import Home from "./views/Home";

function App() {
  useEffect(() => {
    const getData = async () => {
      const saveData = await getDocs(collection(db, "users"));
      console.log(saveData);
    };
    getData();
  }, []);

  const [user, setUser] = useState(null);

  function setUserNull() {
    setUser(null);
  }

  return (
    <Routes>
      <Route path="/" element={<Login setUser={setUser} />} />
      <Route
        path="/Home"
        element={
          user ? <Home logOut={setUserNull} /> : <Login setUser={setUser} />
        }
      />
      {/* <Route path="*" element={<Error />} /> */}
    </Routes>
  );
}

export default App;
