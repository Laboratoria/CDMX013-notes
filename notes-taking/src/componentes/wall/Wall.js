import './wall.css'

export default function Wall () {
  const images = require.context('../../img', true)
  return (
    <div className='wall'>
      <h1>NOTES TAKING</h1>
      <p>CREATE YOUR NOTE</p>
      <img src={images('./back.png')} alt={''} className='back' />
      <img src={images('./logout.png')} alt={''} className='logout' />
      <img src={images('./noteOne.png')} alt={''} className='create' />
    </div>
  )
}
