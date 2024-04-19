import React, { useState } from 'react'
import { FiBell } from "react-icons/fi";
import './Header.css'

const Header = () => {
    const [activeNotification, setActiveNotification] = useState(true)
  return (
    
    <div className='header-container'>
        <div className="notification">
            <FiBell className='bell'/>
            <div className= {activeNotification ? 'bell-active' : null}></div>
        </div>
        <div className="avatar">
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg" alt="" />
            <div className="notification-act"></div>
        </div>
      
    </div>
  )
}

export default Header
