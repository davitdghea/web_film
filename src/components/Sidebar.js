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
        <Link to={path.HOME}><div className='flex'>
          <Icon1 />
          <span className='font-poppins size-[22px] text-white ml-3' >Home</span>
        </div></Link>
        <Link to={path.Favourites}><div className='flex'>
          <Icon2 />
          <span className='font-poppins size-[22px] text-white ml-3' >Favourites</span>
        </div></Link>
        <Link to={path.Trending}><div className='flex'>
          <Icon3 />
          <span className='font-poppins size-[22px] text-white ml-3 ' >Trending</span>
        </div></Link>
        <Link to={path.HOME}><div className='flex'>
          <Icon4 />
          <span className='font-poppins size-[22px] text-white ml-3'>Coming</span>
        </div></Link>
        <Link to={path.HOME}><div className='flex mt-[125px]'>
          <Icon5 />
          <span className='font-poppins size-[22px] text-white ml-3'>Community</span>
        </div></Link>
        <Link to={path.HOME}><div className='flex'>
          <Icon6 />
          <span className='font-poppins size-[22px] text-white ml-3' >Social</span>
        </div></Link>
        <Link to={path.HOME}><div className='flex mt-[265px]'>
          <Icon7 />
          <span className='font-poppins size-[22px] text-white ml-3'>Settings</span>
        </div></Link>
        <Link to={path.Login}><div className='flex'>
          <Icon8 />
          <span className='font-poppins size-[22px] text-white ml-3 ' >Logout</span>
        </div></Link>
      </div>
    </div>
  )
}

export default Sidebar