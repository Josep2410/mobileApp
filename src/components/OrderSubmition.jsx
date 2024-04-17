import React , {useState , useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';
import useGetContextHook from '../hooks/useGetContextHook';
import { FaCheck } from "react-icons/fa";
import '../styles/components/OrderSubmition.css'

export default function OrderSubmition() {

  const navigate = useNavigate()
  const {setSubmitOrder , setItemsInCart} = useGetContextHook()
  const [success , setSuccess] = useState(false)
  const [isRedirecting , setIsRedirecting] = useState(false)

 /*  
    Three useEffects. If condition is met, do x. 
    Each useEffect is built upon the last. 
  */

  useEffect(() => {
    // set success to be true after 2.5 seconds
   const timeout = setTimeout(() => {
    setSuccess(true)
    setItemsInCart([])
   }, 2500 ) 

   return () => clearTimeout(timeout)

  }, [])

  useEffect(() => {
    let timeout
       
      // set IsRedirecting to true after 1.5 seconds
    if(success){
      timeout = setTimeout(() => {
      setIsRedirecting(true)
      }, 1500)
    }

    return () => clearTimeout(timeout)

  } , [success])

  useEffect(() => {
    let timeout

      // after 3 seconds return back to home
    if(success && isRedirecting){

     timeout = setTimeout(() => {
        setSuccess(false)
        setIsRedirecting(false)
        setSubmitOrder(false)
        navigate("/")
        }, 3000 ) 
    }

    return () => clearTimeout(timeout)

   }, [isRedirecting])

  /* 
   LOGIC FOR RETURN STATEMENT - 
      if (!success) render 'submitting order'
      else {
          render 'order successfully submitted'
          if ( isRedirecting ) render spinner
      }
  */

  return (
    <section className='orderSubmitted'>
      {
        success 
        ?
          <>
            <h2 >Successfully Submitted <FaCheck className='svg mx-2' style={{color : "green"}}/></h2>
            {
              isRedirecting && 
                <>
                  <p className='redirecting'>Redirecting back to Home</p>
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner> 
              </>
            }
          </>
        : 
          <>
            <h2>Submitting Order</h2>
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner> 
          </>
      }
    </section>
  )
}
