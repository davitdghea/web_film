import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Public = () => {
  return (
    <div className='flex font-poppins bg-gradient-to-r from-customPurple via-customDarkGray to-customDarkGray'>
      <Sidebar/>
      <div className='w-full relative bg-zinc-800'>
       <Navbar/>
        <Outlet  />
      </div>  
    </div>
  )
}

export default Public