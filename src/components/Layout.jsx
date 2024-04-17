import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import NavigationBar from './NavigationBar'
import useGetContextHook from '../hooks/useGetContextHook'
import '../styles/components/Layout.css'

 // Layout component. Every page will have the Header and Navigation Bar components displayed
export default function Layout() {

  const {submitOrder} = useGetContextHook()

  return (
    <div className='container-sm'>
      <Header />
      <Outlet />
      {!submitOrder && <NavigationBar />}
    </div>
  )
}
