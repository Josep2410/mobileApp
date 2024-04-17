import React, {createContext , useState} from 'react'
import useGetMenuItems from '../hooks/useGetMenuItemsHook'

export const Context = createContext()

export default function MyContext({children}) {

  const [itemsInCart , setItemsInCart] = useState([])
  const [submitOrder , setSubmitOrder] = useState(false)
  const menuItems = useGetMenuItems()


  return (
    <Context.Provider value={{
        menuItems , 
        itemsInCart , setItemsInCart,
        submitOrder , setSubmitOrder
    }}>
      {children}
    </Context.Provider>
  )
}
