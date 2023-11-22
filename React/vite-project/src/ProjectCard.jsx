import React from "react";

const ProjectCard = () => {
  return (
    <div>
      <div className="card" style={{width: "18rem"}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className="card-body">
          <a href="#" className="card-link">
            Github Link 
          </a>
          <a href="#" className="card-link">
            Project Link 
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
