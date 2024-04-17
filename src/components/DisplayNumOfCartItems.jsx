import React from 'react'
import useGetContextHook from '../hooks/useGetContextHook'
import { getTotalNumberOfItems } from '../utils/utils'
import '../styles/components/NumOfCartItems.css'

 // Display number of items in cart. use getTotalNumberOfItems function from utils.jsx to determine number
export default function NumOfCartItems() {

  const {itemsInCart} = useGetContextHook()
  let numOfItemsInCart = getTotalNumberOfItems(itemsInCart)

  return (
    <span 
      className= {`numInCart ${ numOfItemsInCart? "position-on-screen" : "disappear"}`}
      >
      {numOfItemsInCart}
    </span>
  )
}
