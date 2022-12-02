import {loginGoogle} from'../google'
import './login.css'

export default function Login() {
    const images = require.context('../../img', true)
    const clic =()=>{
        loginGoogle() 
    console.log("estás dentro")
    }
    return (
        <div className='login'>
            <h1>NOTES TAKING</h1>
            <p>¡Tomar notas nunca fue tan fácil!</p>

            <img src={images('./firstimage.png')}
                alt={""}
                className="firstimg"
            />
            <img src={images('./googlebutton.png')}alt={""}className="google" onClick={()=>{clic()}}></img>
                    </div>
    )
};
