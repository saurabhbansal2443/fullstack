import React from "react";

const ProjectCard = ({project , th }) => {
  
    let p = {
        imageLink : "",
    projectTittle : "Portfolio Coming ",
    projectDes:"",
    github:"",
    projectLink:"" 
    }
   if(project==undefined){
    project = p ;
   }
   console.log(th, "from project card ")
  return (
    <div>
      <div className="card" style={{width: "18rem" , backgroundColor:th.theme=="light"?"white" : "#435585" , color:th.theme=="light"?"black":"white"}}>
        <img src={project.imageLink} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{project.projectTittle}</h5>
          <hr></hr>
          <p className="card-text">
           {project.projectDes}
          </p>
        </div>
        <div className="card-body">
          <a target="_blank" href={project.github} className="card-link">
            Github Link 
          </a>
          <a  target="_blank" href={project.projectLink} className="card-link">
            Project Link 
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
