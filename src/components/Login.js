import React from 'react';
import signGoogle  from '../config/AuthGoogle'
//import Button from '@material-ul/core/Button'

function Login() {
  return (
    <div className='content-start'>
      <img
        className='logo'
        src={require('../img/logoNote2.png')}
        alt='Imagen del logo' />
        <button classname='register-google'onClick={signGoogle}>Sing in with Google</button>

    </div>

  )
}
export default Login;