import React, { useContext } from 'react'
import { Favouritescontext } from '../stores/getfavourites'
import Slider from "react-slick";
import MovieCards from './common/MovieCards'
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 1364,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            },
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
    ],
};
const FavouritesComPoNents = () => {
    const { getFavourites } = useContext(Favouritescontext)
    
  return (
    <div className=' w-full mx-4 max-w-[calc(100vw-274px)] '>
        <div className=' text-white px-[33px] pt-[70px] text-[20px]'>
          <Slider {...settings}>
          {getFavourites?.map(el=>(
            
              <MovieCards
              key={el.id} 
              customStyle="md:w-[205px] md:h-[201px] lg:w-[255px] lg:h-[301px]" 
              title={el.title} 
              date={el.release_date} 
              img={el.backdrop_path} 
              idFilm={el.id}></MovieCards>
          ))
          }
          </Slider>
    </div>
    </div>
  )
}

export default FavouritesComPoNents