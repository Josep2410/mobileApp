import React , {useState} from 'react'
import useGetContextHook from '../hooks/useGetContextHook'
import { getTotalNumberOfItems , getPriceOfItems } from '../utils/utils'
import { Link } from 'react-router-dom'
import MyModal from '../components/MyModal'
import MenuItem from '../components/MenuItem'
import OrderSubmition from '../components/OrderSubmition'
import "../styles/routes/Cart.css"

export default function Cart() {

  const {itemsInCart , submitOrder } = useGetContextHook()

  return (
    submitOrder
      ? <OrderSubmition />
      :
        itemsInCart?.length >=1 
          ? 
            <div className='cartPage'>
              <h2>Cart</h2>
              <DisplayCartItems itemsInCartArr={itemsInCart} />
              <DisplayPrices itemsInCart={itemsInCart}/>
            </div>
          : 
            <div className='noItems'>
              <h3>No Items in Cart <br />
                <Link to="/menu?filter=popular">
                  start order
                </Link>
              </h3>
            </div>
  )
}


function DisplayCartItems({itemsInCartArr}){

  // first sort the arr in alphabetical order then map to render MenuItem components
  return(
      itemsInCartArr
        .sort((cartItem , cartItem2) => {
          if(cartItem.item < cartItem2.item ) return -1
          if(cartItem.item > cartItem2.item ) return 1
          return 0})
        .map((cartItem , index) => <MenuItem key={index} item={cartItem} />)
  )
}

// display quantity in cart , subtotal , taxes, and total
function DisplayPrices({itemsInCart }){

  const {total , subTotal, taxes} = getPriceOfItems(itemsInCart)
  const totalNumOfItems = getTotalNumberOfItems(itemsInCart)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <section className='price-info'>
        <div className='row '>
          <p className='col-10'>Total Number of Items : </p>
          <p className='col-2 pushToEnd'>{totalNumOfItems}</p>
        </div>
        <div className='row '> 
          <p className='col-8'>Subtotal : </p>
          <p className='col-4 pushToEnd'>$ {subTotal}</p>
        </div>
        <div className='row'>
          <p className='col-8'>Taxes : </p>
          <p className='col-4 pushToEnd'>$ {taxes}</p>
        </div>
        <div className='row'>
          <p className='col-9 total'>Total : </p>
          <p className='col-3 total-price pushToEnd'>${total}</p>
        </div>
        <button className='btn btn-primary col-9 submitOrder-btn' onClick={handleShow}>
          Submit Order
        </button>
        <MyModal show={show} handleClose={handleClose} />
      </section>
  )
}


