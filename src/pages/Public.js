import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Public = () => {
  return (
    <div className='bg-black lg:flex w-full  font-poppins h-100vh'>
      
        <Sidebar />
      
      
      <div className=' lg:ml-[274px] w-full lg:max-w-[calc(100vw-274px)] h-100vh relative bg-zinc-800 flex  justify-end pr-7'>
        
        <Navbar/>
        <Outlet  />
       
      </div>  
     
    </div>
  )
}

export default Public