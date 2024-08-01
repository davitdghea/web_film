import React, { useContext, useEffect, useState } from 'react'

import MovieCards from './common/MovieCards'
import  { AipContext } from '../stores/trending'

const FavouritesComPoNents = () => {
    const { MergedArray } = useContext(AipContext)
    
    useEffect(()=>{
        console.log('FavoriteMovies', MergedArray)
    }, [MergedArray])
    const [selectedFilm, SetSelectedFilm] = useState(null)
    const handClick = (id) => {
        SetSelectedFilm(id)
    }
    const handClickTroll = (id) => {
        SetSelectedFilm(id)
    }
    return (
        <div className=' w-full mx-4 md:min-h-[1360px] max-md:ml-6'>
            <div className=' text-white w-full max-w-[1500px] lg:ml-[10px] mt-[130px] text-[20px] '>
                <span>Favourites</span>
                <div className='flex flex-wrap '>
                    {MergedArray?.filter(el => el.love === true ).map(el => (
                        <MovieCards
                            favorite={true}
                            OnClickHeart={handClickTroll}
                            onCartClick={handClick}
                            genres={el.genres[0].name}
                            key={el.id}
                            customStyle="truncate md:w-[235px] md:h-[181px] lg:w-[325px] lg:h-[250x] mr-[10px] "
                            title={el.title}
                            date={el.release_date}
                            img={el.backdrop_path}
                            idFilm={el.id}>
                        </MovieCards>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FavouritesComPoNents