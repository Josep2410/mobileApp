import React from 'react'
import { useLocation } from 'react-router-dom'
import NavItem from './NavItem';
import NumOfCartItems from './DisplayNumOfCartItems'
import "../styles/components/NavigationBar.css"

// SVGs for the Nav Bar. Render based on current location. 
import { GoHome } from "react-icons/go";              // home svg outline
import { GoHomeFill } from "react-icons/go";          // home svg filled
import { IoCart } from "react-icons/io5";             // cart svg outline
import { IoCartOutline } from "react-icons/io5";      // cart svg filled
import { IoFastFoodOutline } from "react-icons/io5";  // food svg outline
import { IoFastFoodSharp } from "react-icons/io5";    // food svg filled
import { CiUser } from "react-icons/ci";              // user svg outline
import { FaUser } from "react-icons/fa"               // user svg filled


export default function NavigationBar() {

  // grab location & current path from current URL
  const location = useLocation()
  const currentPath = location.pathname  

  // Conditionally render SVG based on current pathname. Either outline or filled version.
  return (
    <nav className="nav justify-content-evenly" >
      <NavItem link="/" isActive={currentPath === "/"}>
        {
          currentPath === "/" 
            ? <GoHomeFill className='svg' /> 
            : <GoHome className='svg'/> 
        } 
      </NavItem>
      <NavItem link="/menu?filter=popular" isActive={currentPath.includes("menu")} >
      {
          currentPath.includes("menu")
            ? <IoFastFoodSharp className='svg' /> 
            : <IoFastFoodOutline className='svg'/> 
        }
      </NavItem>
      <NavItem link="/cart" isActive={currentPath === "/cart" }>
        <div className='cart-container'>
        <NumOfCartItems />
        {
            currentPath === "/cart" 
              ? <IoCart className='svg'/> 
              : <IoCartOutline className='svg' /> 
          } 
    
        </div>
      </NavItem>
      <NavItem link="/account?form=login" isActive={currentPath.includes("account") }> 
        {
          currentPath === "/account" 
            ? <FaUser  className='svg'/> 
            : <CiUser  className='svg' /> 
        } 
      </NavItem>
    </nav>
  )
}



