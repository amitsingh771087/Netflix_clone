import React from 'react'
import './Navbar.css'

import Logo from '../../assets/logo.png'
import Search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_icon from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';


const Navbar = () => {
  return (
    
    <div className='navbar'>
    <div className="navbar-left">
    <img src={Logo} alt="Logo" />
    <ul>
      <li>Home</li>
      <li>TV Show</li>
      <li>Movies</li>
      <li>New & Popular</li>
      <li>My List</li>
      <li>Browse by Languages</li>
    </ul>
    </div>
    <div className="navbar-right">
      <img src={Search_icon} alt="search_icon" className='icons' />
      <p>Children</p>
      <img src={bell_icon} alt="bell_icon" className='icons' />
      <div className="navbar-profile">
      <img src={profile_icon} alt="profile_icon" className='profile' />
      <img src={caret_icon} alt="dropdown"  />
      <div className="dropdown">
        sign out of Netflix
      </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar