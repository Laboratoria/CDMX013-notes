import {loginGoogle} from'../google'
import { useNavigate } from 'react-router-dom';
import './login.css'

export default function Login(props) {
    const navigate= useNavigate();
    const {setUser}=props;
    console.log(props);
    const click=()=> {
        const promise=loginGoogle();
promise.then((user)=>{
            setUser(user)
            navigate ('/welcome');
    }).catch((error)=>{
        console.log(error);

    })
    }

    const images = require.context('../../img', true)
    return (
        <div className='login'>
            <h1>NOTES TAKING</h1>
            <p>¡Tomar notas nunca fue tan fácil!</p>

            <img src={images('./firstimage.png')}
                alt={""}
                className="firstimg"
            />
            <img src={images('./googlebutton.png')}alt={""}className="google" onClick={()=>{click()}}></img>
                    </div>
    )
};
