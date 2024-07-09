import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Favorites } from '../../stores/favourites'
const Heart = ({ customStyle, sizeIcon,  idFilm }) => {
  const [isHeart, setIsHeart] = useState(false)

  const handClick = () => {
    setIsHeart(!isHeart);

  }
  return (
    <div className={`cursor-pointer mx-[10px] bg-gradient-to-r to-gray from-white ${customStyle} flex items-center justify-center border border-white-2 rounded-xl`}
         onClick={handClick} >
      {isHeart && <Favorites idFilm={idFilm}/>}
      {isHeart ? <FaHeart color='#6100C2' size={sizeIcon} />:<FaRegHeart color='#6100C2' size={sizeIcon} />}
    </div>
  )
}

export default Heart