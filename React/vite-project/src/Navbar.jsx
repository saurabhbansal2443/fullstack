import React from 'react'
import { Link } from 'react-router-dom';
import pdf from "./Images/resume.pdf";

const Navbar = (props) => {

  console.log(props.dark);
  let light = "navbar navbar-expand-lg  bg-body-tertiary ";
  let dark = "navbar navbar-expand-lg  navbar-dark bg-dark ";
  let color = " navbar navbar-expand-lg navbar-light ";
  return (
    <nav className={props.dark==true ? dark : light} >
  <div className="container-fluid" >
    <Link className="navbar-brand " to="/">SaurabhBansal</Link>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href={pdf} target="_blank">Resume</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/project" >Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/contact">Contact Us </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/about">About  </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar