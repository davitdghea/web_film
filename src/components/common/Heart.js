import React, {  useContext, useEffect, useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Favorites } from '../../stores/Favoutites/addfavourites'
import { RemoteFavorites } from '../../stores/Favoutites/remoteFavourites';
import { AipContext } from '../../stores/trending';

const Heart = ({ heart, customStyle, sizeIcon, idFilm }) => {
  const { refreshApiCall } = useContext(AipContext);
  const [isHeart, setIsHeart] = useState(heart)
  useEffect(() => {
    setIsHeart(heart);
  }, [heart]);
  const [isHeart2, setIsHeart2] = useState(false)
  const handClick = () => {
    setIsHeart(!isHeart);
    setIsHeart2(!isHeart2)
    refreshApiCall()
  }

  return (
    <div className={`cursor-pointer mx-[10px] bg-gradient-to-r to-gray from-white ${customStyle} flex items-center justify-center border border-white-2 rounded-xl`}
         onClick={handClick} >
      {isHeart ? (isHeart2 && <Favorites idFilm={idFilm} />) : (isHeart2 && <RemoteFavorites idFilm={idFilm} />) }
      {isHeart ? <FaHeart color='#6100C2' size={sizeIcon} /> : <FaRegHeart color='#6100C2' size={sizeIcon} />}
    </div>
  )
}

export default Heart



