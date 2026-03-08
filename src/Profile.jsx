import React from 'react'
import image from './images/img.png'
import './index.css'
function Profile() {
  return (
    <div className='d-md-flex justify-content-between'>
        <div id='profilepart' className=' text-light   '>
        <p className='fs-4 fw-bold '>Hello, I'm </p>
        <p className='fs-1 fw-bold'>Olivia Stone</p>
        <p className='fs-3 fw-bold text-primary'>Frontend Developer</p>
        <p>I am a passionate Frontend Developer student with a strong interest in building modern and responsive web applications.I have experience working with technologies such as HTML, CSS, JavaScript, React, Bootstrap, and Tailwind CSS.</p>
        <div className='mt-5 d-flex buttonbox' style={{gap:50}}>
        <button className='' id='btndec'>Hire Me</button>
        <button  id='btndec'>Let's Talk</button>
        </div>
        <div className='mt-5' id='homeicons'>
      <a href="https://www.linkedin.com/in/anugraharani/" target='_blank' className=' fonts'><i  class="fa-brands fa-linkedin-in " ></i></a>  
      <a href="" className='mx-3 fonts'><i class="fa-brands fa-whatsapp ml-5" ></i></a>  
     <a href="" className=' fonts'><i class="fa-brands fa-facebook-f" ></i></a>   
     <a href="" className='mx-3 fonts'><i class="fa-brands fa-instagram" ></i></a>  
        </div>
        </div>
        <div id='imgpart'>
            <img src={image} id='photo' alt="" />
        </div>

    </div>
  )
}

export default Profile