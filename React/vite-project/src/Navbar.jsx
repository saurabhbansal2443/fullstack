import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import pdf from "./Images/resume.pdf";
import { ThemeContext } from './Theme';

const Navbar = () => {

  let {theme,setTheme} = useContext(ThemeContext)
  let light = "navbar navbar-expand-lg  bg-body-tertiary ";
  let dark = "navbar navbar-expand-lg  navbar-dark bg-dark ";
  return (
    <nav className={theme=="light" ? light : dark} >
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
    <button style={{textTransform:"capitalize"}} type="button" className="btn btn-secondary " onClick={()=>theme=="light"?setTheme("dark"):setTheme("light")}> {theme} </button>
  </div>
</nav>
  )
}

export default Navbar