import React from 'react'
import {useState} from 'react'


function Skills() {
  const [showSkills,setShowSkills]= useState(false)
  function skillsButton(){
    setShowSkills(!showSkills)
  }
  return (
    <section>
      <div className='text-center'>
  <button id='skillbutton' onClick={skillsButton}><h2 className='fs-2 fw-bold text-light'>My <span className='text-primary'>Skills</span></h2></button> 
  </div>
 { showSkills && (
    <div id='skilltop'>
     <div id='skillsection'>
      <div id='progress'>
        <h3>HTML <span>90%</span></h3>
        <div className='bar'><span id='first'></span></div>
      </div>
      <div id='progress'>
        <h3>CSS <span>85%</span></h3>
        <div className='bar'><span id='second'></span></div>
      </div>
      <div id='progress'>
        <h3>JavaScript <span>78%</span></h3>
        <div className='bar'><span id='third'></span></div>
      </div>
     </div>
     </div>
 )}
    </section>

  )
}

export default Skills