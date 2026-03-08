import React from 'react'
import image from './images/img.png'

function About() {
  return (
    <section>
        <h2 className='fs-2 fw-bold text-light'>About <span className='text-primary'>Me</span></h2>
        <div id='aboutimg' className='text-center mt-5'>
        <img   src={image} alt="" />
       
        </div>
        <p className='mt-5  text-light paraabout'>I am a passionate Frontend Developer with a Bachelor's degree in Engineering. After completing my B.Tech, I worked as a Python Trainer where I gained valuable experience teaching programming concepts and helping students build a strong foundation in coding. During my teaching journey, I developed a deeper interest in building real-world applications and modern web technologies. This inspired me to transition into Full Stack Development, where I now focus on creating responsive and user-friendly web applications.</p>
    </section>
  )
}

export default About