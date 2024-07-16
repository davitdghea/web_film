import React, { useContext, useState } from 'react'
import MovieCards from '../components/common/MovieCards'
import DetailsMoves from '../stores/DetailsMoves'
import { AipContext } from '../stores/trending/index.js'
import Slider from "react-slick";
import DetailsFilm from './details/Index.js'

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

const HomeComponents = () => {
    const { mergedArray } = useContext(AipContext)    
    console.log(mergedArray)
    const [selectedFilm, SetSelectedFilm] = useState(null)
    const handClick = (id) => {
        SetSelectedFilm(id)
    }
    const [detail, setDetail] = useState('');
    const handleDetailFetched = (data) => {
        setDetail(data);
    };
 
    return (
        <div className='font-poppins '>
            <div className=' w-full '>
                {selectedFilm && <DetailsMoves idFilm={selectedFilm} callChar={handleDetailFetched} />}
                {<DetailsFilm IdYouToBe={detail[0]?.key} title={detail[0]?.name} status={detail[0]?.type}  />}
            </div>
            <div className=' w-full mx-4 max-w-[calc(100vw-274px)] '>
                <span className='text-white  px-[33px] pt-[6px] text-[20px]'>Trending</span>
                <Slider {...settings}>
                    {mergedArray?.map(el => (
                        <MovieCards 
                        favorite={el.favorite}
                        genres={el.genres[0].name}
                        key={el.id}
                        onCartClick={handClick} 
                        LinkYouToBe={el.LinkYouToBe} 
                        idFilm={el.id} 
                        title={el.title} 
                        date={el.release_date} 
                        img={el.backdrop_path} 
                        customStyle="md:w-[205px] md:h-[201px] lg:w-[255px] lg:h-[301px]" />
                    )
                    )}
                </Slider>
            </div>
            <div className='h-[300px]'>
            </div>
        </div>


    )
}

export default HomeComponents