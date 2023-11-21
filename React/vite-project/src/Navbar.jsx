import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-bg-body-tertiary bg-transparent position-fixed ">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/">SaurabhBansal</Link>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="#">Resume</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/project">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/contact">Contact Us </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/about">About  </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar