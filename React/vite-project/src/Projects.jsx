import React from 'react'
import ProjectCard from './ProjectCard'
const Projects = () => {
  let p1 = {
    imageLink : "",
    projectTittle : "",
    projectDes:"",
    github:"",
    projectLink:""
  }
  return (
    <div className="d-flex flex-wrap justify-content-around gap-3 my-3">
      
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>

      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>

       <ProjectCard></ProjectCard>
       <ProjectCard></ProjectCard>
       <ProjectCard></ProjectCard>
    </div>
  )
}

export default Projects