import React from 'react'
import Heart from './Heart'
import Button from './Button'
import StarRatings from 'react-star-ratings'


const FilmDetails = () => {
    return (
        <div className='w-full h-[550px] flex items-center justify-between gap-[24px]'>
            <div className=' w-1/2 h-[431px]  flex items-center justify-center ' >
                <span>
                    <img src="https://www.simpleimageresizer.com/_uploads/photos/8be27dd6/a23f1b217acfa7375285a925d4865c22_534x431.jpg" alt=''></img>
                </span>
            </div>
            <div className='w-1/2 h-[300px] text-white'>
                <div className=' flex justify-between'>
                    <h2 className='text-[32px] font-semibold'>House of Wealth</h2>
                    <StarRatings  />
                </div>
                
                <span className='flex justify-between w-[250px] mt-[12px] text-[18px]'>
                    <span>2023</span>
                    <span>Drama</span>
                    <span>2h 38m</span>
                </span>
                <p className='text-start mt-[20px] text-[16px] mr-[30px]'>
                    The movie follows the lives of a wealthy family, the Johnsons, 
                    who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.
                </p>
                <div className='flex items-center mt-[25px]'>
                    <Button title='Watch now' customStyle="px-[24px] py-[17px]"/>
                    
                    <Heart customStyle='h-[54px] w-[54px]' sizeIcon={24}/>
                </div>
            </div>
        </div>
    )
}

export default FilmDetails