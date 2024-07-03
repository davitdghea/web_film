import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
const Heart = ({sizeDiv , sizeIcon}) => {
    const [isHeart,setIsHeart] = useState(true)
    const handClick = ()=>{
        setIsHeart(!isHeart)
    }
  return (
      <div className={`cursor-pointer mx-[10px] bg-gradient-to-r to-gray from-white ${sizeDiv} flex items-center justify-center border border-white-2 rounded-xl`} onClick={handClick}>
      {isHeart ? <FaRegHeart color='#6100C2' size={sizeIcon} /> : <FaHeart color='#6100C2' size={sizeIcon} />}
    </div>
  )
}

export default Heart