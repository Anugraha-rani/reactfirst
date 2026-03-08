import React from 'react'

function Contact() {
  return (
    <main className='d-flex justify-content-center align-items-center flex-column'>
    <h2 className='fs-2 fw-bold text-light'>Contact  <span className='text-primary'> Me!</span></h2>
    <div id='formdiv'>
   <form action="" id='forms' className=''>
    <div className='inputfield'>
    <input className='form-control' type="text" placeholder='Full name' required/>
    <span></span>
    </div>
    <div  className='inputfield'>
    <input className='form-control' type="text" placeholder='Email address' required/>
    <span></span>
    </div>
    <div  className='inputfield'>
    <input className='form-control' type="number" placeholder='Mobile number' required/>
    <span></span>
    </div>
    <div  className='inputfield'>
    <input className='form-control' type="text" placeholder='Email subject' required/>
    <span></span>
    </div>
    <div  className='inputfield'>
    <textarea className='form-control' name="" cols={10} rows={5} placeholder='Your message' required id=""></textarea>
    <span></span>
    </div>
    <div className='text-center'>
      <button id='btndec'>Submit</button>
    </div>
   </form>
   
   </div>

    </main>
  )
}

export default Contact