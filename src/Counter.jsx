
import './index.css'
import { useState } from 'react'

function Counter() {
  
    const[likes,setLikes] = useState(0)
  
    function likesButton(){
      setLikes(likes+1)
    }
  
  return (
    <section>
    <div className=' d-flex align-items-center justify-content-center mt-5'>
      <p className='text-light fs-1'>If you like it, press </p>
      <button id='thumbsup' onClick={likesButton}><i class="fa-regular fa-thumbs-up"></i></button>
      </div>
      <div className='d-flex align-items-center justify-content-center'>
        <p className='text-light fs-3'>{likes} <span className='text-primary'>Likes</span></p>
      </div>
      </section>
    
  )
}

export default Counter