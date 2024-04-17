import React from 'react'
import { Link , useSearchParams , useLocation } from 'react-router-dom'
import { FaCirclePlus } from "react-icons/fa6";
import useGetContextHook from '../hooks/useGetContextHook';
import QuantityBtn from './QuantityBtn';
import '../styles/components/MenuItem.css'

export default function MenuItem({item}) {

  /*  Get query in URL , store value in 'filter' variable . 
      Purpose is to send filter value within state in Link. 
  */ 
  const [searchParams , setSearchParams] = useSearchParams()
  const filter = searchParams.get("filter")

  const pathname = useLocation().pathname


  
// Display item from props
  return(
    <section className='item'>
        <Link 
          to={item.item} 
          state={{query : filter }} 
          className='item-img-container'
        >
          <img className="img-fluid" src={item.img} alt={item.alt} />
        </Link>

        <div className='item-info'>

          <Link to={item.item} state={{query : filter}}>
            <h3>{item.item}</h3>
          </Link>

          <h4>${item.price}</h4>
          
          {
            pathname.includes("menu") 
              ? <PlusBtn item={item}/> 
              : <QuantityBtn item={item}/>
          }
        </div>
    </section>
  )
}

function PlusBtn({item}){

    // bring in 'itemsInCart' array from context. 
    const {itemsInCart ,setItemsInCart} = useGetContextHook()

    // If item is already in cart, increase quantity by 1. Otherwise, add item to cart and set quantity to 1
    const addItem = () => {
      const alreadyInCart = itemsInCart?.find(cartItem => cartItem.item === item.item)
      const otherCartItems = itemsInCart?.filter(cartItem => cartItem.item !== item.item)
  
      if(alreadyInCart){
        const updateCartItem = {...alreadyInCart , quantity : alreadyInCart.quantity + 1}
        setItemsInCart([...otherCartItems, updateCartItem ])
      }
      else{
        const newItem = {...item , quantity : 1}
        setItemsInCart([...otherCartItems , newItem])
      }
    }

  return(
    <FaCirclePlus className='plus-btn position' onClick={addItem}/>
  )
}
