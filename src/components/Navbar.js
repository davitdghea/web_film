import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
const Navbar = () => {
    return (
        <div className='flex h-[32px] lg:justify-between items-center lg:mt-[40px] lg:ml-[25px] justify-end mr-[10px] absolute w-full max-w-[1000px] z-20'>
            <div className='lg:flex hidden w-full max-w-[294px]  justify-between text-white'>
                <span className='cursor-pointer'>Movies</span>
                <span className='cursor-pointer'>Series</span>
                <span className='cursor-pointer'>Documentaries</span>
            </div>
            <div className='w-full lg:max-w-[194px] max-w-[100px] flex justify-between sm:float-right text-white items-center'>
                <span className='cursor-pointer'><IoIosSearch /></span>
                <span className='cursor-pointer'><FaRegBell/></span>
                <span className='cursor-pointer flex items-center'><FaUser />
                <span className='cursor-pointer ml-2'>name</span></span>
                
            </div>
        </div>
    )
}

export default Navbar