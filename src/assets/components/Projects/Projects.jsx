import React from 'react'
import { Link } from 'react-router-dom';
import prema from '../../Media/prema.jpg'
import heyman from '../../Media/heyman.jpg'
import './Projects.css'


const Projects = () => {
  return (
    <div className='Projects'>
    <br></br>
    <Link to="/aksharalaprema">
                <img 
                    src={prema} 
                    alt="2 Aksharala Prema" 
                />
    </Link>
        <img src={heyman}></img>
    </div>
  )
}

export default Projects
