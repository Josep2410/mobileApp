import React , {useState , useEffect } from 'react'
import { useSearchParams , Link } from 'react-router-dom'
import useGetContextHook from '../hooks/useGetContextHook'
import MenuItem from '../components/MenuItem'

import '../styles/routes/Menu.css'

export default function Menu() {

  // Have an initial loading state for a more 'realistic' approach
  const [isLoading, setIsLoading] = useState(true) 

  // grab 'menuItems' array from context
  const {menuItems} = useGetContextHook()

  // get query in URL , store value in 'filter' variable
  const [searchParams , setSearchParams] = useSearchParams()
  const filter = searchParams.get("filter")

  // filter 'menuItems' array based on query
  const filteredMenuItems = !filter 
                              ? menuItems
                              : filter === 'popular'
                                ? menuItems.filter(item => item.popular)
                                : filter === 'food'
                                  ? menuItems.filter(item => item.type === "food")
                                  : menuItems.filter(item => item.type === "drinks")

  // Handle Loading State. Set Loading State to false after 1 second
  useEffect(() => {
   let timeout 
   if(isLoading){
    timeout = setTimeout(() => {
      setIsLoading(false)
    } , 1000)
    }
    return () => clearTimeout(timeout)
  }, [])

  return (
    isLoading 
          ? 
            <section className='loadingScreen'>
              <h2>Loading...</h2>
            </section>
          : 
            <div className='menuPage'>
              <h2>Menu</h2>
              <div className='filter-btns-container'>
                <Link 
                  to="?filter=popular" 
                  className={`${filter==="popular" ? "activeFilter" : "nonActiveFilter"}`}
                >
                  Popular
                </Link>
                <Link 
                  to="?filter=food" 
                  className={`${filter==="food" ? "activeFilter" : "nonActiveFilter"}`}
                >
                  Food
                </Link>
                <Link to="?filter=drinks" className={`${filter==="drinks" ? "activeFilter" : "nonActiveFilter"}`}
                >
                  Drinks
                </Link>
              </div>
              {
                filteredMenuItems.map(item => <MenuItem key={item.item} item={item}/>)
              }
             </div>     
  )
}


