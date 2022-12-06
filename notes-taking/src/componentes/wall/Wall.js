import {signOutAccount} from '../google';
import '../no-auth/login.css';

export default function Wall (props) {
  const exit= props.exit
  const images = require.context('../../img', true)
  
  const signOutA=async()=>{
    await signOutAccount();
    exit();
    console.log("ya me fui");
  }
  
  return (
    <div className='wall'>
      <h2>NOTES TAKING</h2>
      <h4>CREATE YOUR NOTE</h4>
      <img src={images('./back.png')} alt={''} className='back' />
      <img src={images('./logout.png')} alt={''} className='logout' />
      <img src={images('./noteOne.png')} alt={''} className='create' />
     
      <button className="btn-goOut" onClick={()=>{signOutA()}}>Exit</button>
    
    </div>

    
  )
};

