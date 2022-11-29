import React from 'react';
import './App.css';
//import GoogleLogin from 'react-google-login';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <div className='main-contender'>
      <h1>My Notes</h1>
      <Login />
      </div>
    </div>
  );
}

export default App;
