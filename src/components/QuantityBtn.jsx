import React from 'react'
import { useLocation } from 'react-router-dom';
import { FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";
import useGetContextHook from '../hooks/useGetContextHook';
import "../styles/components/QuantityBtn.css"

 // Updates the quantity of an item
export default function QuantityBtn({item}) {

  const pathname = useLocation().pathname
  const {itemsInCart ,setItemsInCart} = useGetContextHook()

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

  const removeItem = () => {
    const alreadyInCart = itemsInCart?.find(cartItem => cartItem.item === item.item)
    const otherCartItems = itemsInCart?.filter(cartItem => cartItem.item !== item.item)
    if(alreadyInCart){
      if(alreadyInCart.quantity  - 1 <= 0){
        setItemsInCart([...otherCartItems])
      }
      else {
        const updateCartItem = {...alreadyInCart , quantity : alreadyInCart.quantity - 1}
        setItemsInCart([...otherCartItems, updateCartItem ])
      }
    }
  }

  return (
    <div className={`quantityBtns ${pathname.includes("cart")? "cartPosition" : ""}`} >
      <FaMinusCircle className={`sub-btn`} onClick={removeItem}/>
      <p>{itemsInCart?.find(cartItem => cartItem.item === item.item)?.quantity || 0}</p>
      < FaCirclePlus className={`plus-btn `} onClick={addItem}/>
    </div>
  )
}

