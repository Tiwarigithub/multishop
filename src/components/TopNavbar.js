import React from 'react'
import "./TopNavbar.css";
import { NavLink } from 'react-router-dom';

function TopNavbar() {
  return (
    <>
      <nav className="navbar">
  <div className="navbar-brand">
    <span className="hindi-text">मल्टी</span>Shop
  </div>
  <ul className="navbar-menu">
    <li>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
    </li>
    <li className="dropdown">
      <NavLink to="/Options" className="nav-link dropdown-toggle">
        Options
      </NavLink>
      <ul className="dropdown-menu">
        <li>
          <NavLink to="/Food" className="dropdown-item">
            Food
          </NavLink>
        </li>
        <li>
          <NavLink to="/Grocery" className="dropdown-item">
            Grocery
          </NavLink>
        </li>
      </ul>
    </li>
    <li>
      <NavLink to="/SignUp" className="nav-link">
        Sign Up
      </NavLink>
    </li>
  </ul>
</nav>

    </>
  )
}

export default TopNavbar
