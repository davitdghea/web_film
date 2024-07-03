import React from 'react'
import Heart from './Heart'

const MovieCards = ({ customStyle, title, date, img }) => {
    return (
        <div className={`${customStyle}  bg-red-300  rounded-2xl relative mx-auto`}>
            <img className={`w-full h-full rounded-2xl  `} src={`https://image.tmdb.org/t/p/original${img}`} alt=''>
            </img>
            <div className=' right-2 absolute top-[10px]'>
                <Heart customStyle='w-[32px] h-[32px]' sizeIcon={14.22} />
            </div>
            <div className='h-[86px] w-full absolute rounded-b-2xl bottom-0 bg-gradient-to-r from-white to-gray'>
                <div className='mt-5 ml-5 '>
                    <p>{title}</p>
                    <p>{date}</p>
                </div>

            </div>

        </div>
    )
}

export default MovieCards