import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi';
import {CgClose}  from "react-icons/cg";

export default function Navbar() {
  const [clicked, setClicked ] = useState(false);

  const handleClick = () =>{
    setClicked(!clicked);
    console.log("clicked");
  }
  return (
    <>
      <nav className="main-div">
        <div className="logo">
          <h1>NavBar</h1>
        </div>
        <div className="menu-icon" onClick={handleClick}>
        {
          clicked ? <CgClose className='cross cbtn'/> : <GiHamburgerMenu className='hamburger cbtn' />
        }
          
        </div>
        <div className={clicked ? "nav-link" : "nav-link close" }>
          <ul>
            <li><NavLink to='/' activeClassName='active'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/service'>Service</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
          </ul>

        </div>
        {/* <div className="buttons">
          <button className='btn btn-primary'>Login</button>
          <button className='btn btn-primary'>Register</button>
        </div> */}
      </nav>

    </>
  )
}
