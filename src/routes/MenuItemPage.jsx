import React from 'react'
import { useParams , Link , useLocation } from 'react-router-dom'
import useGetContextHook from '../hooks/useGetContextHook'
import { IoIosArrowBack } from "react-icons/io";
import QuantityBtn from '../components/QuantityBtn'

import '../styles/routes/MenuItemPage.css'

export default function MenuItemPage() {

    //grab dynamic params from current URL
  const params = useParams().foodItem

    // grab query value from Link-state
  const query = useLocation().state?.query
 
    // grab 'menuItems' array from context
  const {menuItems} = useGetContextHook()

    // grab current menuItem based on URL (params value) and 'menuItems' arr
  const menuItem =  menuItems.find(menuItem => menuItem.item === params)


  // div soup caused by bootstrap. div.col nested within div.row
  return (
    <div className='menuItemPage'>
      <section className='menuItemPage-img-container'>
        <img className="img-fluid" src={menuItem.img} alt={menuItem.alt}/>
      </section>
      <div className='row d-flex align-items-center p-3'>
        <div className='col-3'>
          <Link to={`..?filter=${query}`} relative="path">
            <IoIosArrowBack className='backArrow'/>
          </Link>
        </div>
        <h2 className='col-9'>
          {menuItem.item}
        </h2>
      </div>
      <div className='row'>
        <div className='col-1'></div>
        <div className='col-10 text-center m-1' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, doloribus ipsum. Culpa nobis aspernatur saepe placeat quo vitae alias? Veniam, deleniti libero. Minima, quasi.</div>
        <div className='col-1'></div>
      </div>
      <br />
      <div className='row priceAndBtns'>
        <div className='col-1'>{/* SPACE FILLER */}</div>
        <p className='col-5 d-flex justify-content-center align-items-center m-1'>
          ${menuItem.price}
        </p>
        <div className='col-5 m-1'>
          <QuantityBtn item={menuItem}/>
        </div>
        <div className='col-1'>{/* SPACE FILLER */}</div>
      </div>
    </div>
  )
}
