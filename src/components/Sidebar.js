import React, { useState } from 'react'
import { Logo, Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8 } from '../asset/logo'
import path from '../ultils/path'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import ScrollableDiv from './common/roll';
const Sidebar = () => {
 
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  const handleLogout = () => {
    localStorage.removeItem('request_token');
    localStorage.removeItem('sessionId');
  }
  return (
    <ScrollableDiv styles="w-full fixed z-30 lg:max-w-[274px]  lg:max-h-[652px] overflow-auto lg:scrollable">
      <div className={`block lg:hidden cursor-pointer pl-[10px] z-8 w-1/2 ${isMenuOpen ? 'bg-black' : ''} ${isMenuOpen ? 'sm:hidden' : 'sm:block'}`} >
        <IoMenu color='white' size={30} onClick={handleMenuToggle} />
      </div>
      
      <div className={`justify-around h-100vh ${isMenuOpen ? 'flex ' : 'hidden'} lg:block`}>
      <div className={` lg:block top-0 lg:pl-[40px] left-0 lg:w-full w-1/2 bg-black h-full flex flex-col p-5 z-9`}>
        <Link to={path.PUBLIC}>
          <h3 className='flex lg:pt-[35px] pt-[10px]'>
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
          <div className=' lg:mt-[125px]'>
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
          <div className=' lg:mt-[265px]'>
            <Link to={path.HOME} className='flex'>
              <Icon7 />
              <span className='font-poppins size-[22px] text-white ml-3'>Settings</span>
            </Link>
          </div>
          <div >
            <Link className='flex' to={path.Login} onClick={handleLogout}>
              <Icon8 />
              <span className='font-poppins size-[22px] text-white ml-3 ' >Logout</span>
            </Link>
          </div>
        </div>
      </div>
        <div className={`${isMenuOpen ? ' block ' : ' hidden '} w-1/2  bg-black opacity-10`} onClick={handleMenuToggle}>
     
      </div>
      </div>
      
    
    </ScrollableDiv >
   
  )
}

export default Sidebar