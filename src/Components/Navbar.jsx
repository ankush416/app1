import React from 'react'
import { NavLink } from 'react-router-dom'
import Elearn from '../Images/Elearning.jpeg'
// a ki jga navlink kyu use kiya href ko to see change kyu kiya
import '../css/style.css'
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/"><img src={Elearn} alt="..." className='elearn-logo' /> Elearning</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="about">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/courses">Courses</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/contact'>Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>



    </>
  )
}

export default Navbar
