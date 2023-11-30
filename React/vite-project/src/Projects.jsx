import React from 'react'
import ProjectCard from './ProjectCard'
import { useContext } from 'react'
import { ThemeContext } from './Theme'
import projectsArray from "../src/assets/ProjectInfo"
const Projects = () => {
  let {theme} = useContext(ThemeContext)
  
  return (
    <div className="d-flex flex-wrap justify-content-around py-3 gap-3  w-100 vh-100" style={{backgroundColor:theme=="light"?"#f8f9fa" : "#212529"}}>
      
     {projectsArray.map((ele)=> <ProjectCard project={ele}></ProjectCard>)}
    </div>
  )
}

export default Projects