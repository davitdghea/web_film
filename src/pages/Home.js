import React, { useContext } from 'react'
import Button from '../components/common/Button'
import Heart from '../components/common/Heart'
import MovieCards from '../components/common/MovieCards'
import FilmDetails from '../components/common/FilmDetails'
import {AipContext} from '../stores/trending/index.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4
}; 

const Home = () => {
  const { movies } = useContext(AipContext)
  return (
    <div >
      <div className='flex items-center bg-cover bg-center w-full h-[455px]' style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/05b3/f62d/1ed524068bf7052043a0e38fd2ff1d0a?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H1Oukky0qY~Pj~wirZWaqx9ZFjyrEi8SG3mn2haNkDB7V8N6ur-3pqV9OZn0M5DF40EBJwkdYH5coKmDSgfHQ0XYd3QmmeZxFcxUFTAKL4LrnmBTO9uuy38oMJkVPxJT9DG~M4z2hOvh3zcWwUUjCxLsaK9J-HEHA-So0Xp4fJKVvQzBrlgZzibEYEa9z3OC1ZArg6p9k~RfCL6ez3t737gE2ihbscFGVn69Lx6yfQEN7s49szpZjR4K7UAkCavci9k85okDuDWke9tEaKIbjIL4mQwgdIiPMUKE~RiR42-ZZ0fK-O3i7br7qnrYRfWekCrt7AL3wsnzrDhM8GM6Ew__')" }}>
        <Button title="Watch now" customStyle='px-[24px] py-[17px]' />
        <Heart customStyle='w-[54px] h-[54px]' sizeIcon={24} />
      </div>
      <div className='bg-gradient-to-r from-gray-500 to-gray-900 w-full max-w-[calc(100vw-274px)]'>
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

export default Home