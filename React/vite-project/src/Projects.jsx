import React from 'react'
import ProjectCard from './ProjectCard'
const Projects = ({th}) => {
  let p1 = {
    imageLink : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvoepvuPOUAdZrY-BKITIPcAjDxnVIgkXskA&usqp=CAU",
    projectTittle : "Tic-Tac-Toe",
    projectDes:"Tic tac toe is a 2 player game and we have made this using DOM manipulations and HTML , CSS and JS ",
    github:"https://github.com/saurabhbansal2443/Tic-Tac-Toe-",
    projectLink:"https://saurabhbansal2443.github.io/Tic-Tac-Toe-/"
  }
  
  return (
    <div className="d-flex flex-wrap justify-content-around py-3 gap-3  w-100 vh-100" style={{backgroundColor:th.theme=="light"?"#f8f9fa" : "#212529"}}>
      
      <ProjectCard project={p1} th={th}></ProjectCard>
      <ProjectCard th={th}></ProjectCard>

      <ProjectCard th={th}></ProjectCard>
      <ProjectCard th={th}></ProjectCard>
      <ProjectCard th={th}></ProjectCard>

       <ProjectCard th={th}></ProjectCard>
       <ProjectCard th={th}></ProjectCard>
       <ProjectCard th={th}></ProjectCard>
    </div>
  )
}

export default Projects