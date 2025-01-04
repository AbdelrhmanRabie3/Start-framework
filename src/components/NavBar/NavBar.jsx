import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Home from '../Home/Home'
import About from './../About/About';

export default function NavBar() {
  return <>
  <nav className="navbar fixed-top  navbar-expand-lg bg-light-dark py-4">
  <div className="container">
    <Link className="navbar-brand fs-2 text-white fw-bolder" to={''} >Start Framework
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link fs-6 fw-bolder text-white" aria-current="page" to={'About'}>ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-6 fw-bolder text-white" aria-current="page" to={'Portfolio'}>PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-6 fw-bolder text-white" to={'Contact'}>CONTACT</NavLink></li>
      </ul>

    </div>
  </div>
</nav>
  
  </>
}
