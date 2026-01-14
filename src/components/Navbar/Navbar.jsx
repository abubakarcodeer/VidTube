import React from 'react'
import './Navbar.css'
import menuIcon from '../../assets/menu.png'
import searchIcon from '../../assets/search.png'
import uploadIcon from '../../assets/upload.png'
import moreIcon from '../../assets/more.png'
import notificationIcon from '../../assets/notification.png'
import profileIcon from '../../assets/user_profile.jpg'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar({ setSidebar }) {
  return (
    <nav className='flex-div'>
      <div className="nav-left flex-div">
        <img src={menuIcon} alt="" className='menu-icon' onClick={() => setSidebar(prev => prev === false ? true : false)} />
       <Link to={'/'}> <img src={logo} alt="" className='logo' /></Link>
      </div>
      <div className="nav-middle flec-div" >
        <div className="search-box flex-div">
          <input type="text" placeholder='Search' />
          <img src={searchIcon} alt="" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={uploadIcon} alt="" />
        <img src={moreIcon} alt="" />
        <img src={notificationIcon} alt="" />
        <img className='user-icon' src={profileIcon} alt="" />
      </div>
    </nav>
  )
}

export default Navbar