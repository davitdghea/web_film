import React from 'react'
import Heart from './Heart'

const MovieCards = ({ co, title, date, img }) => {
    return (
        <div className={`${co} bg-red-300  rounded-2xl relative mx-auto`}>
            <img className={`w-fill h-full rounded-2xl  `} src={`https://image.tmdb.org/t/p/original${img}`}>
            </img>
            <div className=' right-2 absolute top-[10px]'>
                <Heart sizeDiv='w-[32px] h-[32px]' sizeIcon={14.22} />
            </div>
            <div className='h-[86px] w-full absolute bottom-0 bg-gradient-to-r from-white to-gray'>
                <p>{title}</p>
                <p>{date}</p>

            </div>

        </div>
    )
}

export default MovieCards