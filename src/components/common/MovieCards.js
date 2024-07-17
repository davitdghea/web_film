import React  from 'react'
import Heart from './Heart'

const MovieCards = ({ favorite, customStyle, display, title, date, img, idFilm, onCartClick, genres }) => {
    const years = date.substring(0, 4)
    console.log(favorite)
    return (
        <div onClick={() => { onCartClick(idFilm) }} className={`${customStyle} text-black bg-red-300 rounded-2xl relative  mt-[16px] z-0 cursor-pointer `} >
            <img className={` w-full h-full rounded-2xl  `} src={`https://image.tmdb.org/t/p/original${img}`} alt=''>
            </img>
            <div className=' right-2 absolute top-[10px] '>
                <Heart  heart={favorite} display={display} idFilm={idFilm}   customStyle='w-[32px] h-[32px]' sizeIcon={14.22} />
            </div>
            <div className='h-[86px] w-full absolute rounded-b-2xl bottom-0 bg-gradient-to-r from-white to-gray'>
                <div className='mt-5 ml-5 '>
                    <p>{title}</p>
                    <p>{years} | {genres}</p>
                </div>

            </div>

        </div>
    )
}

export default MovieCards