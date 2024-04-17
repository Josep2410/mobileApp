import React from 'react'
import {Link } from 'react-router-dom'

export default function NavItem({ link, children , isActive}){
  return(
    <Link to={link} className="nav-link">
        <div className={`navItem ${isActive? "active" : ""}`} >
          {children}
        </div>
    </Link>
  )
}