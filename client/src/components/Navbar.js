import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo192.png";

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <NavLink className='navbar-brand' to='/'>
            <img
              className='navbar__logo'
              width={"40rem"}
              height={"40rem"}
              src={logo}
              alt='logo'
            />
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <NavLink className='nav-link' to='/' end>
                <li className='nav-item'>Home</li>
              </NavLink>
              <NavLink className='nav-link' to='/about'>
                <li className='nav-item'>About</li>
              </NavLink>
              <NavLink className='nav-link' to='/contact'>
                <li className='nav-item'>Contact</li>
              </NavLink>
              <NavLink className='nav-link' to='/login'>
                <li className='nav-item'>Login</li>
              </NavLink>
              <NavLink className='nav-link' to='/signup'>
                <li className='nav-item'>Signup</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
