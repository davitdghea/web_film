import React from 'react'
import Heart from './Heart'
import Button from './Button'

const FilmDetails = () => {
    return (
        <div className='w-full h-[550px] flex items-center justify-between gap-2'>
            <div className='bg-amber-200 w-1/2 h-[431px] flex items-center justify-center'>
                <span>img</span>
            </div>
            <div className='w-1/2 h-[300px] text-white'>
                <div className=' flex justify-between'>
                    <h2 className='text-2xl'>House of Wealth</h2>
                    <span>star</span>
                </div>
                
                <span className='flex justify-between w-[250px] mt-[12px]'>
                    <span>2023</span>
                    <span>Drama</span>
                    <span>2h 38m</span>
                </span>
                <p className='text-start mt-[20px]'>
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