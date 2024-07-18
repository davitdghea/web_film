import React, { useContext, useState } from 'react'
import { Favouritescontext } from '../stores/Favoutites/getfavourites'
import MovieCards from './common/MovieCards'

const FavouritesComPoNents = () => {
    const { MovieFovotites } = useContext(Favouritescontext)
    console.log(MovieFovotites)
    const [selectedFilm, SetSelectedFilm] = useState(null)
    const handClick = (id) => {
        SetSelectedFilm(id)
    }
    return (
        <div className=' w-full mx-4 max-w-[calc(100vw-274px)] '>
            <div className=' text-white w-full max-w-[1500px] ml-[10px] mt-[130px] text-[20px] '>
                <span>Favourites</span>
                <div className='flex flex-wrap'>
                    {MovieFovotites?.map(el => (
                        <MovieCards
                            display="none"
                            favorite = {true}
                            onCartClick={handClick}
                            genres={el.genres[0].name}
                            key={el.id}
                            customStyle="truncate md:w-[205px] md:h-[201px] lg:w-[345px] lg:h-[259x] mr-[30px] "
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