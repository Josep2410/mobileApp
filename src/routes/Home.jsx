import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/routes/Home.css'

// This file contains three functional components : Home , HomeOpener, & HomeOption
export default function Home() {
  return (
    <div className='homePage'>
      <HomeOpener />

      <HomeOption 
        option="MENU"
        src="images/gallinaIndia.jpg"
        alt="cooked chicken, a side of vegetables, and dipping sauce" 
        >
        <p className='description'>
          New here? Don't worry, we offer a variety of salvadoran food everyone can enjoy. Check out our <Link to="/menu?filter=popular">popular items</Link> or browse <Link to="/menu">full menu</Link>.
        </p>
      </HomeOption >

      <HomeOption 
        option="Cart"
        src="images/BirriaTacos.jpg"
        alt="Three Birria Tacos" 
        >
        <p className='description'>
          <Link to="/cart">View your cart</Link> and see your current items. Add and remove items and Checkout when you're ready.
        </p>
      </HomeOption >

      <HomeOption 
        option="Account"
        src="images/quesadillaPan.webp"
        alt="A Bread Dessert called Quesadilla" 
        >
        <p className='description'><Link to="/Account?form=create account">Create an account</Link> to view past orders, heart your favorite items, and earn reward points or <Link to="/Account?form=login">login</Link> </p>
      </HomeOption >
    </div>
   
   )
}

function HomeOpener(){
  return(
    <section className='opener'>
        <img 
          className="img-fluid" 
          src="images/pupusasDish.jpg" 
          alt="pupusas, lettuce, and marinara sauce" 
        />
        <h3>The Best Salvadoran Food in Houston, Texas</h3>
        <Link to="/menu?filter=popular">Start Order</Link>
      </section>
  )
}

function HomeOption({ option, src, alt, children }){
  return(
    <section className='option'>
      <div className='section-img-container'>
        <img 
          className="img-fluid" 
          src={src}
          alt={alt}
          />
        <h4>{option}</h4>
      </div>
      {children}
    </section>
  )
}
