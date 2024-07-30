import React, { useContext, useEffect, useState } from 'react';
import MovieCards from '../components/common/MovieCards';
import DetailsMoves from '../stores/DetailsMoves';
import { AipContext } from '../stores/trending/index.js';
import Slider from "react-slick";
import DetailsFilm from './details/Index.js';
import ScrollableDiv from './common/roll.js';
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
   
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
       
        {
            breakpoint: 768,
            settings: {
                
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const HomeComponents = () => {

    const { MergedArray } = useContext(AipContext);
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [selectedHeart, setSelectedHeart] = useState(null);
    const [detail, setDetail] = useState('');
    const handleClickheart = (id) => {
        setSelectedHeart(id);
    };
    const handleClick = (id) => {
        setSelectedFilm(id);
    };
    useEffect(()=>{
        handleClick()
    }, [selectedHeart])
    const handleDetailFetched = (data) => {
        setDetail(data);
    };

   
   
    return (
        <div className='font-poppins w-full  md:max-w-[100%] relative'>
            <div className=' w-full fixed z-20'>
                {selectedFilm && <DetailsMoves idFilm={selectedFilm} callChar={handleDetailFetched} />}
                {<DetailsFilm IdYouToBe={detail[0]?.key} heart={selectedHeart} idFilm={selectedFilm} title={detail[0]?.name} status={detail[0]?.type} />}
            </div>
            <div className='w-full h-[230px]'>
            </div>
            <div className='w-full lg:mx-3 md:mt-[180px] sm:mt-[20px] max-md:ml-3'>
                <span className='text-white mt-[6px] text-[20px]'>Trending</span>
                <Slider {...settings}>
                    {MergedArray?.map(el => (
                        <MovieCards
                            favorite={el.love}
                            genres={el.genres[0]?.name}
                            key={el.id}
                            OnClickHeart={handleClickheart}
                            onCartClick={handleClick}
                            LinkYouToBe={el.LinkYouToBe}
                            idFilm={el.id}
                            title={el.title}
                            date={el.release_date}
                            img={el.backdrop_path}
                            customStyle="w-full lg:h-[305px] h-full"
                        />
                    ))}
                </Slider>
            </div>
            <div className='h-[400px]'></div>
        </div>

    );
};

export default HomeComponents;
