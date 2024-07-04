import React, { useContext } from 'react'
import MovieCards from '../components/common/MovieCards'
import FilmDetails from '../components/common/FilmDetails'
import {AipContext} from '../stores/trending/index.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Navbar from './Navbar.js'

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4
}; 

const TrendingComponent = () => {
  const { movies } = useContext(AipContext)
  return (
    <div >
      <div className='h-[129px]'>
        <Navbar/>
      </div>
      <div className='text-white h-[30px] font-semibold text-left ml-[25px] text-[20px] '>Trending at this moment</div>
      <div className='bg-gradient-to-r from-gray-500 to-gray-900 w-full max-w-[calc(100vw-274px)] mt-[16px] '>
        
        <Slider {...settings}>
        {movies.map(el =>(
          <MovieCards title={el.title} date={el.release_date} img={el.backdrop_path}  co='w-[274px] h-[301px]' />
        )
        )}
       </Slider>
      </div>
      <FilmDetails/>
    </div>
    
    
  )
}

export default TrendingComponent