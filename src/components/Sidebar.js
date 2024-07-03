import React from 'react'
import { Logo, Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8 } from '../asset/logo'
import path from '../ultils/path'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='bg-black w-[274px] h-[1024px]'>
      <Link to={path.PUBLIC}>
        <h3 className='flex pt-[35px] ml-[40px] '>
          <Logo />
          <span className='font-poppins size-[22px] text-white ml-3 mt-2' >WATCH</span>
        </h3>
      </Link>
      <div className=''>
        <Link to={path.HOME}><div className='flex mt-[45px] ml-[40px] '>
          <Icon1 />
          <span className='font-poppins size-[22px] text-white ml-3 ' >Home</span>
        </div></Link>
        <Link to={path.Favourites}><div className='flex mt-[35px] ml-[40px] '>
          <Icon2 />
          <span className='font-poppins size-[22px] text-white ml-3 ' >Favourites</span>
        </div></Link>
        <Link to={path.Trending}><div className='flex mt-[35px] ml-[40px] '>
          <Icon3 />
          <span className='font-poppins size-[22px] text-white ml-3 ' >Trending</span>
        </div></Link>
        <Link to={path.HOME}><div className='flex mt-[35px] ml-[40px] '>
          <Icon4 />
          <span className='font-poppins size-[22px] text-white ml-3 ' >Coming</span>
        </div></Link>
        <Link to={path.HOME}><div className='flex mt-[125px] ml-[40px] '>
          <Icon5 />
          <span className='font-poppins size-[22px] text-white ml-3 ' >Community</span>
        </div></Link>
        <Link to={path.HOME}><div className='flex mt-[35px] ml-[40px] '>
          <Icon6 />
          <span className='font-poppins size-[22px] text-white ml-3 ' >Social</span>
        </div></Link>
        <Link to={path.HOME}><div className='flex mt-[265px] ml-[40px] '>
          <Icon7 />
          <span className='font-poppins size-[22px] text-white ml-3 ' >Settings</span>
        </div></Link>
        <Link to={path.HOME}><div className='flex mt-[35px] ml-[40px] '>
          <Icon8 />
          <span className='font-poppins size-[22px] text-white ml-3 ' >Logout</span>
        </div></Link>
      </div>
    </div>
  )
}

export default Sidebar