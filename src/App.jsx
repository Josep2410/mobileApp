import React from 'react'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route  } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './routes/Home';
import Menu from './routes/Menu';
import MenuItemPage from './routes/MenuItemPage';
import Cart from './routes/Cart';
import Account from './routes/Account'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './styles/routes/App.css'

function App() {
  
  const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='menu' element={<Menu />} />
          <Route path='menu/:foodItem' element={<MenuItemPage />} />
          <Route path='cart' element={<Cart />} />
          <Route path='account' element={<Account />} />
        </Route >
      )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
