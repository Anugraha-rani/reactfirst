import React from 'react'
import './index.css'

function Header() {
  return (
    <nav className='d-flex justify-content-between align-items-center px-5 py-2' id='navbar'>
    <p style={{color:' white'}} className='fs-4 fw-bold' >Olivia.</p>
    <div>
    <a href="" className='headsec px-5 fs-5 fw-bold'>About</a>
    <a href="" className='headsec px-5 fs-5 fw-bold'>Skills</a>
    </div>
    </nav>
  )
}

export default Header