import React from 'react'
import { Logo, Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8 } from '../asset/logo'
import path from '../ultils/path'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='bg-black w-full max-w-[274px] pl-[40px] shadow-white'>
      <Link to={path.PUBLIC}>
        <h3 className='flex pt-[35px] '>
          <Logo />
          <span className='font-poppins size-[22px] text-white ml-3 mt-2' >WATCH</span>
        </h3>
      </Link>
      <div className='flex flex-col gap-[35px] mt-[35px]'>
        <div >
          <Link className='flex' to={path.HOME}>
            <Icon1 />
            <span className='font-poppins size-[22px] text-white ml-3' >Home</span>
          </Link>
        </div>
        <div >
          <Link className='flex' to={path.Favourites}>
            <Icon2 />
            <span className='font-poppins size-[22px] text-white ml-3' >Favourites</span>
          </Link>
        </div>
        <div >
          <Link className='flex' to={path.Trending}>
            <Icon3 />
            <span className='font-poppins size-[22px] text-white ml-3 ' >Trending</span>
          </Link>
        </div>
        <div >
          <Link className='flex' to={path.HOME}>
            <Icon4 />
            <span className='font-poppins size-[22px] text-white ml-3'>Coming</span>
          </Link>
        </div>
        <div className=' mt-[125px]'>
          <Link to={path.HOME} className='flex'>
            <Icon5 />
            <span className='font-poppins size-[22px] text-white ml-3'>Community</span>
          </Link>
        </div>
        <div >
          <Link className='flex' to={path.HOME}>
            <Icon6 />
            <span className='font-poppins size-[22px] text-white ml-3' >Social</span>
          </Link>
        </div>
        <div className=' mt-[265px]'>
          <Link to={path.HOME} className='flex'>
            <Icon7 />
            <span className='font-poppins size-[22px] text-white ml-3'>Settings</span>
          </Link>
        </div>
        <div >
          <Link className='flex' to={path.Login}>
            <Icon8 />
            <span className='font-poppins size-[22px] text-white ml-3 ' >Logout</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar