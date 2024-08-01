import React  from 'react'
import Heart from './Heart'

const MovieCards = ({ OnClickHeart, favorite, customStyle, title, date, img, idFilm, onCartClick, genres }) => {
    const years = date.substring(0, 4)
  
    return (
       
            <div onClick={() => { onCartClick(idFilm); OnClickHeart(favorite) }} className={`${customStyle} text-black  bg-red-300 rounded-2xl relative   mt-[16px]  cursor-pointer`} >
                <div onClick={() => {  OnClickHeart(favorite) }}  className=' z-5 right-1 absolute top-2 '>
                    <Heart heart={favorite}  idFilm={idFilm} customStyle='w-[32px] h-[32px]' sizeIcon={14.22} />
                </div>
                <img className={` w-full h-full rounded-2xl  `} src={`https://image.tmdb.org/t/p/original${img}`} alt=''>
                </img>
                <div className='h-[86px] w-full absolute rounded-b-2xl bottom-0 bg-gradient-to-r from-white to-gray'>
                    <div className='mt-5 ml-5 text-sm lg:text-xl'>
                        <p>{title}</p>
                        <p>{years} | {genres}</p>
                    </div>
                </div>

            </div>
      
       
    )
}

export default MovieCards