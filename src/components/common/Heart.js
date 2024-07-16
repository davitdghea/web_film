import React, { useEffect, useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Favorites } from '../../stores/Favoutites/addfavourites'
import { RemoteFavorites } from '../../stores/Favoutites/remoteFavourites';
// import { RemoteFavorites } from '../../stores/Favoutites/remoteFavourites'
const Heart = ({ heart, customStyle, sizeIcon, idFilm, callback }) => {
  
  const [isHeart, setIsHeart] = useState(heart)
  
  const [isHeart2, setIsHeart2] = useState(false)
  const handClick = () => {
    setIsHeart(!isHeart);
    setIsHeart2(!isHeart2)
    callback(isHeart)
  }

  return (
    <div className={`cursor-pointer mx-[10px] bg-gradient-to-r to-gray from-white ${customStyle} flex items-center justify-center border border-white-2 rounded-xl`}
         onClick={handClick} >
      {heart ? (isHeart2 && <RemoteFavorites idFilm={idFilm} />) : (isHeart2 && <Favorites idFilm={idFilm} />)}
      {isHeart ? <FaHeart color='#6100C2' size={sizeIcon} /> : <FaRegHeart color='#6100C2' size={sizeIcon} />}
    </div>
  )
}

export default Heart